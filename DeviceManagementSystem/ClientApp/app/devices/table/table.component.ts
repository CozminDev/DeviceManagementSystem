import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router'



@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    constructor(private data: DataService, private router: Router) { }

    public devices: any[] = [];


    ngOnInit() {
        this.getDevices();
    }

    getDevices() {
        return this.data.getDevices().subscribe(success => {
            this.devices = success;
            console.log(success)
        });
    }

    removeItem(id) {
        return this.data.removeDevice(id).subscribe(success => {
            console.log(success)
            this.getDevices();
        });
    }

    assignItem(id) {
        return this.data.assignDevice(id).subscribe(success => {
            console.log(success)
            this.getDevices();
        });
    }

    unassignItem(id) {
        return this.data.unassignDevice(id).subscribe(success => {
            console.log(success)
            this.getDevices();
        });
    }

    checkUser(user): boolean {
        if (user == localStorage.getItem('user')) return true
        else return false;
    }

    isAdmin() {

        if (localStorage.getItem('user') == 'admin') {
            return true;
        }
        else return false;
    }


}


