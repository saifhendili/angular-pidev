import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from '../models/meeting';
import { MeetingService } from '../service/meeting.service';

@Component({
  selector: 'app-add-meeting-form',
  templateUrl: './add-meeting-form.component.html',
  styleUrls: ['./add-meeting-form.component.css']
})
export class AddMeetingFormComponent implements OnInit {

  constructor(private router : Router,private meetingService : MeetingService) { }

  ngOnInit(): void {
  }
  meeting : Meeting = new Meeting();

  dateMeeting = new Date();
  timeMeeting = new Date();
  SendDataonChange(event: any) {
    this.meeting.date=event.target.value
    console.log(this.meeting);

    }

    changeTime(event: any) {
      this.meeting.user=JSON.parse(localStorage.getItem('user'));
    this.meeting.hour=parseInt(event.target.value.substring(0, 2))
    console.log(this.meeting);
    }

    saveMeeting(){
      this.meetingService.addMeeting(this.meeting).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/available-partners',res.id])
        },
        err =>{
          console.log(err)
        }
      )
    }
}
