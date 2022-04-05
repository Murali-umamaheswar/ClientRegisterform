import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  
  ngOnInit(): void {
    
  }

  OnRegister(){
    alert("Register Successfully")
  }

  OnLogin(){
    alert("Login Successfully")
  }
 

  
}
