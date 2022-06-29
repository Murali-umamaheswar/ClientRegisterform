import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MobileList } from './mobile-list';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  get_url="http://localhost:8080/getdevice"

  constructor(private http:HttpClient) { }
  register(data:any):Observable<any>{
    console.log("i am server")
    return this.http.post('http://localhost:8080/verifyUser',data)
  }
  
  userlogin(data:any):Observable<any>{
    console.log("i am login server")
    return this.http.post('http://localhost:8080/signIn',data)
  }
  verifyUser(data:any):Observable<any>{
    console.log("i am verify server")
    return this.http.post('http://localhost:8080/sendcode',data)
  }
 
  getmobiles():Observable<MobileList[]>{

    return this.http.get<MobileList[]>(this.get_url);

  }




}
