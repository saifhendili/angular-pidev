import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent, CalendarEventTitleFormatter, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { Meeting } from '../models/meeting';
import { MeetingService } from '../service/meeting.service';
import { ReclamationService } from '../service/reclamation.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Reclamation } from '../models/Reclamation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
    },
  ],
})
export class CalendarComponent implements OnInit {

  constructor(private meetingService: MeetingService,private ReclamationServ:ReclamationService,private modalService:NgbModal,private router:Router) { }
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  meeting: Meeting[];
  events: CalendarEvent[] = []
  myForm :FormGroup;
  listRec:any;
  form:boolean=false;
  FormType="Add Publication";
  rec!:Reclamation;
  closeResult:string;
  user:any
  /*events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]*/
  ngOnInit(): void {

    this.user= JSON.parse(localStorage.getItem('user'));
    console.log("parsed user from local storage : ")
    this.myForm=new FormGroup({
      title:new FormControl("",Validators.required),
      text  : new FormControl("",Validators.required),
    })

    this.getMeetingsAndSetEvents();
    
  }
  getMeetingsAndSetEvents() {
    this.meetingService.getAllMeetings().subscribe(
      res => {
        console.log(res)
        this.meeting = res
        this.setEventsForCalendar()
      }, err => {
        console.log(err)
      }
    )
  }
  setEventsForCalendar() {
    for (let m of this.meeting) {
      this.events = [
        ...this.events,
        {
          start: startOfDay(new Date(m.date)),
          title: m.message,
        }
      ]
    }
    console.log(this.events)
  }

  setView(view: CalendarView) {
    this.view = view;
  }


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //this.openAppointmentList(date)
  }
add(){

this.ReclamationServ.createReclamation(this.myForm.value).subscribe((res)=> {
  // this.getAllPublications();
  this.form = false;
  // alert(res)
  Swal.fire(res.message)
  
  // window.location.reload();
}
);

}
open(content: any) {
this.modalService.open(content, {ariaDescribedBy: 'modal-basic-title'}).result.then((result) => {
 this.closeResult = 'Closed with: ${result}';
 

},(reason) => {
  this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
});
this.form=true
}
private getDismissReason(reason: any): string {
if(reason === ModalDismissReasons.ESC){
  return 'by pressing ESC';
} else if (reason === ModalDismissReasons.BACKDROP_CLICK){
  return 'by clicking on a backdrop';
} else{
  return 'with: ${reason}';
}
}

closeForm(){

}
cancel(){
this.form = false;
}
}
