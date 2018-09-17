import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: String;
  constructor() { 
    this.token = JSON.parse(localStorage.getItem("my-auth-token"));
  }

  ngOnInit() {
    if(this.token == undefined)
      window.location.href = '#/login';
  }

}
