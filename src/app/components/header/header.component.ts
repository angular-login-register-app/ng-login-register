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
    }

    onLogout() {
        this.authService.logout();
    }

}
