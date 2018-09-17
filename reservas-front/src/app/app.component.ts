import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservas-front';
  token: String;

  constructor(){
    this.token = JSON.parse(localStorage.getItem("my-auth-token"));
  }
  
  loggedIn() {
    if (this.token !== null)
      return true;
    else
      return false;
  }

  @HostListener('window:hashchange', ['$event']) reloadToken() {
    this.token = localStorage.getItem("my-auth-token");
  }

  logoutUser() {
    this.token = null;
    localStorage.removeItem("my-auth-token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("company");
    window.location.href = '#/login';
  }
}
