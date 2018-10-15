import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http: HttpClient;

    constructor(private handler: HttpBackend, private router: Router) {
        // the following line is used to ignore the interceptor for this service
        this.http = new HttpClient(handler);
    }

    registerUser(userData: {}) {
        return this.http.post('http://localhost:3000/clients/register', userData);
    }

    loginUser(userData: {}) {
        this.http.post<any>(`http://localhost:3000/auth/login`, userData).subscribe(
            response => {
                localStorage.setItem('mAToken', response.token);
                this.router.navigate(['/dashboard']);
            },
            error => console.log(error)
        );
    }

    logout() {
        localStorage.removeItem('mAToken');
        this.router.navigate(['/login']);
    }

    getToken() {
        return localStorage.getItem('mAToken');
    }

    isAuthenticated() {
        return localStorage.getItem('mAToken') != null;
    }
}
