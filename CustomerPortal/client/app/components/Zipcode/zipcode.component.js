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
// import {TaskService} from './services/task.service';
var app_service_1 = require("./../../app.service");
var router_1 = require("@angular/router");
var ZipcodeComponent = (function () {
    function ZipcodeComponent(appService, router) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.doctorDetails = [];
        this.zipcode = 0;
        this.oneProvider = {};
        this.zipcode = this.appService.getZipcode();
        console.log('reloading...........');
        this.appService.getProvider(this.zipcode)
            .subscribe(function (provider) {
            _this.doctorDetails = provider;
        });
    }
    ZipcodeComponent.prototype.getData = function (provider) {
        console.log('Provider:', provider);
        this.isopen = true;
        this.oneProvider = provider;
    };
    ZipcodeComponent.prototype.removeData = function () {
        console.log('removed');
        this.isopen = false;
        this.oneProvider = null;
    };
    ZipcodeComponent.prototype.onSubmit = function (f) {
        this.appService.setZipcode(f.value.search);
        this.router.navigate(['zipcode']);
    };
    return ZipcodeComponent;
}());
ZipcodeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'zipcode',
        templateUrl: 'zipcode.component.html'
        // providers:[TaskService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router])
], ZipcodeComponent);
exports.ZipcodeComponent = ZipcodeComponent;
//# sourceMappingURL=zipcode.component.js.map