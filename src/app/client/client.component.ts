import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  user:any;

  constructor(private clientServ:ClientService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.clientServ.getusers().subscribe(res=>this.user=res)

  }

  deleteUser(idp:any){
    this.clientServ.deleteUser(idp).subscribe(() => this.getAllUsers())
  }
}
