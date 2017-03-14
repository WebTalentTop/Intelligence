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
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var token_service_1 = require("../login/token.service");
var config_1 = require("../common/config");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
//Create the service
var ToastService = (function () {
    function ToastService(http, tokenService) {
        var _this = this;
        this.http = http;
        this.tokenService = tokenService;
        this.getToastsUrl = config_1.API_URL + '/fetchAlerts';
        this.setToastSeenUrl = config_1.API_URL + '/removeAlert';
        this.addToastUrl = config_1.API_URL + '/postAlert';
        this.tokenService.getToken()
            .subscribe(function (obj) {
            _this.token = obj;
        }, function (error) {
            console.log("getToken ERROR");
        });
    }
    ToastService.prototype.getToasts = function (path) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('URL', '/#' + path);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.getToastsUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    ToastService.prototype.setToastSeen = function (id) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('ID', id);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.setToastSeenUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    ToastService.prototype.addToast = function (toast) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('URL', '/#' + toast['URL']);
        body.set('MESSAGE', toast['MESSAGE']);
        body.set('TITLE', toast['TITLE']);
        body.set('ACTION', toast['ACTION']);
        // console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.addToastUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    //Extract the home data from the JSON Response
    ToastService.prototype.extractData = function (res) {
        var JSONresponse = res.json();
        return JSONresponse || {};
    };
    //Handle the error and return the error object
    ToastService.prototype.handleError = function (res) {
        // console.log(res);
        var JSONresponse = res.json();
        return Observable_1.Observable.throw(JSONresponse);
    };
    return ToastService;
}());
ToastService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        token_service_1.TokenService])
], ToastService);
exports.ToastService = ToastService;
//# sourceMappingURL=toast.service.js.map