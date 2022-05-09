import { Component, OnInit } from '@angular/core';
import { RegisterUserComponent } from '../register-user/register-user.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageUrl = "";
  userDisplayName: any;
  
  
  constructor() { }
  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem('loggedUser');
  }

  getImageUrl (event:any){
    this.imageUrl =event.srcElement.src
    console.log(this.imageUrl)
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
