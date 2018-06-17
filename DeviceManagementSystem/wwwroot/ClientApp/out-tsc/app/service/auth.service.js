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
var http_1 = require("@angular/common/http");
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
            responseType: 'json'
        });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map