import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';

@Injectable()

export class DataService {

    constructor(private http: HttpClient) {

    }

    getDevices(): Observable<any> {

        return this.http.get("api/devices")
    }

    removeDevice(id) {
        return this.http.delete("api/devices/" + id,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    assignDevice(id) {
        return this.http.patch("api/devices/assign/" + id, { Name: localStorage.getItem('user') },
            {
                observe: 'response',
                responseType: 'text'
            });
    }
    unassignDevice(id) {
        return this.http.patch("api/devices/unassign/" + id,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    addDevice(addInfo) {

        return this.http.post("api/devices", addInfo,
            {
                observe: 'response',
                responseType: 'text'
            });
    }
}
