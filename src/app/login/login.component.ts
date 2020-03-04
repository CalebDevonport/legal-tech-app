import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  advisor = 'lawyer.lawyerman@outlook.com';
  client = 'debbie.unsworth@gmail.com';

  @ViewChild('loginForm') public loginForm: NgForm;

  model = {
    emailAddress: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.model = {
      emailAddress: '',
      password: ''
    };

    if (this.loginForm.form.get('emailAddress').value === this.advisor) {
      this.router.navigate(['/messages/advisor']);
    } else if (this.loginForm.form.get('emailAddress').value === this.client) {
      this.router.navigate(['/messages/client']);
    }

    this.loginForm.resetForm(this.model);
  }

}
