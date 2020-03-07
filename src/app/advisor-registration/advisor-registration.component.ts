import { Advisor } from './../user/advisor';
import { UserType } from './../user/user-types';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-advisor-registration',
  templateUrl: './advisor-registration.component.html',
  styleUrls: ['./advisor-registration.component.css']
})
export class AdvisorRegistrationComponent {

  @ViewChild('advisorForm') public advisorForm: NgForm;

  formSubmitted = false;
  sraID = null;

  model = new Advisor(1, '', '', '', '', UserType.Advisor, null);

  constructor() { }

  onSubmit() {
    this.sraID = this.model.sraID;
    this.formSubmitted = true;
  }

  reRegister() {
    this.formSubmitted = false;
  }

}
