import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
//AuthGuard
import { AuthGuard } from './Guard/auth.guard';
import { DataService } from './service/data.service';
import { AuthService } from './service/auth.service';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DevicesComponent } from './devices/devices.component';
import { TableComponent } from './devices/table/table.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';

let routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'devices',
        component: DevicesComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'adddevice',
        component: AdddeviceComponent,
        canActivate: [AuthGuard]

    }
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DevicesComponent,
    TableComponent,
    AdddeviceComponent,
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes,
          {
              onSameUrlNavigation: 'reload',
              useHash:true,
              enableTracing: true
          }
      )
  ],
  providers: [AuthGuard, DataService, AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
