import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  submitBtn() {
    const logindata = { email: this.email, password: this.password };
    console.log(logindata);
    this.apiService.loginUser(logindata).subscribe(res => {
      console.log(res.json());
      if (res.json().message === 'OK') {
localStorage.setItem('tokenuser', res.json().token);
      }
    });
  }
}
