import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  public errorMessage: string;
  public successMessage: string;

  public registerInfo = {
      Name: "",
      password: "",
      location:""
  }

  onRegister() {
      this.auth.Register(this.registerInfo).subscribe(success => {
          if (success.status==200) {
          this.successMessage = "Registration successful!"
          
         
          }
      }, err =>
      {
          this.errorMessage = "Failed to Register";
          
          })
      this.registerInfo.Name = ''
      this.registerInfo.password = ''
      this.registerInfo.location = ''
      this.errorMessage = '';
      this.successMessage = '';
  }

}
