import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor(private auth: AuthService) { }

    public users: any[] = [];

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers() {

        return this.auth.getUsers().subscribe(success => {
            console.log(success);
            this.users = success.body;
        })
    }

    deleteUser(username) {

        return this.auth.deleteUser(username).subscribe(success => {
            console.log(success)
            this.getAllUsers();
        });
    }
}
