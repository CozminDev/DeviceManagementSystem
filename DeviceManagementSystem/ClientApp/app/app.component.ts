import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { AuthService } from './service/auth.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private router: Router, private auth: AuthService) { }

    reloadPage() {
        window.location.reload();
    }

    goToDevices() {
        return this.router.navigate(['devices'])
    }
    goToRegister()
    {
        return this.router.navigate(['register'])
    }
    goToLogin() {
        return this.router.navigate([''])
    }
    goToAddDevice() {
        return this.router.navigate(['adddevice'])
    }
    goToUsers() {
        return this.router.navigate(['users'])
    }

    isLoggedIn() {
        return this.auth.isLoggedIn
    }

    isAdmin() {

        if (localStorage.getItem('user') == 'admin')
        {
            return true;
        }
        else return false;
    }

    Logout() {
        
        return this.auth.Logout().subscribe(success =>
        {
            console.log(success)
            localStorage.clear();
            this.reloadPage();
        });
       
    }
}
