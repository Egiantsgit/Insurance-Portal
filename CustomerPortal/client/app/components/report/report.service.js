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
require("rxjs/add/operator/toPromise");
var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.url = "http://localhost:7070/claims/report";
        this.Formdata = {};
        this.data = {};
        console.log('Form Service Initialized');
    }
    ReportService.prototype.setData = function (option, value) {
        this.Formdata[option] = value;
    };
    ReportService.prototype.getData = function () {
        return this.Formdata;
    };
    ReportService.prototype.postData = function (Formdata) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(Formdata);
        // console.log(JSON.stringify(FormData));
        return this.http.post(this.url, Formdata, { headers: headers })
            .map(function (res) { return res || { result: 'report sent successfully' }; });
    };
    return ReportService;
}());
ReportService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ReportService);
exports.ReportService = ReportService;
//# sourceMappingURL=report.service.js.map