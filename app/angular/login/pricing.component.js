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
var router_1 = require("@angular/router");
var login_service_1 = require("../login/login.service");
var token_service_1 = require("../login/token.service");
var PricingComponent = (function () {
    function PricingComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.user = {};
    }
    PricingComponent.prototype.ngOnInit = function () { };
    return PricingComponent;
}());
PricingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pricing-comp',
        templateUrl: 'pricing.component.html',
        providers: [login_service_1.LoginService, token_service_1.TokenService],
        styleUrls: ['login.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router])
], PricingComponent);
exports.PricingComponent = PricingComponent;
//# sourceMappingURL=pricing.component.js.map