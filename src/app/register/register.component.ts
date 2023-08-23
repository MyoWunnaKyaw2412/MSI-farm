import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 username = new FormControl('');
 password = new FormControl ('');
  gender = new FormControl('')
 login(){
  console.log( this.username.value),
  console.log (this.password.value),
  console.log(this.gender.value)
 }

 Gender:any = ["Male","Female","Rather"]
}
