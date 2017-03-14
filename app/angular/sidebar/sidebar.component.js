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
var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.active = "";
        this.onboard_disable = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.active = this.router.url;
        if (window.location.pathname == "/onboard") {
            this.onboard_disable = false;
        }
        else {
            this.onboard_disable = true;
        }
    };
    /* Set the width of the side navigation to 0 */
    SidebarComponent.prototype.toggleNav = function () {
        var mySidenavClasses = document.getElementById("mySidenav").classList;
        var mainClasses = document.getElementById("main").classList;
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
        if (mySidenavClasses.contains("open-sidenav")) {
            mySidenavClasses.remove("open-sidenav");
            mainClasses.remove("open-main");
        }
        else {
            mySidenavClasses.add("open-sidenav");
            mainClasses.add("open-main");
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sidebar-comp',
        templateUrl: 'sidebar.component.html',
        providers: [],
        styleUrls: ['sidebar.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map