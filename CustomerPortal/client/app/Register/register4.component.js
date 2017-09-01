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
var RegisterComponent4 = (function () {
    function RegisterComponent4(router, formservice) {
        this.router = router;
        this.formservice = formservice;
        this.Formdata = {};
        //    private FormData2 ={};
        this.data = {};
    }
    // getDetails(event){
    // event.preventDefault();
    // this.router.navigate(['Register4']);
    //}
    RegisterComponent4.prototype.getForm4 = function (event) {
        event.preventDefault();
        var RegUser4 = {
            accountbal: this.data.balance,
            username: this.data.username,
            password: this.data.password
        };
        this.formservice.setData('accountbalance', RegUser4.accountbal);
        this.formservice.setData('username', RegUser4.username);
        this.formservice.setData('password', RegUser4.password);
        this.Formdata = this.formservice.getData();
        this.formservice.postData(this.Formdata)
            .subscribe(function (result) {
            console.log(result);
            // alert(result);
            //this.router.navigate(['confirm']);
        }, function (error) {
            alert('There is a problem with the enrollment');
        });
        console.log('Hello', RegUser4.accountbal);
        console.log(this.Formdata);
    };
    return RegisterComponent4;
}());
RegisterComponent4 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-register4',
        templateUrl: 'register4.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, register_service_1.FormService])
], RegisterComponent4);
exports.RegisterComponent4 = RegisterComponent4;
//# sourceMappingURL=register4.component.js.map