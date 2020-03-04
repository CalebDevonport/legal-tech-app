import { UserType } from './../user/user-types';
import { User } from './../user/user';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent {

  @ViewChild('clientForm') public clientForm: NgForm;

  formSubmitted = false;

  clientList: User[] = [];

  model = new User(1, '', '', '', '', UserType.Client);

  constructor() { }

  onSubmit() {
    this.clientList.push(this.model);
    const newClientNum = this.clientList.sort()[this.clientList.length - 1].id + 1;
    this.model = new User(newClientNum, '', '', '', '', UserType.Client);
    this.clientForm.resetForm(this.model);
    this.formSubmitted = true;
  }
}
