import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

    onSignin(form: NgForm) {
        const username = form.value.username;
        const password = form.value.password;
        this.authService.loginUser({username, password});
    }
}
