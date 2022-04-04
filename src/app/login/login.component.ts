import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="Your Perfect Banking Partner"
accNum="Account Number Please!!!"
acno=""
pswd=""
  // Database

  database:any={
    1000:{acno:1000,uname:"Neer",password:1000,balance:5000},
    1001:{acno:1001,uname:"Laisha",password:1001,balance:3000},
    1002:{acno:1002,uname:"Vyom",password:1002,balance:4000}
  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    //console.log(event);
    this.acno=event.target.value
    console.log(this.acno);
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }

  //login - using event bindingn / two way binding
  login(){
   // alert("Login Clicked !!!")

   //user entered acno n pswd
    var acno=this.acno
    var pswd=this.pswd
    
    let database=this.database
    
      if(acno in database){

          if(pswd==database[acno]["password"]){
              alert("Login Successful !!!!!")
          }

          else{
            alert("Incorrect Password !!!!!")
          }

      }

      else{
        alert("User dosenot exist !!!!!")
      }
      
  }


  // login(a:any,p:any){
  //   // alert("Login Clicked !!!")
    
  //   //user entered acno n pswd
  //    var acno=a.value
  //    var pswd=p.value
     
  //    let database=this.database
     
  //      if(acno in database){
 
  //          if(pswd==database[acno]["password"]){
  //              alert("Login Successful !!!!!")
  //          }
 
  //          else{
  //            alert("Incorrect Password !!!!!")
  //          }
 
  //      }
       
  //      else{
  //        alert("User dosenot exist !!!!!")
  //      }
       
  //  }

  
}
