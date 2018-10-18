import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    firstName = localStorage.getItem('clientFirstName');
    lastName = localStorage.getItem('clientLastName');
    profileCompletion = 19;

    constructor() {
    }

    ngOnInit() {
    }

}
