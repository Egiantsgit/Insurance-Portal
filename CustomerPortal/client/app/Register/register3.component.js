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
var RegisterComponent3 = (function () {
    function RegisterComponent3(router, formservice) {
        this.router = router;
        this.formservice = formservice;
        this.data = {};
    }
    RegisterComponent3.prototype.getDetails = function (event) {
        event.preventDefault();
        this.router.navigate(['Register4']);
    };
    RegisterComponent3.prototype.getForm3 = function (event) {
        event.preventDefault();
        var RegUser3 = {
            smoking: this.data.smoking,
            alcohol: this.data.alcohol,
            Height: this.data.height,
            weight: this.data.weight,
            addiction: this.data.addiction,
            illness: this.data.illness
        };
        this.formservice.setData('smoking', RegUser3.smoking);
        this.formservice.setData('alcohol', RegUser3.alcohol);
        this.formservice.setData('height', RegUser3.Height);
        this.formservice.setData('weight', RegUser3.weight);
        this.formservice.setData('drugaddict', RegUser3.addiction);
        this.formservice.setData('mentalillness', RegUser3.illness);
        console.log('Hello', RegUser3.smoking);
    };
    return RegisterComponent3;
}());
RegisterComponent3 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-register3',
        templateUrl: 'register3.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, register_service_1.FormService])
], RegisterComponent3);
exports.RegisterComponent3 = RegisterComponent3;
//# sourceMappingURL=register3.component.js.map