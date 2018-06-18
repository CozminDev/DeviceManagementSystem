import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './Guard/auth.guard';
import { DataService } from './service/data.service';
import { AuthService } from './service/auth.service';
import { LoginGuard } from './Guard/login.guard';
import { AdminGuard } from './Guard/admin.guard';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DevicesComponent } from './devices/devices.component';
import { TableComponent } from './devices/table/table.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { UsersComponent } from './users/users.component';

let routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [LoginGuard]
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
        canActivate: [AdminGuard]

    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AdminGuard]

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
    UsersComponent,
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
  providers: [AuthGuard, DataService, AuthService, { provide: APP_BASE_HREF, useValue: '/' },LoginGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
