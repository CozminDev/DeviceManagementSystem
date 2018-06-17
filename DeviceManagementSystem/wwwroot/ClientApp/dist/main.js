(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/Guard/auth.guard.ts":
/*!*******************************************!*\
  !*** ./ClientApp/app/Guard/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./ClientApp/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn)
            return true;
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./ClientApp/app/Material/material.module.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/Material/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./ClientApp/app/adddevice/adddevice.component.css":
/*!*********************************************************!*\
  !*** ./ClientApp/app/adddevice/adddevice.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.center {\r\n    width: 75%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.main-div {\r\n    height: 70vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.example-card {\r\n    max-width: 400px;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/adddevice/adddevice.component.html":
/*!**********************************************************!*\
  !*** ./ClientApp/app/adddevice/adddevice.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\r\n    <mat-card class=\"example-card center\">\r\n        <mat-card-header>\r\n            <mat-card-title><h3>Add Device</h3></mat-card-title>\r\n        </mat-card-header>\r\n        <br />\r\n        <mat-card-content>\r\n            <form>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Name\" [(ngModel)]=\"addInfo.Name\" name=\"Name\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Manufacturer\" [(ngModel)]=\"addInfo.manufacturer\" name=\"manufacturer\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Type\" [(ngModel)]=\"addInfo.type\" name=\"type\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"OS\" [(ngModel)]=\"addInfo.OS\" name=\"OS\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"OSVersion\" [(ngModel)]=\"addInfo.OSVersion\" name=\"OSVersion\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Processor\" [(ngModel)]=\"addInfo.Processor\" name=\"Processor\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"RAM\" [(ngModel)]=\"addInfo.ram\" name=\"ram\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </form>\r\n            <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-raised-button (click)=\"AddDevice()\" color=\"primary\" style=\"margin-left:40%\">Submit</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/adddevice/adddevice.component.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/adddevice/adddevice.component.ts ***!
  \********************************************************/
/*! exports provided: AdddeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddeviceComponent", function() { return AdddeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data.service */ "./ClientApp/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdddeviceComponent = /** @class */ (function () {
    function AdddeviceComponent(data, router) {
        this.data = data;
        this.router = router;
        this.addInfo = {
            Name: "",
            Manufacturer: "",
            Type: "",
            OS: "",
            OSVersion: "",
            Processor: "",
            RAM: ""
        };
    }
    AdddeviceComponent.prototype.ngOnInit = function () {
    };
    AdddeviceComponent.prototype.AddDevice = function () {
        var _this = this;
        this.data.addDevice(this.addInfo).subscribe(function (success) {
            console.log(success);
            _this.router.navigate(['devices']);
        }, function (err) { return console.log(err); });
    };
    AdddeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adddevice',
            template: __webpack_require__(/*! ./adddevice.component.html */ "./ClientApp/app/adddevice/adddevice.component.html"),
            styles: [__webpack_require__(/*! ./adddevice.component.css */ "./ClientApp/app/adddevice/adddevice.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdddeviceComponent);
    return AdddeviceComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.css":
/*!*****************************************!*\
  !*** ./ClientApp/app/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n.example-icon{\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <mat-icon class=\"example-icon\" (click)=\"goToLogin()\" *ngIf=\"!isLoggedIn()\">important_devices</mat-icon>\r\n        <mat-icon class=\"example-icon\" (click)=\"goToDevices()\" *ngIf=\"isLoggedIn()\">important_devices</mat-icon>\r\n        <button mat-button (click)=\"goToDevices()\" *ngIf=\"isLoggedIn()\">Devices</button>\r\n        <button mat-button (click)=\"goToAddDevice()\" *ngIf=\"isLoggedIn() && isAdmin()\">Add Device</button>\r\n        <button mat-button (click)=\"goToRegister()\" *ngIf=\"!isLoggedIn()\">Register</button>\r\n        <span class=\"example-spacer\"></span>\r\n        <button mat-button (click)=\"Logout()\" *ngIf=\"isLoggedIn()\">Logout</button>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<main>\r\n    <router-outlet>\r\n    </router-outlet>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ "./ClientApp/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AppComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    AppComponent.prototype.goToDevices = function () {
        return this.router.navigate(['devices']);
    };
    AppComponent.prototype.goToRegister = function () {
        return this.router.navigate(['register']);
    };
    AppComponent.prototype.goToLogin = function () {
        return this.router.navigate(['']);
    };
    AppComponent.prototype.goToAddDevice = function () {
        return this.router.navigate(['adddevice']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoggedIn;
    };
    AppComponent.prototype.isAdmin = function () {
        if (localStorage.getItem('user') == 'admin') {
            return true;
        }
        else
            return false;
    };
    AppComponent.prototype.Logout = function () {
        localStorage.clear();
        return this.reloadPage();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Material/material.module */ "./ClientApp/app/Material/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Guard/auth.guard */ "./ClientApp/app/Guard/auth.guard.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/data.service */ "./ClientApp/app/service/data.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/auth.service */ "./ClientApp/app/service/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./ClientApp/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./ClientApp/app/login/login.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./devices/devices.component */ "./ClientApp/app/devices/devices.component.ts");
/* harmony import */ var _devices_table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./devices/table/table.component */ "./ClientApp/app/devices/table/table.component.ts");
/* harmony import */ var _adddevice_adddevice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adddevice/adddevice.component */ "./ClientApp/app/adddevice/adddevice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//AuthGuard









var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
    },
    {
        path: 'devices',
        component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_14__["DevicesComponent"],
        canActivate: [_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: 'adddevice',
        component: _adddevice_adddevice_component__WEBPACK_IMPORTED_MODULE_16__["AdddeviceComponent"],
        canActivate: [_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _devices_devices_component__WEBPACK_IMPORTED_MODULE_14__["DevicesComponent"],
                _devices_table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"],
                _adddevice_adddevice_component__WEBPACK_IMPORTED_MODULE_16__["AdddeviceComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _Material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: 'reload',
                    useHash: true,
                    enableTracing: true
                })
            ],
            providers: [_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _service_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/devices/devices.component.css":
/*!*****************************************************!*\
  !*** ./ClientApp/app/devices/devices.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/devices/devices.component.html":
/*!******************************************************!*\
  !*** ./ClientApp/app/devices/devices.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table></app-table>\n"

/***/ }),

/***/ "./ClientApp/app/devices/devices.component.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/devices/devices.component.ts ***!
  \****************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevicesComponent = /** @class */ (function () {
    function DevicesComponent() {
    }
    DevicesComponent.prototype.ngOnInit = function () {
    };
    DevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__(/*! ./devices.component.html */ "./ClientApp/app/devices/devices.component.html"),
            styles: [__webpack_require__(/*! ./devices.component.css */ "./ClientApp/app/devices/devices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./ClientApp/app/devices/table/table.component.css":
/*!*********************************************************!*\
  !*** ./ClientApp/app/devices/table/table.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item{\r\n    font-size:15px;\r\n}"

/***/ }),

/***/ "./ClientApp/app/devices/table/table.component.html":
/*!**********************************************************!*\
  !*** ./ClientApp/app/devices/table/table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:50px\">\r\n    <div *ngFor=\"let element of devices\">\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    <h6> {{element.name}}</h6>\r\n                </mat-panel-title>\r\n                <mat-panel-description *ngIf=\"(!element.user)\">\r\n                    <div style=\"color:green\">Available</div>\r\n                </mat-panel-description>\r\n                <mat-panel-description *ngIf=\"(element.user)\">\r\n                    <div style=\"color:red\">Unavailable</div>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <mat-list role=\"list\">\r\n                <mat-list-item role=\"listitem\">Manufacturer: {{element.manufacturer}}</mat-list-item>\r\n                <mat-list-item role=\"listitem\">Type: {{element.type}}</mat-list-item>\r\n                <mat-list-item role=\"listitem\">OS: {{element.os}}</mat-list-item>\r\n                <mat-list-item role=\"listitem\">OSVersion: {{element.osVersion}}</mat-list-item>\r\n                <mat-list-item role=\"listitem\">Processor: {{element.processor}}</mat-list-item>\r\n                <mat-list-item role=\"listitem\">RAM: {{element.ram}}</mat-list-item>\r\n                <mat-list-item role=\"listitem\" *ngIf=\"(element.user)&&isAdmin()\">Used by: {{element.user.name}}</mat-list-item>\r\n                <mat-list-item role=\"listitem\">\r\n                    <button mat-button color=\"primary\" (click)=\"assignItem(element.id)\" *ngIf=\"!(element.user); else unassign\">Assign</button>\r\n                    <ng-template #unassign>\r\n                        <button mat-button color=\"primary\" (click)=\"unassignItem(element.id)\" *ngIf=\"checkUser(element.user.name)|| isAdmin()\">Unassign</button>\r\n                    </ng-template>\r\n                    <button mat-button color=\"warn\" (click)=\"removeItem(element.id)\" *ngIf=\"isAdmin()&&!(element.user)\">Delete</button>\r\n                </mat-list-item>\r\n            </mat-list>\r\n        </mat-expansion-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/devices/table/table.component.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/devices/table/table.component.ts ***!
  \********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/data.service */ "./ClientApp/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = /** @class */ (function () {
    function TableComponent(data, router, cd) {
        this.data = data;
        this.router = router;
        this.cd = cd;
        this.devices = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    TableComponent.prototype.getDevices = function () {
        var _this = this;
        return this.data.getDevices().subscribe(function (success) {
            _this.devices = success;
            console.log(success);
        });
    };
    TableComponent.prototype.removeItem = function (id) {
        var _this = this;
        return this.data.removeDevice(id).subscribe(function (success) {
            console.log(success);
            _this.getDevices();
        });
    };
    TableComponent.prototype.assignItem = function (id) {
        var _this = this;
        return this.data.assignDevice(id).subscribe(function (success) {
            console.log(success);
            _this.getDevices();
        });
    };
    TableComponent.prototype.unassignItem = function (id) {
        var _this = this;
        return this.data.unassignDevice(id).subscribe(function (success) {
            _this.cd.markForCheck();
            console.log(success);
            _this.getDevices();
        });
    };
    TableComponent.prototype.checkUser = function (user) {
        if (user == localStorage.getItem('user'))
            return true;
        else
            return false;
    };
    TableComponent.prototype.isAdmin = function () {
        if (localStorage.getItem('user') == 'admin') {
            return true;
        }
        else
            return false;
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./ClientApp/app/devices/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./ClientApp/app/devices/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./ClientApp/app/login/login.component.css":
/*!*************************************************!*\
  !*** ./ClientApp/app/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.center {\r\n    width: 75%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.main-div {\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.example-card {\r\n    max-width: 400px;\r\n   \r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/login/login.component.html":
/*!**************************************************!*\
  !*** ./ClientApp/app/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\r\n    <mat-card class=\"example-card center\">\r\n        <mat-card-header>\r\n            <mat-card-title><h3>Login</h3></mat-card-title>\r\n        </mat-card-header>\r\n        <br />\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n        <mat-card-content>\r\n\r\n            <form>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Name\" [(ngModel)]=\"loginInfo.Name\" name=\"Name\" required>\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Password\" [(ngModel)]=\"loginInfo.password\" type=\"password\" name=\"password\" required>\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </form>\r\n            <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-raised-button (click)=\"onLogin()\" color=\"primary\" style=\"margin-left:40%\">Login</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/login/login.component.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./ClientApp/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./ClientApp/app/service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, data) {
        this.auth = auth;
        this.router = router;
        this.data = data;
        this.loginInfo = {
            Name: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.auth.Login(this.loginInfo).subscribe(function (success) {
            if (success.status == 200) {
                _this.auth.LoggingIn(true);
                localStorage.setItem('user', success.body);
                return _this.router.navigate(["devices"]);
            }
        }, function (err) {
            _this.errorMessage = "Invalid Account";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./ClientApp/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./ClientApp/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./ClientApp/app/register/register.component.css":
/*!*******************************************************!*\
  !*** ./ClientApp/app/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.center {\r\n    width: 75%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.main-div {\r\n    height: 50vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.example-card {\r\n    max-width: 400px;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/register/register.component.html":
/*!********************************************************!*\
  !*** ./ClientApp/app/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\r\n    <mat-card class=\"example-card center\">\r\n        <mat-card-header>\r\n            <mat-card-title><h3>Register</h3></mat-card-title>\r\n        </mat-card-header>\r\n        <br />\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n        <div class=\"alert alert-success\" *ngIf=\"successMessage\">{{successMessage}}</div>\r\n        <mat-card-content>\r\n            <form>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Name\" [(ngModel)]=\"registerInfo.Name\" name=\"Name\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Password\" [(ngModel)]=\"registerInfo.password\" type=\"password\" name=\"password\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <mat-form-field style=\"width:350px !important;\" class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Location\" [(ngModel)]=\"registerInfo.location\" name=\"location\" >\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </form>\r\n            <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-raised-button (click)=\"onRegister()\" color=\"primary\" style=\"margin-left:40%\">Register</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/register/register.component.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./ClientApp/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.registerInfo = {
            Name: "",
            password: "",
            location: ""
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.auth.Register(this.registerInfo).subscribe(function (success) {
            if (success.status == 200) {
                _this.successMessage = "Registration successful!";
            }
        }, function (err) {
            _this.errorMessage = "Failed to Register";
        });
        this.registerInfo.Name = '';
        this.registerInfo.password = '';
        this.registerInfo.location = '';
        this.errorMessage = '';
        this.successMessage = '';
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./ClientApp/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./ClientApp/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/service/auth.service.ts":
/*!***********************************************!*\
  !*** ./ClientApp/app/service/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    }
    AuthService.prototype.LoggingIn = function (value) {
        this.isLoggedIn = value;
        localStorage.setItem('loggedIn', 'true');
    };
    Object.defineProperty(AuthService.prototype, "isUserLoggedIn", {
        get: function () {
            return JSON.parse(localStorage.getItem('loggedIn') || this.isLoggedIn.toString());
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.Login = function (loginInfo) {
        return this.http.post("api/account/login", loginInfo, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AuthService.prototype.Register = function (registerInfo) {
        return this.http.post("api/account/register", registerInfo, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./ClientApp/app/service/data.service.ts":
/*!***********************************************!*\
  !*** ./ClientApp/app/service/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.devices = [];
    }
    DataService.prototype.getDevices = function () {
        return this.http.get("api/devices");
    };
    DataService.prototype.removeDevice = function (id) {
        return this.http.delete("api/devices/" + id, {
            observe: 'response',
            responseType: 'text'
        });
    };
    DataService.prototype.assignDevice = function (id) {
        return this.http.patch("api/devices/assign/" + id, { Name: localStorage.getItem('user') }, {
            observe: 'response',
            responseType: 'text'
        });
    };
    DataService.prototype.unassignDevice = function (id) {
        return this.http.patch("api/devices/unassign/" + id, {
            observe: 'response',
            responseType: 'text'
        });
    };
    DataService.prototype.addDevice = function (addInfo) {
        return this.http.post("api/devices", addInfo, {
            observe: 'response',
            responseType: 'text'
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GITHUB\Device Management System\DeviceManagementSystem\DeviceManagementSystem\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map