import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

  database:any={
    1000:{acno:1000,uname:"Niya",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Niva",password:1001,balance:3000,transaction:[]},
    1002:{acno:1002,uname:"Miya",password:1002,balance:4000,transaction:[]}
  }
  
  constructor() {
    this.getDetails()
   }
  
  //to save data in local storage
  saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

  //to get data from local storage
  getDetails(){
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }
  }

  //register
  register(uname:any,acno:any,password:any): boolean{
    let database=this.database

    if(acno in database){
      //already exist acno
      return false
    }
    else{
      //add details into db
      database[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]
      }
      console.log(database);
      this.saveDetails()
      return true
      
    }
  }
  

//login
  login(acno:any,pswd:any){
    //user entered acno n pswd
    let database=this.database
    if(acno in database){
      if(pswd==database[acno]["password"]){
        
        this.currentUser=database[acno]["uname"]
        this.currentAcno=acno
        this.saveDetails()
        // already exist
        return true
      }
      else{
        alert("Incorrect Password !!!!!")
        return false
      }
    }
    else{
      alert("User dosenot exist !!!!!")
      return false
    }   
  }


  deposit(acno:any,pswd:any,amnt:any){

    var amount=parseInt(amnt)
    let database=this.database

    if(acno in database){
      if(pswd==database[acno]["password"]){
        database[acno]["balance"]+=amount
        database[acno]["transaction"].push({
          type:"CREDIT",
          amount:amount
        })
        this.saveDetails()
        return database[acno]["balance"]
      }
      else{
        alert("Incorrect password!!!")
        return false
      }
    }
    else{
      alert("User dosenot exist!!!")
      return false
    }
  }


  withdraw(acno:any,pswd:any,amnt:any){

    var amount=parseInt(amnt)
    let database=this.database

    if(acno in database){
      if(pswd==database[acno]["password"]){
        if(database[acno]["balance"]>amount){
          database[acno]["balance"]-=amount
          database[acno]["transaction"].push({
            type:"DEBIT",
            amount:amount
          })
          this.saveDetails()
          return database[acno]["balance"]
        }
        else{
          alert("Insufficient balance!!!")
          return false
        }
      }
      else{
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User dosenot exist!!!")
      return false
    }
  }

  //transaction
  transaction(acno:any){
    return this.database[acno].transaction
  }

}
