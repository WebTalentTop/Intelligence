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
var MarketplaceComponent = (function () {
    function MarketplaceComponent(router) {
        this.router = router;
        this.active = -1;
        this.connectors = [
            {
                "title": "Vision",
                "image": "app/images/Vision_200x200.png"
            },
            {
                "title": "Woo Commerce",
                "image": "app/images/connector_woo.png"
            },
            {
                "title": "Dentrix",
                "image": "app/images/connector_dentrix.png"
            },
            {
                "title": "Google Analytics",
                "image": "app/images/GA_200x200.png"
            },
            {
                "title": "Quickbooks",
                "image": "app/images/connector_quickbooks.png"
            },
            {
                "title": "Zoho",
                "image": "app/images/connector_zoho.png"
            }
        ];
    }
    MarketplaceComponent.prototype.ngOnInit = function () {
        // setTimeout(function(){
        // 	var myShuffle = new shuffle(document.querySelector('.my-grid-with-images'), {
        // 		itemSelector: '.js-item',
        // 		sizer: '.my-sizer-element',
        // 	});
        // }, 100);
    };
    MarketplaceComponent.prototype.expand = function (number) {
        if (this.active == number) {
            this.active = -1;
        }
        else {
            this.active = number;
        }
        // setTimeout(function(){
        // 	var myShuffle = new shuffle(document.querySelector('.my-grid-with-images'), {
        // 		itemSelector: '.js-item',
        // 		sizer: '.my-sizer-element',
        // 	});
        // }, 100);
    };
    return MarketplaceComponent;
}());
MarketplaceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'marketplace-comp',
        templateUrl: 'marketplace.component.html',
        providers: [],
        styleUrls: ['marketplace.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MarketplaceComponent);
exports.MarketplaceComponent = MarketplaceComponent;
//# sourceMappingURL=marketplace.component.js.map