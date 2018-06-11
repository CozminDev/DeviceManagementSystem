import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent implements OnInit {

  constructor(private data:DataService,private router:Router) { }

  ngOnInit() {
  }

  public addInfo = {
      Name: "",
      Manufacturer: "",
      Type: "",
      OS: "",
      OSVersion: "",
      Processor: "",
      RAM:""
  }

  AddDevice() {
      this.data.addDevice(this.addInfo).subscribe(success =>
      {
          console.log(success)
          this.router.navigate(['devices'])
      },err=>console.log(err))
  }

}
