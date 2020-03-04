import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-selector',
  templateUrl: './message-selector.component.html',
  styleUrls: ['./message-selector.component.css']
})
export class MessageSelectorComponent implements OnInit {

  typeVal = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.typeVal = this.route.snapshot.params['type'];
  }
}
