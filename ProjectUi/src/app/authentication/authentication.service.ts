import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private client:HttpClient) { }

  Register(Data:any):any{
    let Url= "http://localhost:38601/api/register";
      return this.client.post(Url,Data);
  }
  Login(Data:any):any{
    let Url= "http://localhost:38601/api/login";
    return this.client.post(Url,Data);
  }
}
