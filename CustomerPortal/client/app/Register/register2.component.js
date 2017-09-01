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
var RegisterComponent2 = (function () {
    function RegisterComponent2(router, formservice) {
        this.router = router;
        this.formservice = formservice;
        this.data = {};
    }
    RegisterComponent2.prototype.getDetails = function (event) {
        event.preventDefault();
        this.router.navigate(['Register3']);
    };
    RegisterComponent2.prototype.getForm2 = function (event) {
        event.preventDefault();
        var RegUser2 = {
            membership: this.data.membership,
            metallic: this.data.metallic
        };
        this.formservice.setData('membershipType', RegUser2.membership);
        this.formservice.setData('metallic_type', RegUser2.metallic);
        console.log('Hello', RegUser2.metallic);
    };
    return RegisterComponent2;
}());
RegisterComponent2 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-register2',
        templateUrl: 'register2.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, register_service_1.FormService])
], RegisterComponent2);
exports.RegisterComponent2 = RegisterComponent2;
//# sourceMappingURL=register2.component.js.map