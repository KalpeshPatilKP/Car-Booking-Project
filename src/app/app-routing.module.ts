import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLogInComponent} from './login/admin-log-in/admin-log-in.component';
import {DriverLogInComponent} from './login/driver-log-in/driver-log-in.component';
import {CustomerLogInComponent} from './login/customer-log-in/customer-log-in.component';
import {CustomerSignUpComponent} from './signup/customer-sign-up/customer-sign-up.component';
import {DriverSignUpComponent} from './signup/driver-sign-up/driver-sign-up.component';
import {AboutComponent} from './about/about.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {
    path:'login',component: LoginComponent,
    children: [
      {path:'customer', component:CustomerLogInComponent},
      {path:'driver', component:DriverLogInComponent},
      {path:'admin', component:AdminLogInComponent}
    ]
  },
  {
    path:'signup', component:SignupComponent,
    children:[
      {path:'customer', component:CustomerSignUpComponent},
      {path:'driver', component:DriverSignUpComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
