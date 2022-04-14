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
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { DriverComponent } from './driver/driver.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AllAdminsSearchComponent } from './admin/all-admins-search/all-admins-search.component';
// import { AllAdminUpdateComponent } from './admin/all-admins-update/all-admin-update.component';
import { AllCustomerUpdateComponent } from './admin/all-customer-update/all-customer-update.component';
import { AllCustomersSearchComponent } from './admin/all-customers-search/all-customers-search.component';
import { AllDriversSearchComponent } from './admin/all-drivers-search/all-drivers-search.component';
import { AllDriversUpdateComponent } from './admin/all-drivers-update/all-drivers-update.component';
import { BookingComponent } from './customer/booking/booking.component';
import { ConfirmBookingComponent } from './customer/confirm-booking/confirm-booking.component';
import { CustomerCancelledTripsComponent } from './customer/customer-cancelled-trips/customer-cancelled-trips.component';
import { CustomerNotificationComponent } from './customer/customer-notification/customer-notification.component';
import { CustomerPendingComponent } from './customer/customer-pending/customer-pending.component';
import { HistoryComponent } from './customer/history/history.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { TripComponent } from './customer/trip/trip.component';
import { UpdateComponent } from './customer/update/update.component';
import { WalletComponent } from './customer/wallet/wallet.component';
import { DriverAcceptOrDeclineRideComponent } from './driver/driver-accept-or-decline-ride/driver-accept-or-decline-ride.component';
import { DriverCancelledTripsComponent } from './driver/driver-cancelled-trips/driver-cancelled-trips.component';
import { DriverCancelledTripsNotifierComponent } from './driver/driver-cancelled-trips-notifier/driver-cancelled-trips-notifier.component';
import { DriverNotifierComponent } from './driver/driver-notifier/driver-notifier.component';
import { DriverProfileComponent } from './driver/driver-profile/driver-profile.component';
import { DriverRidesComponent } from './driver/driver-rides/driver-rides.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { AllAdminsUpdateComponent } from './admin/all-admins-update/all-admins-update.component';
import {HttpClientModule} from '@angular/common/http';

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
    DriverSignUpComponent,
    AdminComponent,
    CustomerComponent,
    DriverComponent,
    AdminProfileComponent,
    AdminUpdateComponent,
    AllAdminsSearchComponent,
    // AllAdminUpdateComponent,
    AllCustomerUpdateComponent,
    AllCustomersSearchComponent,
    AllDriversSearchComponent,
    AllDriversUpdateComponent,
    BookingComponent,
    ConfirmBookingComponent,
    CustomerCancelledTripsComponent,
    CustomerNotificationComponent,
    CustomerPendingComponent,
    HistoryComponent,
    ProfileComponent,
    TripComponent,
    UpdateComponent,
    WalletComponent,
    DriverAcceptOrDeclineRideComponent,
    DriverCancelledTripsComponent,
    DriverCancelledTripsNotifierComponent,
    DriverNotifierComponent,
    DriverProfileComponent,
    DriverRidesComponent,
    DriverUpdateComponent,
    AllAdminsUpdateComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
