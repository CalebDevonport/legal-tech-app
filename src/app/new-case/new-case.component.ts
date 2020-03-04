import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.css']
})
export class NewCaseComponent implements OnInit {

  firstQuestionAnswered = false;
  secondQuestionAnswered = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFirstClick() {
    this.firstQuestionAnswered = true;
  }

  onSecondClick() {
    this.secondQuestionAnswered = true;
  }
}
