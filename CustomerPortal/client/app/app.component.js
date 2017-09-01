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
var app_service_1 = require("./app.service");
var register_service_1 = require("./Register/register.service");
var report_service_1 = require("./components/report/report.service");
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
    }
    AppComponent.prototype.getPersonDetails = function () {
        console.log('He');
        this.patientInfo = JSON.parse(localStorage.getItem('patientDetails'));
    };
    AppComponent.prototype.getInsuranceDetails = function () {
        var _this = this;
        this.appService.getMembershipType(this.patientInfo.membershipType, this.patientInfo.metallic_type)
            .subscribe(function (insuranceDetails) {
            console.log('Insurance:', insuranceDetails);
            _this.insuranceDetails = insuranceDetails;
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        providers: [app_service_1.AppService, register_service_1.FormService, report_service_1.ReportService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map