"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./service/auth.service");
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
    AppComponent.prototype.goToUsers = function () {
        return this.router.navigate(['users']);
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
        var _this = this;
        return this.auth.Logout().subscribe(function (success) {
            console.log(success);
            localStorage.clear();
            _this.reloadPage();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map