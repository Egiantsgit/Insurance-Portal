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
var ProviderComponent = (function () {
    function ProviderComponent(appService, router) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.providers = {};
        this.doctorDetails = [];
        this.newdoctorDetails = [];
        this.oneProvider = {};
        this.Formdata = {};
        this.appService.getAllDoctors()
            .subscribe(function (provider) {
            //console.log('DoctorsDetails:',provider)
            _this.doctorDetails = provider;
        });
    }
    ProviderComponent.prototype.showOverlay = function (event) {
        //console.log('event: ', event.provider);
    };
    ProviderComponent.prototype.getData = function (provider) {
        //console.log('Provider:', provider);
        this.isopen = true;
        this.oneProvider = provider;
    };
    ProviderComponent.prototype.removeData = function () {
        //console.log('removed');
        this.isopen = false;
        this.oneProvider = null;
    };
    ProviderComponent.prototype.onSubmit = function (f) {
        var _this = this;
        // this.appService.setZipcode(f.value.search);
        // this.router.navigate(['zipcode']);
        this.newdoctorDetails = [];
        this.appService.getAllDoctors()
            .subscribe(function (provider) {
            _this.doctorDetails = provider;
        });
        for (var i = 0; i <= this.doctorDetails.length; i++) {
            if (this.doctorDetails[i].zipcode == f.value.search) {
                this.newdoctorDetails.push(this.doctorDetails[i]);
                console.log('Zipcode:', this.newdoctorDetails);
            }
            this.zipcodeavialable = true;
            // }
        }
    };
    return ProviderComponent;
}());
ProviderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'provider',
        templateUrl: 'provider.component.html'
        // providers:[TaskService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router])
], ProviderComponent);
exports.ProviderComponent = ProviderComponent;
//# sourceMappingURL=provider.component.js.map