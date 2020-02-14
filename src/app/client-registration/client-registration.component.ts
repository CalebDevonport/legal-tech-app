import { UserType } from './../user/user-types';
import { User } from './../user/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {

  clientList: User[] = [];

  model = new User(1, '', '', '', '', UserType.Client);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.diagnostic);
    this.clientList.push(this.model);
    console.log(this.clientList);
    const newClientNum = this.clientList.sort()[this.clientList.length - 1].id + 1;
    this.model = new User(newClientNum, '', '', '', '', UserType.Client);
    console.log(this.diagnostic);
  }

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
