import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../models/meeting';
import { Partner } from '../models/partner';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(public http: HttpClient) {}

  private baseUrl = 'http://localhost:8083/women/Meeting';

  addMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(
      this.baseUrl + '/add-meeting',
      meeting
    );
  }
  affectMeetingToPartner(meeting: Meeting): Observable<Meeting> {
    return this.http.put<Meeting>(
      this.baseUrl + '/affectmeetingtopartner/'+meeting.partner.id+"/"+meeting.id,
      meeting
    );
  }
  
  getMeetingById(id:Number): Observable<Meeting>{
    return this.http.get<Meeting>(this.baseUrl+'/retrieve-meeting/'+id)
  }
  
  getAllMeetings(): Observable<Meeting[]>{
    return this.http.get<Meeting[]>(this.baseUrl+'/retrieve-all-meetings/')
  }

  getdisponiblepartnersbydate(date:String):Observable<Partner[]>{
    return this.http.get<Partner[]>(this.baseUrl+'/getdisponiblepartnersbydate/'+date)
  }
}
