import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // creating a register form model
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private ds:DataService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){

    //alert("Register clicked !!!")
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    var uname=this.registerForm.value.uname
    if(this.registerForm.valid){
      // asynchronous
      this.ds.register(uname,acno,pswd)
      .subscribe((result:any)=>{
        if(result){
          alert("Successfully Registered !!!")
          this.router.navigateByUrl("")
        }
      },
      (result)=>{
        alert(result.error.message)
      })

    }
    else{
      alert("Invalid Form!!!!!!")
    }
  }
}
