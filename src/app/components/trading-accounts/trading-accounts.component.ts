import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trading-accounts',
  templateUrl: './trading-accounts.component.html',
  styleUrls: ['./trading-accounts.component.css']
})
export class TradingAccountsComponent implements OnInit {
    firstName = localStorage.getItem('clientFirstName');
    lastName = localStorage.getItem('clientLastName');
    profileCompletion = 19;

  constructor() { }

  ngOnInit() {
  }

}
