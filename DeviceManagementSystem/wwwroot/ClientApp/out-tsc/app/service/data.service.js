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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map