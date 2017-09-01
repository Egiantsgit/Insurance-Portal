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
var PatientComponent = (function () {
    function PatientComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.patientInfo = JSON.parse(localStorage.getItem('patientDetails'));
        this.appService.getMembershipType(this.patientInfo.membershipType, this.patientInfo.metallic_type)
            .subscribe(function (insuranceDetails) {
            console.log('Insurance:', insuranceDetails);
            _this.insuranceDetails = insuranceDetails;
        });
    }
    return PatientComponent;
}());
PatientComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'patient',
        templateUrl: 'patient.component.html'
        // providers:[TaskService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], PatientComponent);
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.component.js.map