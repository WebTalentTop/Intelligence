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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var config_1 = require("../common/config");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
//Create the service
var TokenService = (function () {
    function TokenService(http, router) {
        this.http = http;
        this.router = router;
        this.verifyTokenUrl = config_1.API_URL + '/verifyToken';
        //these should be the ONLY hardcoded urls in the entire site
        this.environmentUrl = 'error';
    }
    TokenService.prototype.getEnvironment = function () {
        var _this = this;
        var timeout = localStorage.getItem('CONFIG_EXPIRE');
        if (!timeout) {
            return this.http.get(this.environmentUrl).map(function (data) { return _this.extractConfigData(data); }).catch(function (err) { return _this.handleError(err); });
        }
        var date = new Date();
        var epochSeconds = Math.round(date.getTime() / 1000);
        if (+(this.getConfigExpire()) < epochSeconds) {
            return this.http.get(this.environmentUrl).map(function (data) { return _this.extractConfigData(data); }).catch(function (err) { return _this.handleError(err); });
        }
        var data = this.getConfig();
        var token_observable = Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
            return;
        });
        return token_observable;
    };
    TokenService.prototype.extractConfigData = function (res) {
        var JSONresponse = res.json();
        this.setConfigTimeout();
        this.putConfig({ 'key': 'ANALYTICS_CODE', 'value': JSONresponse.data.ANALYTICS_CODE });
        this.putConfig({ 'key': 'FACEBOOK_REDIRECT_URL', 'value': JSONresponse.data.FACEBOOK_REDIRECT_URL });
        this.putConfig({ 'key': 'GOOGLE_REDIRECT_URL', 'value': JSONresponse.data.GOOGLE_REDIRECT_URL });
        this.putConfig({ 'key': 'API_URL', 'value': JSONresponse.data.API_URL });
        this.putConfig({ 'key': 'FRONTEND_URL', 'value': JSONresponse.data.FRONTEND_URL });
        return JSONresponse.data || {};
    };
    TokenService.prototype.putConfig = function (config) {
        return localStorage.setItem(config['key'], config['value']);
    };
    TokenService.prototype.setConfigTimeout = function () {
        var date = new Date();
        var epochSeconds30Min = (Math.round(date.getTime() / 1000) + (60 * 10));
        return localStorage.setItem('CONFIG_EXPIRE', epochSeconds30Min.toString());
    };
    TokenService.prototype.getConfig = function () {
        var data = {
            'ANALYTICS_CODE': localStorage.getItem('ANALYTICS_CODE'),
            'FACEBOOK_REDIRECT_URL': localStorage.getItem('FACEBOOK_REDIRECT_URL'),
            'GOOGLE_REDIRECT_URL': localStorage.getItem('GOOGLE_REDIRECT_URL'),
            'API_URL': localStorage.getItem('API_URL'),
            'FRONTEND_URL': localStorage.getItem('FRONTEND_URL')
        };
        return data;
    };
    TokenService.prototype.getConfigExpire = function () {
        return localStorage.getItem('CONFIG_EXPIRE');
    };
    TokenService.prototype.verifyToken = function (token) {
        var _this = this;
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', token);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.verifyTokenUrl, body, options).map(function (data) { return _this.extractData(data); }).catch(this.handleError);
    };
    TokenService.prototype.getExpire = function () {
        return localStorage.getItem('expire');
    };
    TokenService.prototype.setExpire = function () {
        var date = new Date();
        var epochSeconds30Min = (Math.round(date.getTime() / 1000) + (60 * 30));
        return localStorage.setItem('expire', epochSeconds30Min.toString());
    };
    TokenService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (!token) {
            this.removeToken();
            var token_observable = Observable_1.Observable.create(function (observer) {
                observer.next(token);
                observer.complete();
                //return () => console.log('disposed yo');
                return;
            });
            return token_observable;
        }
        var date = new Date();
        var epochSeconds = Math.round(date.getTime() / 1000);
        if (+(this.getExpire()) < epochSeconds) {
            return this.verifyToken(token);
        }
        else {
            var token_observable = Observable_1.Observable.create(function (observer) {
                observer.next(token);
                observer.complete();
                return;
            });
            return token_observable;
        }
    };
    TokenService.prototype.setToken = function (token) {
        this.setExpire();
        return localStorage.setItem('token', token);
    };
    TokenService.prototype.removeToken = function () {
        localStorage.removeItem('expire');
        return localStorage.removeItem('token');
    };
    TokenService.prototype.setAndVerifyToken = function (token) {
        this.setToken(token);
        return this.getToken();
    };
    TokenService.prototype.extractData = function (res) {
        var JSONresponse = res.json();
        if (JSONresponse['STATUS'] == 'SUCCESS') {
            //setToken(JSONresponse['token']);
            this.setToken(JSONresponse['TOKEN']); //TOKEN
            return JSONresponse['TOKEN'];
        }
        else {
            this.removeToken();
            var link = ['/login'];
            this.router.navigate(link);
        }
    };
    TokenService.prototype.logOut = function () {
        this.removeToken();
    };
    TokenService.prototype.handleError = function (res) {
        var JSONresponse = res.json();
        return Observable_1.Observable.throw(JSONresponse);
    };
    return TokenService;
}());
TokenService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map