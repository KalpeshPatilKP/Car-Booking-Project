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
import {AdminComponent} from './admin/admin.component';
import {CustomerComponent} from './customer/customer.component';
import {DriverComponent} from './driver/driver.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AllAdminsSearchComponent } from './admin/all-admins-search/all-admins-search.component';
import { AllAdminsUpdateComponent } from './admin/all-admins-update/all-admins-update.component';
import { AllCustomersSearchComponent } from './admin/all-customers-search/all-customers-search.component';
import { AllCustomerUpdateComponent } from './admin/all-customer-update/all-customer-update.component';
import { AllDriversSearchComponent } from './admin/all-drivers-search/all-drivers-search.component';
import { AllDriversUpdateComponent } from './admin/all-drivers-update/all-drivers-update.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { UpdateComponent } from './customer/update/update.component';
import { BookingComponent } from './customer/booking/booking.component';
import { HistoryComponent } from './customer/history/history.component';
import { TripComponent } from './customer/trip/trip.component';
import { CustomerPendingComponent } from './customer/customer-pending/customer-pending.component';
import { CustomerCancelledTripsComponent } from './customer/customer-cancelled-trips/customer-cancelled-trips.component';
import { DriverProfileComponent } from './driver/driver-profile/driver-profile.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { DriverRidesComponent } from './driver/driver-rides/driver-rides.component';
import { DriverAcceptOrDeclineRideComponent } from './driver/driver-accept-or-decline-ride/driver-accept-or-decline-ride.component';
import { DriverCancelledTripsComponent } from './driver/driver-cancelled-trips/driver-cancelled-trips.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {
    path:'login',component: LoginComponent,
    children: [
      {path:'customerlogin', component:CustomerLogInComponent},
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
  },

  {
    path:'admin/:adminId', component:AdminComponent,
    children:[
      {path:'profile',component: AdminProfileComponent},
      {path:'update' , component:AdminUpdateComponent},
      {path:'manageAdmins', component:AllAdminsSearchComponent},
      {path:'updateAdmins/:adminId',component:AllAdminsUpdateComponent},
      {path:'manageCustomers',component:AllCustomersSearchComponent},
      {path:'updateCustomers/:customerId',component:AllCustomerUpdateComponent},
      {path:'manageDrivers',component:AllDriversSearchComponent},
      {path:'updateDrivers/:driverId',component:AllDriversUpdateComponent}
    ]
  },
  {
    path:'customer/:customerId', component:CustomerComponent,
    children: [
      {path:'profile',component:ProfileComponent},
      {path:'update',component:UpdateComponent},
      {path:'book',component:BookingComponent},
      {path:'history',component:HistoryComponent},
      {path:'trip',component:TripComponent},
      {path:'driverAccepted',component:CustomerPendingComponent},
      {path:'canceleldTrips',component:CustomerCancelledTripsComponent},
    ]
  },
  {
    path:'driver/:driverId', component:DriverComponent,
    children:[
      {path:'profile',component:DriverProfileComponent},
      {path:'update',component:DriverUpdateComponent},
      {path:'',component:DriverRidesComponent},
      {path:'newRide',component:DriverAcceptOrDeclineRideComponent},
      {path:'cancelledRides',component:DriverCancelledTripsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
