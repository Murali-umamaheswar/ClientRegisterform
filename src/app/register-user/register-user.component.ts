import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../custom.validator';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  message ="";
  code ="";
  constructor(private router:Router,private http:HttpClient, private authService:AuthServiceService){}

  ngOnInit(): void {
      
  }

  
  
    loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      username:new FormControl(null,[Validators.required]),
      password: new FormControl(null, [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    })
  

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )

  loginProcess(data:any){
    
    if(this.loginForm.valid){
      this.authService.userlogin(this.loginForm.value).subscribe(result=>{ 
        if(result.success || result.Message == "Login Succesfull"){ 
          
          this.message=result.Message
          alert(result.Message)
          localStorage.setItem('loggedUser', data.username);
          this.router.navigate(['home'])
        }else{
          this.message=result.Message
          this.router.navigate([''])
          alert(result.Message)
        }
        
      })
      
    }
  }
  


  Onsubmit(data:any){
   // this.http.post("http://localhost:8080/verifyUser",data).subscribe((result)=>{console.log("result",result)})
   console.log(data)
    //alert("Registration completed successfully")
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe(result=>{
        
        if(result.success || result.Message == "User Succesfully Register" ){
          console.log(result.Message)
          alert(result.Message)
          this.router.navigate(['verification'])
          this.authService.verifyUser(this.registerForm.value).subscribe(result=>{
            this.code =(result.Message).toString()
            alert("code as send your mail")
            localStorage.setItem('emailcode', this.code);
          })
          
        }else{
          alert(result.Message)
        }
      }) 
    }
  }   
}



