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
var material_1 = require("@angular/material");
var BillingInfoComponent = (function () {
    function BillingInfoComponent(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
        this.close = new core_1.EventEmitter();
        this.stripePayment = {};
        this.states = [
            { name: 'ALABAMA', value: 'AL' },
            { name: 'ALASKA', value: 'AK' },
            { name: 'AMERICAN SAMOA', value: 'AS' },
            { name: 'ARIZONA', value: 'AZ' },
            { name: 'ARKANSAS', value: 'AR' },
            { name: 'CALIFORNIA', value: 'CA' },
            { name: 'COLORADO', value: 'CO' },
            { name: 'CONNECTICUT', value: 'CT' },
            { name: 'DELAWARE', value: 'DE' },
            { name: 'DISTRICT OF COLUMBIA', value: 'DC' },
            { name: 'FEDERATED STATES OF MICRONESIA', value: 'FM' },
            { name: 'FLORIDA', value: 'FL' },
            { name: 'GEORGIA', value: 'GA' },
            { name: 'GUAM', value: 'GU' },
            { name: 'HAWAII', value: 'HI' },
            { name: 'IDAHO', value: 'ID' },
            { name: 'ILLINOIS', value: 'IL' },
            { name: 'INDIANA', value: 'IN' },
            { name: 'IOWA', value: 'IA' },
            { name: 'KANSAS', value: 'KS' },
            { name: 'KENTUCKY', value: 'KY' },
            { name: 'LOUISIANA', value: 'LA' },
            { name: 'MAINE', value: 'ME' },
            { name: 'MARSHALL ISLANDS', value: 'MH' },
            { name: 'MARYLAND', value: 'MD' },
            { name: 'MASSACHUSETTS', value: 'MA' },
            { name: 'MICHIGAN', value: 'MI' },
            { name: 'MINNESOTA', value: 'MN' },
            { name: 'MISSISSIPPI', value: 'MS' },
            { name: 'MISSOURI', value: 'MO' },
            { name: 'MONTANA', value: 'MT' },
            { name: 'NEBRASKA', value: 'NE' },
            { name: 'NEVADA', value: 'NV' },
            { name: 'NEW HAMPSHIRE', value: 'NH' },
            { name: 'NEW JERSEY', value: 'NJ' },
            { name: 'NEW MEXICO', value: 'NM' },
            { name: 'NEW YORK', value: 'NY' },
            { name: 'NORTH CAROLINA', value: 'NC' },
            { name: 'NORTH DAKOTA', value: 'ND' },
            { name: 'NORTHERN MARIANA ISLANDS', value: 'MP' },
            { name: 'OHIO', value: 'OH' },
            { name: 'OKLAHOMA', value: 'OK' },
            { name: 'OREGON', value: 'OR' },
            { name: 'PALAU', value: 'PW' },
            { name: 'PENNSYLVANIA', value: 'PA' },
            { name: 'PUERTO RICO', value: 'PR' },
            { name: 'RHODE ISLAND', value: 'RI' },
            { name: 'SOUTH CAROLINA', value: 'SC' },
            { name: 'SOUTH DAKOTA', value: 'SD' },
            { name: 'TENNESSEE', value: 'TN' },
            { name: 'TEXAS', value: 'TX' },
            { name: 'UTAH', value: 'UT' },
            { name: 'VERMONT', value: 'VT' },
            { name: 'VIRGIN ISLANDS', value: 'VI' },
            { name: 'VIRGINIA', value: 'VA' },
            { name: 'WASHINGTON', value: 'WA' },
            { name: 'WEST VIRGINIA', value: 'WV' },
            { name: 'WISCONSIN', value: 'WI' },
            { name: 'WYOMING', value: 'WY' }
        ];
    }
    BillingInfoComponent.prototype.getToken = function () {
        var _this = this;
        // console.log(this.stripePayment);
        this.email = this.stripePayment['email'];
        window.Stripe.card.createToken({
            number: this.stripePayment['cardNumber'],
            exp_month: this.stripePayment['expiry_month'],
            exp_year: this.stripePayment['expiry_year'],
            cvc: this.stripePayment['cvc'],
        }, function (status, response) {
            if (status === 200) {
                _this.token = response.id;
            }
            else {
                _this.snackBar.open('Error: ' + response.error.message, 'Dismiss');
            }
        });
    };
    BillingInfoComponent.prototype.ngOnInit = function () { };
    BillingInfoComponent.prototype.next = function () {
        this.getToken();
        this.close.emit(null);
    };
    return BillingInfoComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BillingInfoComponent.prototype, "close", void 0);
BillingInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'billinginfo-comp',
        templateUrl: 'billinginfo.component.html',
        providers: [],
        styleUrls: ['onboarding.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        material_1.MdSnackBar])
], BillingInfoComponent);
exports.BillingInfoComponent = BillingInfoComponent;
//# sourceMappingURL=billinginfo.component.js.map