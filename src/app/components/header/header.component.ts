import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    firstName = localStorage.getItem('clientFirstName');
    lastName = localStorage.getItem('clientLastName');
    notificationsNum = 4;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        this.authService.firstName.subscribe(
            (name: string) => {
                this.firstName = name;
            }
        );
        this.authService.lastName.subscribe(
            (name: string) => {
                this.lastName = name;
            }
        );
    }

    onLogout() {
        this.authService.logout();
    }

}
