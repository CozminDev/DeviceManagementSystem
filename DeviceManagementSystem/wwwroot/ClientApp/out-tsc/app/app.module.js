"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./Material/material.module");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
//AuthGuard
var auth_guard_1 = require("./Guard/auth.guard");
var data_service_1 = require("./service/data.service");
var auth_service_1 = require("./service/auth.service");
var app_component_1 = require("./app.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var devices_component_1 = require("./devices/devices.component");
var table_component_1 = require("./devices/table/table.component");
var adddevice_component_1 = require("./adddevice/adddevice.component");
var routes = [
    {
        path: '',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
    },
    {
        path: 'devices',
        component: devices_component_1.DevicesComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'adddevice',
        component: adddevice_component_1.AdddeviceComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                devices_component_1.DevicesComponent,
                table_component_1.TableComponent,
                adddevice_component_1.AdddeviceComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes, {
                    onSameUrlNavigation: 'reload',
                    useHash: true,
                    enableTracing: true
                })
            ],
            providers: [auth_guard_1.AuthGuard, data_service_1.DataService, auth_service_1.AuthService, { provide: common_1.APP_BASE_HREF, useValue: '/' }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map