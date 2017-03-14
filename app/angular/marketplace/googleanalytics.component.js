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
var GoogleAnalyticsComponent = (function () {
    function GoogleAnalyticsComponent(router) {
        this.router = router;
        this.done = new core_1.EventEmitter();
        this.connector = {};
    }
    GoogleAnalyticsComponent.prototype.ngOnInit = function () { };
    GoogleAnalyticsComponent.prototype.add = function () {
        console.log(this.connector);
        if (window.location.pathname == "/onboard") {
            this.done.emit(null);
        }
    };
    GoogleAnalyticsComponent.prototype.test = function () {
        this.done.emit(null);
    };
    return GoogleAnalyticsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GoogleAnalyticsComponent.prototype, "done", void 0);
GoogleAnalyticsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'googleanalytics-comp',
        templateUrl: 'googleanalytics.component.html',
        providers: [],
        styleUrls: ['marketplace.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], GoogleAnalyticsComponent);
exports.GoogleAnalyticsComponent = GoogleAnalyticsComponent;
//# sourceMappingURL=googleanalytics.component.js.map