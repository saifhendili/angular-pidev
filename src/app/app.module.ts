import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';

import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ClientComponent } from './client/client.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddMeetingFormComponent } from './add-meeting-form/add-meeting-form.component';
import { AvailablePartnersListComponent } from './available-partners-list/available-partners-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ReclamationComponent,
    ProfileComponent,
    AdminComponent,
    ClientComponent,
    CalendarComponent,
    AddMeetingFormComponent,
    AvailablePartnersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : HttpInterceptorService ,multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
