import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { RegisterComponent } from './register/register.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { FormsModule } from '@angular/forms';
import { AdvisorRegistrationComponent } from './advisor-registration/advisor-registration.component';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { MessageSelectorComponent } from './message-selector/message-selector.component';
import { NewCaseComponent } from './new-case/new-case.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register/client',
    component: ClientRegistrationComponent
  },
  {
    path: 'register/advisor',
    component: AdvisorRegistrationComponent
  },
  {
    path: 'messages',
    component: MessageSelectorComponent
  },
  {
    path: 'newCase',
    component: NewCaseComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClientRegistrationComponent,
    AdvisorRegistrationComponent,
    MessageSelectorComponent,
    NewCaseComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FlexLayoutModule,
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    DigitOnlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
