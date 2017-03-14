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
var BillingComponent = (function () {
    function BillingComponent(router) {
        this.router = router;
        this.stripePayment = {};
        this.myPlanFormTitle = "My Plan";
        this.myPlanForm = false;
        this.planChoice = "Platform";
        this.planPrice = "495";
        this.billingFormTitle = "Current Billing Information";
        this.billingForm = false;
        this.historicalFormTitle = "Historical";
        this.historicalForm = false;
    }
    //toogle the toolbars
    BillingComponent.prototype.toggled = function (opened, form) {
        switch (form) {
            case 1:
                this.myPlanForm = (this.myPlanForm === false ? true : false);
                break;
            case 2:
                this.billingForm = (this.billingForm === false ? true : false);
                break;
            case 3:
                this.historicalForm = (this.historicalForm === false ? true : false);
                break;
        }
    };
    BillingComponent.prototype.ngOnInit = function () { };
    return BillingComponent;
}());
BillingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'billing-comp',
        templateUrl: 'billing.component.html',
        providers: [],
        styleUrls: ['team.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], BillingComponent);
exports.BillingComponent = BillingComponent;
//# sourceMappingURL=billing.component.js.map