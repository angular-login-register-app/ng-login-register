import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    firstName = '';
    lastName = '';
    notificationsNum = 4;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        this.firstName = this.authService.firstName;
        this.lastName = this.authService.lastName;
    }

    onLogout() {
        this.authService.logout();
    }

}
