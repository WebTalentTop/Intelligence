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
var LoginService = (function () {
    function LoginService(http, tokenService) {
        var _this = this;
        this.http = http;
        this.tokenService = tokenService;
        this.loginUrl = config_1.API_URL + '/signIn';
        this.userInfoUrl = config_1.API_URL + '/fetchLoginDetails';
        this.resetPasswordUrl = config_1.API_URL + '/resetPassword';
        this.changeAccountInfoUrl = config_1.API_URL + '/changeAccountInformation';
        this.tokenService.getToken()
            .subscribe(function (obj) {
            _this.token = obj;
        }, function (error) {
            console.log("ERROR");
            // console.log(error)
        });
    }
    //Login the user
    LoginService.prototype.login = function (user) {
        var _this = this;
        var body = new http_1.URLSearchParams();
        body.set('USERNAME', user['username']);
        body.set('PASSWORD', user['password']);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.loginUrl, body, options).map(function (data) { return _this.extractDataSetToken(data); }).catch(this.handleError);
    };
    LoginService.prototype.resetPassword = function (password) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('PASSWORD', password);
        // console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.resetPasswordUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    LoginService.prototype.changeAccountInformation = function (customer) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('FIRSTNAME', customer['FNAME']);
        body.set('LASTNAME', customer['LNAME']);
        //body.set('ACCESS_LEVEL', customer['ACCESS']);
        body.set('EMAIL', customer['EMAIL']);
        body.set('PHONE', customer['PHONE']);
        body.set('TITLE', customer['TITLE']);
        // console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.changeAccountInfoUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    // return user details for the account page
    LoginService.prototype.getUserInfo = function () {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.userInfoUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    //Extract the home data from the JSON Response
    LoginService.prototype.extractData = function (res) {
        var JSONresponse = res.json();
        return JSONresponse || {};
    };
    LoginService.prototype.extractDataSetToken = function (res) {
        var JSONresponse = res.json();
        this.tokenService.setToken(JSONresponse['TOKEN']);
        return JSONresponse || {};
    };
    //Handle the error and return the error object
    LoginService.prototype.handleError = function (res) {
        // console.log(res);
        var JSONresponse = res.json();
        return Observable_1.Observable.throw(JSONresponse);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        token_service_1.TokenService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map