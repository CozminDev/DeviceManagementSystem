import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    navigationSubscription;
    constructor(private auth: AuthService, private router: Router) { }


    ngOnInit() {


    }
    public errorMessage: string;

    public loginInfo = {
        Name: "",
        password: ""
    }

    onLogin() {
        this.auth.login(this.loginInfo).subscribe(success =>
        {
            if (success.status == 200)
            {
                this.auth.setLoginStatus(true);

                localStorage.setItem('user', success.body);

                return this.router.navigate(["devices"])
            }
        }, err => {

            this.errorMessage = "Invalid Account"
        })
    }



}

