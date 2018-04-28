import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  loginUser(user) {
    return  this.http.post('http://localhost:3000/auth/Login', user);
  }

}
