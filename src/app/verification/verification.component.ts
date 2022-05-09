
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  
  verifycodeValue: any;

  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    
  }

  verifyForm=new FormGroup({
    code:new FormControl(null,[Validators.required]),
    
  })
  
  
  Onverify(data:any){
    
    if(this.verifyForm.valid){
      this.verifycodeValue = localStorage.getItem('emailcode');
      if(data.code == this.verifycodeValue){
        this.router.navigate(['register-user'])
        alert("Verfication done successfully")
      }else{
        this.router.navigate(['verification'])
        alert("Enter value is Invalid")
        
      }
    }
    
 }
}
