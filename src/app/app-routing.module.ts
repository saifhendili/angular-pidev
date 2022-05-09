import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingFormComponent } from './add-meeting-form/add-meeting-form.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AvailablePartnersListComponent } from './available-partners-list/available-partners-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'users', component: ClientComponent },
  { path: 'meetings', component: CalendarComponent },
  { path: 'add-meeting', component: AddMeetingFormComponent },
  { path: 'available-partners/:idMeeting', component: AvailablePartnersListComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
