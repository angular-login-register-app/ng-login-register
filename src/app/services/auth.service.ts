import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private router: Router) {
    }

    registerUser(userData: {}) {
        return this.http.post('http://localhost:3000/clients/register', userData).subscribe(
            response => console.log(response),
            error => console.log(error)
        );
    }

    loginUser(userData: {}) {
        this.http.post<any>(`http://localhost:3000/auth/login`, userData).subscribe(
            response => {
                localStorage.setItem('mAToken', response.token);
                console.log(response.token);
                this.router.navigate(['/']);
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