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

  model = new User(1, '', '', '', '', UserType.Client);

  constructor() { }

  onSubmit() {
    this.formSubmitted = true;
  }
}
