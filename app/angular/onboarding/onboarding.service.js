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
var OnboardingService = (function () {
    function OnboardingService(http, tokenService) {
        var _this = this;
        this.http = http;
        this.tokenService = tokenService;
        this.signUpUrl = config_1.API_URL + '/saveAccountInformation';
        this.joinCompanyUrl = config_1.API_URL + '/joinCompany';
        this.createCompanyUrl = config_1.API_URL + '/createCompany';
        this.createSubscriptionUrl = config_1.API_URL + '/createSubscription';
        this.tokenService.getToken()
            .subscribe(function (obj) {
            _this.token = obj;
        }, function (error) { return console.log(error); });
    }
    OnboardingService.prototype.signUp = function (user) {
        var body = new http_1.URLSearchParams();
        body.set('USERNAME', user['username']);
        body.set('PASSWORD', user['password']);
        body.set('FIRSTNAME', user['firstname']);
        body.set('LASTNAME', user['lastname']);
        body.set('PHONE', user['telephone']);
        body.set('EMAIL', user['email']);
        body.set('REFERRAL_TOKEN', user['token']);
        // console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.signUpUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    OnboardingService.prototype.joinCompany = function (code) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', localStorage.getItem('token'));
        body.set('COMPANY_ADD_CODE', code);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.joinCompanyUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    OnboardingService.prototype.createCompany = function (company) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', localStorage.getItem('token'));
        body.set('NAME', company['name']);
        body.set('WEBSITE', company['website']);
        // console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.createCompanyUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    OnboardingService.prototype.createSubscription = function (company_id, plan, stripe_token) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', localStorage.getItem('token'));
        body.set('COMPANY_ID', company_id);
        body.set('PLAN', plan);
        body.set('STRIPE_TOKEN', stripe_token);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.createSubscriptionUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    OnboardingService.prototype.extractData = function (res) {
        var JSONresponse = res.json();
        return JSONresponse || {};
    };
    //Handle the error and return the error object
    OnboardingService.prototype.handleError = function (res) {
        console.log(res);
        var JSONresponse = res.json();
        return Observable_1.Observable.throw(JSONresponse);
    };
    return OnboardingService;
}());
OnboardingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        token_service_1.TokenService])
], OnboardingService);
exports.OnboardingService = OnboardingService;
//# sourceMappingURL=onboarding.service.js.map