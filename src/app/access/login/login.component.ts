import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciales = {
   identifier: '',
   password: ''
  };

  constructor(private http: HttpClient, private as: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.as.acceder(this.credenciales).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('token', JSON.stringify(data));
      }
    );
  }
}
