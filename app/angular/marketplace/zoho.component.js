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
var marketplace_service_1 = require("../marketplace/marketplace.service");
var token_service_1 = require("../login/token.service");
var ZohoComponent = (function () {
    function ZohoComponent(router, marketplaceService) {
        this.router = router;
        this.marketplaceService = marketplaceService;
        this.done = new core_1.EventEmitter();
        this.connector = {
            "Status": "NEW"
        };
    }
    ZohoComponent.prototype.ngOnInit = function () { };
    ZohoComponent.prototype.add = function () {
        var _this = this;
        console.log(this.connector);
        this.marketplaceService.zoho(this.connector)
            .subscribe(function (obj) {
            // console.log(obj);
            if (window.location.pathname == "/onboard") {
                _this.done.emit(null);
            }
        }, function (error) {
            console.log(error);
        });
        var link = ['/connectors'];
        this.router.navigate(link);
    };
    ZohoComponent.prototype.test = function () {
        this.done.emit(null);
    };
    return ZohoComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ZohoComponent.prototype, "done", void 0);
ZohoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'zoho-comp',
        templateUrl: 'zoho.component.html',
        providers: [marketplace_service_1.MarketplaceService, token_service_1.TokenService],
        styleUrls: ['marketplace.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        marketplace_service_1.MarketplaceService])
], ZohoComponent);
exports.ZohoComponent = ZohoComponent;
//# sourceMappingURL=zoho.component.js.map