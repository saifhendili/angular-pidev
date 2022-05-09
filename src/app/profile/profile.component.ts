import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from '../models/Reclamation';
import { User } from '../models/user';
import { ReclamationService } from '../service/reclamation.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myForm :FormGroup;
  listRec:any;
  form:boolean=false;
  FormType="Add Publication";
  rec!:Reclamation;
  closeResult:string;
  user:any
  constructor(private ReclamationServ:ReclamationService,private modalService:NgbModal,private router:Router) { }



  ngOnInit(): void {
   

  this.user= JSON.parse(localStorage.getItem('user'));
    console.log("parsed user from local storage : ")
    this.myForm=new FormGroup({
      title:new FormControl("",Validators.required),
      text  : new FormControl("",Validators.required),
      // decision: new FormControl(),
      // typepublication: new FormControl(),

    }) 
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
