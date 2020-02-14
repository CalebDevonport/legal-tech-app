import { UserType } from './../user/user-types';
import { User } from './../user/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advisor-registration',
  templateUrl: './advisor-registration.component.html',
  styleUrls: ['./advisor-registration.component.css']
})
export class AdvisorRegistrationComponent implements OnInit {

  advisorList: User[] = [];

  model = new User(1, '', '', '', '', UserType.Advisor);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.diagnostic);
    this.advisorList.push(this.model);
    console.log(this.advisorList);
    const newClientNum = this.advisorList.sort()[this.advisorList.length - 1].id + 1;
    this.model = new User(newClientNum, '', '', '', '', UserType.Client);
    console.log(this.diagnostic);
  }

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
