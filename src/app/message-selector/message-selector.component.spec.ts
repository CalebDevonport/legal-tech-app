import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSelectorComponent } from './message-selector.component';

describe('MessageSelectorComponent', () => {
  let component: MessageSelectorComponent;
  let fixture: ComponentFixture<MessageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
