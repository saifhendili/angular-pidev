import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  user:any

  ngOnInit(): void {

      this.user= JSON.parse(localStorage.getItem('user'));
    
  }

}
