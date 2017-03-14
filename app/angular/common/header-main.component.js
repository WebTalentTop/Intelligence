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
var token_service_1 = require("../login/token.service");
var login_service_1 = require("../login/login.service");
var HeaderMainComponent = (function () {
    function HeaderMainComponent(router, tokenService, loginService) {
        var _this = this;
        this.router = router;
        this.tokenService = tokenService;
        this.loginService = loginService;
        this.customer = {};
        this.onboard = false;
        this.tokenService.getToken()
            .subscribe(function (obj) {
            // console.log(obj);
            if (obj == null) {
                if (window.location.pathname == "/onboard") {
                    console.log('yay');
                }
                else {
                    var link = ['/login'];
                    _this.router.navigate(link);
                }
            }
        }, function (error) { return console.log(error); });
    }
    HeaderMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.location.pathname == "/onboard") {
            this.onboard = true;
        }
        else {
            this.onboard = false;
        }
        this.loginService.getUserInfo()
            .subscribe(function (obj) {
            // console.log(obj);
            _this.customer = obj;
        }, function (error) {
            console.log("ERROR");
            // console.log(error);
        });
    };
    HeaderMainComponent.prototype.logOut = function () {
        this.tokenService.logOut();
    };
    HeaderMainComponent.prototype.toggleNav = function () {
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
    return HeaderMainComponent;
}());
HeaderMainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'header-main-comp',
        templateUrl: 'header-main.component.html',
        providers: [token_service_1.TokenService, login_service_1.LoginService],
        styleUrls: ['header-main.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        token_service_1.TokenService,
        login_service_1.LoginService])
], HeaderMainComponent);
exports.HeaderMainComponent = HeaderMainComponent;
//# sourceMappingURL=header-main.component.js.map