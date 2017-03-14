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
var WooComponent = (function () {
    function WooComponent(router) {
        this.router = router;
        this.connector = {};
    }
    WooComponent.prototype.ngOnInit = function () { };
    WooComponent.prototype.add = function () {
        console.log(this.connector);
    };
    return WooComponent;
}());
WooComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'woo-comp',
        templateUrl: 'woo.component.html',
        providers: [],
        styleUrls: ['marketplace.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WooComponent);
exports.WooComponent = WooComponent;
//# sourceMappingURL=woo.component.js.map