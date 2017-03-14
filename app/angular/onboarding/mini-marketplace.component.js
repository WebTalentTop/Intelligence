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
var MiniMarketplaceComponent = (function () {
    function MiniMarketplaceComponent(router) {
        this.router = router;
        this.close = new core_1.EventEmitter();
        this.added = new core_1.EventEmitter();
        this.active = -1;
        this.zohoDone = false;
        this.googleDone = false;
        this.connectors = [
            {
                "title": "Google Analytics",
                "image": "app/images/GA_200x200.png"
            },
            {
                "title": "Zoho",
                "image": "app/images/connector_zoho.png"
            }
        ];
    }
    MiniMarketplaceComponent.prototype.ngOnInit = function () { };
    MiniMarketplaceComponent.prototype.expand = function (number) {
        if (this.active == number) {
            this.active = -1;
        }
        else {
            this.active = number;
        }
    };
    MiniMarketplaceComponent.prototype.completed = function (str) {
        this.added.emit({ event: event, con: str });
        if (str == "zoho") {
            this.zohoDone = true;
        }
        else if (str == "google") {
            this.googleDone = true;
        }
    };
    MiniMarketplaceComponent.prototype.next = function () {
        this.close.emit(null);
    };
    return MiniMarketplaceComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MiniMarketplaceComponent.prototype, "close", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MiniMarketplaceComponent.prototype, "added", void 0);
MiniMarketplaceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mini-marketplace-comp',
        templateUrl: 'mini-marketplace.component.html',
        providers: [],
        styleUrls: ['mini-marketplace.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MiniMarketplaceComponent);
exports.MiniMarketplaceComponent = MiniMarketplaceComponent;
//# sourceMappingURL=mini-marketplace.component.js.map