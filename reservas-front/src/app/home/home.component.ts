import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options:RequestOptions;
  token: String;
  imgList:any;

  constructor(private http: Http ) { 
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append("Cache-Control", "no-cache");
    headers.append("Cache-Control", "no-store");
    this.options = new RequestOptions({ headers: headers });
    this.token = JSON.parse(localStorage.getItem("my-auth-token"));
  }

  ngOnInit() {
    if(this.token == undefined)
      window.location.href = '#/login';
      this.loadPlaces();
  }

  loadPlaces(){
    this.getPlaces().subscribe(response => {
      alert(response);
      console.log("response", response);
      // let test = response.forEach(x => {
      //   return __dirname + x;
      // });
      // console.log(test);
      this.imgList = response;

    });
  }

  getPlaces() {
    return this.http.get('/api/placeImages/', this.options).pipe(map(response => <String[]> response.json()));
  }
}
