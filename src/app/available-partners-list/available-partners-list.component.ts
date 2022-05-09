import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from '../models/meeting';
import { Partner } from '../models/partner';
import { MeetingService } from '../service/meeting.service';

@Component({
  selector: 'app-available-partners-list',
  templateUrl: './available-partners-list.component.html',
  styleUrls: ['./available-partners-list.component.css']
})
export class AvailablePartnersListComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private router:Router,private meetingService:MeetingService) { }

  parameter=0;
  meeting : Meeting= new Meeting();
  partners : Partner[];
  ngOnInit(): void {
    this.ac.params.subscribe(params => {       
      this.parameter = params['idMeeting'];}) ;
      this.getMeeting(this.parameter);
  }

  getMeeting(id:any){
    this.meetingService.getMeetingById(id).subscribe(
      res=>{
        console.log(res)
        this.meeting=res
        this.getDisponiblePartners();
      },err=>{
        console.log(err)
      }
    )
  }

  getDisponiblePartners(){
    this.meetingService.getdisponiblepartnersbydate(this.meeting.date).subscribe(
      res=>{
        console.log(res)
        this.partners = res
      },err=>{
        console.log(err)
      }
    )
  }

  updateMeeting(p:Partner){
    this.meeting.partner=p ;
    this.meetingService.affectMeetingToPartner(this.meeting).subscribe(
      res =>{
        console.log(res)
        alert("You Selected Our " + p.type+" "+p.name+" Please wait for his confirmation")
        this.router.navigate(['/meetings'])
      },err=>{
        console.log(err)
      }
    )
  }

}
