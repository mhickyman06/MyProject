import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username:any;
  Password:any;
  returnUrl:string;
  ErrorMessage:string ="Login failed please check your inputs and try again";
  isError:boolean;

  constructor(private service:AuthenticationService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  Onsubmit(){
    const Data = {
      'UserName': this.Username,
      "Password":this.Password
    }
    console.log(Data);
    this.service.Login(Data).pipe(first())
    .subscribe((data) =>{
      console.log(data);
      //set the token in the locak storage
      localStorage.setItem("Token",data.token);
      //navigate the user to the former url
      // this.router.navigateByUrl(this.returnUrl);
      this.router.navigate(['./LoginSucessful'])
    },(error)=>{
      this.isError=true;
      console.error("error caught in component");

    });
  }
}
