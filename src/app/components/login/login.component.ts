import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router)
  loginobj:any = {
    email:"",
    password:""  
  }
  OnLogin(){
    if (this.loginobj.email == "admin" && this.loginobj.password == "112233") {
      this.router.navigateByUrl('/client');
      localStorage.setItem("EmpEmail",this.loginobj.email)
      alert("Login Successfull")
    }
    else{
      alert("Login Failed")
    }
    console.log(this.loginobj)
  }
}
