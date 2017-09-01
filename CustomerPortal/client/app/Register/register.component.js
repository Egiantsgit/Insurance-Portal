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
var register_service_1 = require("./register.service");
var RegisterComponent = (function () {
    function RegisterComponent(router, formservice) {
        this.router = router;
        this.formservice = formservice;
        this.data = {};
    }
    RegisterComponent.prototype.getDetails = function (event) {
        event.preventDefault();
        this.router.navigate(['Register2']);
    };
    RegisterComponent.prototype.getForm1 = function (event) {
        event.preventDefault();
        var RegUser = {
            firstname: this.data.fname,
            lastname: this.data.lname,
            age: this.data.age,
            dob: this.data.dob,
            Gender: this.data.gender,
            email: this.data.email,
            mobileno: this.data.mobileno,
            address: this.data.address,
            country: this.data.country
        };
        this.formservice.setData('firstname', RegUser.firstname);
        this.formservice.setData('lastname', RegUser.lastname);
        this.formservice.setData('age', RegUser.age);
        this.formservice.setData('dob', RegUser.dob);
        this.formservice.setData('gender', RegUser.Gender);
        this.formservice.setData('email', RegUser.email);
        this.formservice.setData('mobile', RegUser.mobileno);
        this.formservice.setData('address', RegUser.address);
        this.formservice.setData('countryOfOrigin', RegUser.country);
        console.log('Hello', RegUser.firstname);
        console.log('hi', RegUser.country);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-register',
        templateUrl: 'register.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, register_service_1.FormService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map