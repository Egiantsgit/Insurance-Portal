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
var report_service_1 = require("./report.service");
var ReportComponent = (function () {
    function ReportComponent(router, reportservice) {
        this.router = router;
        this.reportservice = reportservice;
        this.Formdata = {};
        //    private FormData2 ={};
        this.data = {};
    }
    // getDetails(event){
    // event.preventDefault();
    // this.router.navigate(['Register4']);
    //}
    ReportComponent.prototype.getReport = function (event) {
        event.preventDefault();
        var Report = {
            firstName: this.data.firstName,
            lastName: this.data.lastName,
            gender: this.data.gender,
            memberId: this.data.memberId,
            typeOfAccident: this.data.typeOfAccident,
            dAccident: this.data.dAccident,
            physicianName: this.data.physicianName,
            dateTreated: this.data.dateTreated,
            dVisit: this.data.dVisit,
            claimedAmount: this.data.claimedAmount,
            patientResponsibility: this.data.patientResponsibility,
            dClaim: this.data.dClaim
        };
        this.reportservice.setData('firstName', Report.firstName);
        this.reportservice.setData('lastName', Report.lastName);
        this.reportservice.setData('gender', Report.gender);
        this.reportservice.setData('memberId', Report.memberId);
        this.reportservice.setData('typeOfAccident', Report.typeOfAccident);
        this.reportservice.setData('dAccident', Report.dAccident);
        this.reportservice.setData('physicianName', Report.physicianName);
        this.reportservice.setData('dateTreated', Report.dateTreated);
        this.reportservice.setData('dVisit', Report.dVisit);
        this.reportservice.setData('claimedAmount', Report.claimedAmount);
        this.reportservice.setData('patientResponsibility', Report.patientResponsibility);
        this.reportservice.setData('dClaim', Report.dClaim);
        this.Formdata = this.reportservice.getData();
        this.reportservice.postData(this.Formdata)
            .subscribe(function (result) {
            console.log(result);
            // alert(result);
            //this.router.navigate(['confirm']);
        }, function (error) {
            alert('There is a problem with the enrollment');
        });
        console.log('Hello', Report.firstName);
        console.log(this.Formdata);
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'report',
        templateUrl: 'report.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, report_service_1.ReportService])
], ReportComponent);
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map