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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
//Create the service
var MarketplaceService = (function () {
    function MarketplaceService(http, tokenService) {
        var _this = this;
        this.http = http;
        this.tokenService = tokenService;
        this.zohoUrl = 'https://api.sherlockintelligence.com:2033/zoho';
        this.tokenService.getToken()
            .subscribe(function (obj) {
            _this.token = obj;
        }, function (error) { return console.log(error); });
    }
    //Login the user
    MarketplaceService.prototype.zoho = function (connection) {
        var _this = this;
        var body = new http_1.URLSearchParams();
        body.set('USER_DATASOURCE_NAME', connection['name']);
        body.set('USERNAME', connection['email']);
        body.set('PASSWORD', connection['password']);
        body.set('APP_SPECIFIC_PASSWORD', connection['apppassword']);
        body.set('CLIENT_ID', '4');
        body.set('MASTER_CONNECTOR_INFO_ID', '1');
        body.set('LOAD_STATUS', connection['Status']);
        body.set('TOKEN', this.token);
        console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.zohoUrl, body, options).map(function (data) { return _this.extractData; }).catch(this.handleError);
    };
    //Extract the home data from the JSON Response
    MarketplaceService.prototype.extractData = function (res) {
        var JSONresponse = res.json();
        return JSONresponse || {};
    };
    //Handle the error and return the error object
    MarketplaceService.prototype.handleError = function (res) {
        console.log(res);
        var JSONresponse = res.json();
        return Observable_1.Observable.throw(JSONresponse);
    };
    return MarketplaceService;
}());
MarketplaceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        token_service_1.TokenService])
], MarketplaceService);
exports.MarketplaceService = MarketplaceService;
//# sourceMappingURL=marketplace.service.js.map