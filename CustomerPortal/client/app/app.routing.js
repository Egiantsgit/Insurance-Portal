"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var patient_component_1 = require("./components/patient/patient.component");
var provider_component_1 = require("./components/provider/provider.component");
var zipcode_component_1 = require("./components/zipcode/zipcode.component");
var report_component_1 = require("./components/report/report.component");
var claims_component_1 = require("./components/claims/claims.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./Register/register.component");
var register2_component_1 = require("./Register/register2.component");
var register3_component_1 = require("./Register/register3.component");
var register4_component_1 = require("./Register/register4.component");
var routes = [
    { path: 'home', component: patient_component_1.PatientComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'Register2', component: register2_component_1.RegisterComponent2 },
    { path: 'Register3', component: register3_component_1.RegisterComponent3 },
    { path: 'Register4', component: register4_component_1.RegisterComponent4 },
    { path: 'claims', component: claims_component_1.ClaimsComponent },
    { path: 'report', component: report_component_1.ReportComponent },
    { path: 'provider', component: provider_component_1.ProviderComponent },
    { path: 'zipcode', component: zipcode_component_1.ZipcodeComponent }
    // { path: 'logout' , component: PatientComponent},
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map