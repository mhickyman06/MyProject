import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  FirstName:any;
  LastName:any;
  UserName:any;
  _email:any;
  _password:any;
  IsError:boolean;
  Response:any;
  Response_status:number;

  constructor(private service:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }



  Onsubmit(){
    const Data ={
      "FirstName":this.FirstName,
      "LastName":this.LastName,
      "UserName":this.UserName,
      "Email":this._email,
      "Password":this._password
    }
    console.log(Data);
    this.service.Register(Data).pipe(first())
    .subscribe((data:any) =>{
      console.log(data);
      alert("Account successfully created");
      this.router.navigate(["./Authentication/Login"]);
      this.Response_status=data.status;
    },
    (error )=>{
      console.log(error.status);
      console.error("error occured in this component");
      console.log(error.error.error);
      console.log(JSON.parse(error.error).error);
      this.Response_status=error.status;
      this.IsError=true;
      this.Response=error.message;
    });
  }
}
