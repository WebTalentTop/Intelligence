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
var onboarding_service_1 = require("../onboarding/onboarding.service");
var token_service_1 = require("../login/token.service");
var CompanyComponent = (function () {
    function CompanyComponent(onboardingService, router) {
        this.onboardingService = onboardingService;
        this.router = router;
        this.close = new core_1.EventEmitter();
        this.company = {};
    }
    CompanyComponent.prototype.ngOnInit = function () { };
    //method to join an existing company
    CompanyComponent.prototype.next = function () {
        this.close.emit(null);
    };
    CompanyComponent.prototype.getCompanyInfo = function () {
        return this.company;
    };
    //method to create a new company
    CompanyComponent.prototype.create = function () {
        var _this = this;
        // console.log(this.company);
        this.onboardingService.createCompany(this.company)
            .subscribe(function (obj) {
            // console.log(obj);
            _this.id = obj['COMPANY_ID'];
        }, function (error) {
            console.log(error);
        });
    };
    return CompanyComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CompanyComponent.prototype, "close", void 0);
CompanyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'company-comp',
        templateUrl: 'company.component.html',
        providers: [onboarding_service_1.OnboardingService, token_service_1.TokenService],
        styleUrls: ['onboarding.component.css']
    }),
    __metadata("design:paramtypes", [onboarding_service_1.OnboardingService,
        router_1.Router])
], CompanyComponent);
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map