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
var data_service_1 = require("../service/data.service");
var router_1 = require("@angular/router");
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
        core_1.Component({
            selector: 'app-adddevice',
            templateUrl: './adddevice.component.html',
            styleUrls: ['./adddevice.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], AdddeviceComponent);
    return AdddeviceComponent;
}());
exports.AdddeviceComponent = AdddeviceComponent;
//# sourceMappingURL=adddevice.component.js.map