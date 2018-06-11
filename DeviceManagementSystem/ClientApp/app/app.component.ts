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
    goToAddDevice() {
        return this.router.navigate(['adddevice'])
    }

    isLoggedIn() {
        return this.auth.isLoggedIn
    }
    Logout() {
        localStorage.clear();
        return this.reloadPage();
    }
}
