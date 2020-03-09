import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { chatMessages } from './chatMessages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {

  @ViewChild('messageForm') public messageForm: NgForm;

  firstMessageSent = false;

  messages = [];
  name = 'David';

  model = {
    message: ''
  };

  returnMessages = ['I am not sure if I can get him to agree. What if he does not agree?', 'Okay, what do you mean by mediation?']

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.messages = chatMessages;
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  onSubmit() {
    const date = new Date();
    let data = {
      message: this.model.message,
      name: this.name,
      time : date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    };

    this.messages = [...this.messages , data];

    this.model = {
      message: ''
    };

    this.messageForm.resetForm(this.model);

    this.changeDetectorRef.detectChanges();

    let returnMessage = {
      message: '',
      name: 'Debbie',
      time : date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    };

    if (this.firstMessageSent) {
      returnMessage.message = this.returnMessages[1];
    } else {
      returnMessage.message = this.returnMessages[0];
    }

    this.firstMessageSent = true;

    setTimeout(() => {
      this.messages = [...this.messages , returnMessage];
      this.changeDetectorRef.detectChanges();
    }, 2000);
  }
}
