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

  messages = [];
  name = 'Lawyer';

  model = {
    message: ''
  };

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

    data = {
      message: 'I\'ll have a think and get back to you, thanks for your help!',
      name: 'Debbie',
      time : date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    };

    setTimeout(() => {
      this.messages = [...this.messages , data];
      this.changeDetectorRef.detectChanges();
    }, 2000);
  }
}
