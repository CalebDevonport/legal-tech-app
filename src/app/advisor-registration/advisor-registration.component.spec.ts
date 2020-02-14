import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorRegistrationComponent } from './advisor-registration.component';

describe('AdvisorRegistrationComponent', () => {
  let component: AdvisorRegistrationComponent;
  let fixture: ComponentFixture<AdvisorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
