import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Reclamation } from '../models/Reclamation';
import { ReclamationService } from '../service/reclamation.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  listRec:any;
  
  user:any
  constructor(private ReclamationServ:ReclamationService,private modalService:NgbModal,private router:Router) { }

  ngOnInit(): void {
    this.user= JSON.parse(localStorage.getItem('user'));
    this.getAllReclamation();
   
  }

  getAllReclamation(){
    this.ReclamationServ.getReclamation().subscribe(res=>this.listRec=res)
  }
  deleteReclamation(id:any,index:number){
    this.ReclamationServ.deletePost(id).subscribe(()=>this.getAllReclamation())
    // window.location.reload();

  //  this.listRec.splice(index,1);
  //   this.getAllReclamation();
    }



}
