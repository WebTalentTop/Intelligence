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
var AccountComponent = (function () {
    function AccountComponent(router, tokenService, loginService) {
        var _this = this;
        this.router = router;
        this.tokenService = tokenService;
        this.loginService = loginService;
        this.active = -1;
        this.detailsTitle = "Account Details";
        this.passwordTitle = "Change Password";
        this.stateExpression = "collapsed";
        // stateExpression: string;
        this.change = {};
        this.customer = {};
        this.loginService.getUserInfo()
            .subscribe(function (obj) {
            console.log(obj);
            _this.customer = obj;
        }, function (error) { return console.log(error); });
    }
    AccountComponent.prototype.ngOnInit = function () { };
    AccountComponent.prototype.toggled = function (opened, number) {
        this.stateExpression = (this.stateExpression === 'collapsed' ? 'expanded' : 'collapsed');
        if (this.active == number) {
            this.active = -1;
        }
        else {
            this.active = number;
        }
    };
    AccountComponent.prototype.saveInfo = function () {
        var _this = this;
        console.log(this.customer);
        this.loginService.changeAccountInformation(this.customer)
            .subscribe(function (obj) {
            console.log(obj);
            var link = ['/data'];
            _this.router.navigate(link);
        }, function (error) { return console.log(error); });
    };
    AccountComponent.prototype.changePassword = function () {
        var _this = this;
        console.log(this.change);
        this.loginService.resetPassword(this.change['password'])
            .subscribe(function (obj) {
            console.log(obj);
            var link = ['/data'];
            _this.router.navigate(link);
        }, function (error) { return console.log(error); });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'account-comp',
        templateUrl: 'account.component.html',
        providers: [token_service_1.TokenService, login_service_1.LoginService],
        styleUrls: ['account.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        token_service_1.TokenService,
        login_service_1.LoginService])
], AccountComponent);
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map