"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var patient_component_1 = require("./components/patient/patient.component");
var provider_component_1 = require("./components/provider/provider.component");
var zipcode_component_1 = require("./components/zipcode/zipcode.component");
var claims_component_1 = require("./components/claims/claims.component");
var report_component_1 = require("./components/report/report.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./Register/register.component");
var register2_component_1 = require("./Register/register2.component");
var register3_component_1 = require("./Register/register3.component");
var register4_component_1 = require("./Register/register4.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, patient_component_1.PatientComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, register2_component_1.RegisterComponent2, register3_component_1.RegisterComponent3, register4_component_1.RegisterComponent4, claims_component_1.ClaimsComponent, report_component_1.ReportComponent, provider_component_1.ProviderComponent, zipcode_component_1.ZipcodeComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map