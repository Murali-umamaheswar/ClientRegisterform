import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { MobileList } from '../mobile-list';
import { RegisterUserComponent } from '../register-user/register-user.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageUrl = "";
  userDisplayName: any;
  
  public getmobs:MobileList[]=[];
  
  constructor(private authService:AuthServiceService) { }
  list =new MobileList("","","","",[],"","");
  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem('loggedUser');

    this.authService.getmobiles().subscribe((data:MobileList[]) => {
    
      data.forEach(val =>{
        var mobile:MobileList = new MobileList("","","","",[],"","");
        mobile.model_id = val.model_id;
        mobile.name_of_the_device=val.name_of_the_device;
        mobile.year_of_the_release=val.year_of_the_release;
        mobile.price_of_the_device=val.price_of_the_device;
        mobile.memory_rom=val.memory_rom;
        mobile.manufacturer=val.manufacturer;
        mobile.image_of_the_device = val.image_of_the_device;
        this.getmobs.push(mobile);
      });

    });
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
