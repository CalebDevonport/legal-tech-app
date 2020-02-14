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
import { RegisterComponent } from './register/register.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { FormsModule } from '@angular/forms';
import { AdvisorRegistrationComponent } from './advisor-registration/advisor-registration.component';

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClientRegistrationComponent,
    AdvisorRegistrationComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
