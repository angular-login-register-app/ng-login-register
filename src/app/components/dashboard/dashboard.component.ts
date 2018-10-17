import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    firstName = '';
    lastName = '';
    profileCompletion = 19;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.firstName = this.authService.firstName;
        this.lastName = this.authService.lastName;
    }

}
