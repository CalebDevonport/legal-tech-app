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

  model = new Advisor(1, '', '', '', '', UserType.Advisor, 0);

  constructor() { }

  get diagnostic() { return this.model; }

  onSubmit() {
    console.log(this.diagnostic);
    this.advisorList.push(this.model);
    console.log(this.advisorList);
    const newClientNum = this.advisorList.sort()[this.advisorList.length - 1].id + 1;
    this.model = new Advisor(newClientNum, '', '', '', '', UserType.Advisor, 0);
    console.log(this.diagnostic);
    this.advisorForm.resetForm(this.model);
  }

}
