import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private adminviewRoute:Router){}
  email?:string;
  password?:string;
  login(){
    if (this.email == 'myowunna7777',this.password="333333333"){
      this.adminviewRoute.navigate(["/adminview"])
    }else{
      alert("Something Wrong")
    }
  }
}
