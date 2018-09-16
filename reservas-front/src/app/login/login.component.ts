import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';

import bcrypt  from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  options:RequestOptions;
  mail: String;
  password: String;
  error: Boolean = false;
  mostrarModal: Boolean = false;
  registro: any = {
    mail: "",
    name: "",
    password: "",
    confirmar: ""
  }

  constructor(private http: Http ) {
    localStorage.removeItem('usuario');
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append("Cache-Control", "no-cache");
    headers.append("Cache-Control", "no-store");
    this.options = new RequestOptions({ headers: headers });
  }

  ngOnInit() {
    localStorage.removeItem('my-auth-token');
  }

  registrarse() {
    this.callRegistro().subscribe(response => {
      alert("Registro Valido.");
      this.mostrarModal = false;
      window.location.href = '';
    });
  }

  validarRegistro() {
    return this.registro.confirmar === this.registro.password &&
      this.registro.name && this.registro.mail; 
  }

  callRegistro() {
    this.registro.password = bcrypt.hashSync(this.registro.password, 8);
    return this.http.post('/api/users', this.registro, this.options);//.map(response => <String[]>response.json());
  }

  ingresar() {
    this.ingresarService().subscribe(response => {
      var user = (<any>response);
      if(user.auth) {
        this.error = false;
        console.log((<any>response));
        localStorage.setItem('usuario', JSON.stringify(user.user_id));
        localStorage.setItem('my-auth-token', JSON.stringify(user.token));
        localStorage.setItem('company', JSON.stringify(user.empresa));
        window.location.href = '#/contest/' + user.empresa; // window.location.href = '#/{nombre empresa}/contest';
      } 
      else 
      {
        alert('El usuario no esta autorizado');
      }
    }, error => {
      if(error.status === 401)
        alert("El usuario no esta autorizado");
      else
        alert(error);

    });
  }

  ingresarService() {
    let body = {
      mail: this.mail,
      password: this.password
    };
    return this.http.post('/api/login', body, this.options);//.map(response => <String[]> response.json());
  }

}
