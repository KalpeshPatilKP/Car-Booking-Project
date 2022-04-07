import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { CustomerLogInComponent } from './login/customer-log-in/customer-log-in.component';
import { DriverLogInComponent } from './login/driver-log-in/driver-log-in.component';
import { CustomerSignUpComponent } from './signup/customer-sign-up/customer-sign-up.component';
import { DriverSignUpComponent } from './signup/driver-sign-up/driver-sign-up.component';
import { AdminLogInComponent } from './login/admin-log-in/admin-log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    CustomerLogInComponent,
    DriverLogInComponent,
    AdminLogInComponent,
    CustomerSignUpComponent,
    DriverSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
