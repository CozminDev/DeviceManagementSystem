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
var data_service_1 = require("../../service/data.service");
var router_1 = require("@angular/router");
var core_2 = require("@angular/core");
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
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router, core_2.ChangeDetectorRef])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map