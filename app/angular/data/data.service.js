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
var DataService = (function () {
    function DataService(http, tokenService) {
        var _this = this;
        this.http = http;
        this.tokenService = tokenService;
        this.viewUrl = config_1.API_URL + '/getUserProfileViews';
        this.tokenService.getToken()
            .subscribe(function (obj) {
            _this.token = obj;
        }, function (error) { return console.log(error); });
    }
    // returns the views
    DataService.prototype.getViews = function () {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.viewUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    // load connectors
    DataService.prototype.getConnectors = function () {
        console.log("Load connectors function");
        return null;
    };
    // submit help
    DataService.prototype.submitHelp = function () {
        // let body = JSON.stringify(home);
        var body = "";
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        // return this.http.post(this.postHomeUrl, body, options).map(this.extractData).catch(this.handleError);
        return null;
    };
    // submit feedback
    DataService.prototype.submitFeedback = function () {
        // let body = JSON.stringify(home);
        var body = "";
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        // return this.http.post(this.postHomeUrl, body, options).map(this.extractData).catch(this.handleError);
        return null;
    };
    // load marketplace
    DataService.prototype.getMarketplace = function () {
        console.log("Load marketplace function");
        return null;
    };
    //Extract the home data from the JSON Response
    DataService.prototype.extractData = function (res) {
        var JSONresponse = res.json();
        return JSONresponse || {};
    };
    //Handle the error and return the error object
    DataService.prototype.handleError = function (res) {
        var JSONresponse = res.json();
        return Observable_1.Observable.throw(JSONresponse);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        token_service_1.TokenService])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map