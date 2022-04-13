import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="Your Perfect Banking Partner"
accNum="Account Number Please!!!"


 // creating a login form model
 loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // acnoChange(event:any){
  //   console.log(event);
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
  // }

  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);
    
  // }


  //login - using event bindingn / two way binding

  login(){

   // alert("Login Clicked !!!")

   //user entered acno n pswd
    var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd
    if(this.loginForm.valid){
      const result=this.ds.login(acno,pswd)
    if(result){
      alert("Login Successful !!!")
      this.router.navigateByUrl("dashboard")
    }
    }

  }

}
