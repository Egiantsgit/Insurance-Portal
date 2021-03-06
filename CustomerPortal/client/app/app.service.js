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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        console.log('app service initialized');
    }
    AppService.prototype.getApp = function (username, password) {
        return this.http.get('http://localhost:7070/patient/login?username=' + username + '&password=' + password)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getMembershipType = function (membershipType, metallic_type) {
        return this.http.get('http://localhost:7070/insurance/ins?membershipType=' + membershipType + '&metallic_type=' + metallic_type)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getClaims = function (id) {
        return this.http.get('http://localhost:7070/patient/claims?id=' + id)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getAllDoctors = function () {
        return this.http.get('http://localhost:7070/provider/all')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getProvider = function (zipcode) {
        return this.http.get('http://localhost:7070/provider/search?zipcode=' + zipcode)
            .map(function (res) { return res.json(); });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map