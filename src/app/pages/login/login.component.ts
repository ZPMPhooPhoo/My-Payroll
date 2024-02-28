import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 loginFormValue:any={};
  user_data:any;

  constructor(private router: Router) {}
ngOnInit(): void {
}
  onLogin() {
    if (this.loginFormValue.email=="admin@gmail.com" && this.loginFormValue.password=="123456"){
      this.router.navigateByUrl("dashboard");
    }else(
      alert("Invalid User")
    )
  }
}
