import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
    }

    public errorText: string;
    public errorMessage: any[]  = [];
    public successMessage: string;

    public registerInfo = {
        Name: "",
        password: "",
        location: ""
    }

    onRegister() {
        this.auth.Register(this.registerInfo).subscribe(success =>
        {
            if (success.status == 200)
            {

                console.log(success);

                this.successMessage = "Registration successful!"


            }
        }, err => {

            console.log(err);

            if (typeof err.error === 'string')
            {
                this.errorText = err.error;
            }

            else
            {
                this.errorMessage = err.error;
            }

        })
        this.registerInfo.Name = ''
        this.registerInfo.password = ''
        this.registerInfo.location = ''
        this.errorMessage = [];
        this.errorText = '';
        this.successMessage = '';
    }

}
