import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../../../services/auth.service';
import {CanComponentDeactivate} from '../../../services/guards/can-deactivate.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {
    countries: any = ['Malaysia', 'Cyprus', 'Africa', 'United States of America', 'United Kingdom'];
    status = false;
    currentCountry = 'Malaysia';

    @ViewChild('f') form: NgForm;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSignup() {
        const first_name = this.form.value.firstName;
        const last_name = this.form.value.lastName;
        const email = this.form.value.email;
        const country = this.form.value.country;
        const phone = this.form.value.phoneNumber;
        const username = this.form.value.username;
        const password = this.form.value.password;
        const countryCode = this.form.value.countryCode;

        this.authService.registerUser({last_name, email, country, phone, username, password, first_name}).subscribe(
            (response: any) => {
                if (response.status === true) {
                    this.status = true;
                }
            },
            error => console.log(error)
        );
        this.form.onReset();
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.form.touched) {
            return true;
        }

        if (this.form.dirty) {
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    }
}
