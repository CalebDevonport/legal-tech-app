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

  advisorList: Advisor[] = [];

  model = new Advisor(1, '', '', '', '', UserType.Advisor, null);

  constructor() { }

  onSubmit() {
    this.advisorList.push(this.model);
    const newClientNum = this.advisorList.sort()[this.advisorList.length - 1].id + 1;
    this.model = new Advisor(newClientNum, '', '', '', '', UserType.Advisor, 0);
    this.advisorForm.resetForm(this.model);
  }

}
