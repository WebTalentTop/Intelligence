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
var login_service_1 = require("../login/login.service");
var onboarding_service_1 = require("../onboarding/onboarding.service");
var token_service_1 = require("../login/token.service");
var SignUpComponent = (function () {
    function SignUpComponent(onboardingService, loginService, router) {
        this.onboardingService = onboardingService;
        this.loginService = loginService;
        this.router = router;
        this.close = new core_1.EventEmitter();
        this.user = {};
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent.prototype.signup = function () {
        var _this = this;
        this.onboardingService.signUp(this.user)
            .subscribe(function (obj) {
            _this.loginService.login(_this.user)
                .subscribe(function (lobj) {
            }, function (lerror) {
                console.log(lerror);
            });
        }, function (error) {
            console.log(error);
        });
    };
    SignUpComponent.prototype.next = function () {
        this.close.emit(null);
    };
    SignUpComponent.prototype.getUserInfo = function () {
        return this.user;
    };
    SignUpComponent.prototype.validateEmail = function (email) {
        if (!(/^.+@.+\..+$/.test(email))) {
            this.user['emailErrorB'] = true;
            this.user['emailError'] = 'Please enter a valid email address to continue';
        }
    };
    SignUpComponent.prototype.validatePassword = function (password) {
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password))) {
            this.user['passwordErrorB'] = true;
            this.user['passwordError'] = 'Password must be 8 characters long and use at least 1 uppercase character and 1 number';
        }
        if (this.user['confirmpassword'] && this.user['confirmpassword'].length > 0) {
            this.validateConfirm(this.user['confirmpassword'], this.user['password']);
        }
    };
    SignUpComponent.prototype.validateConfirm = function (confirm, password) {
        if (confirm != password) {
            this.user['confirmErrorB'] = true;
            this.user['confirmError'] = 'Confirm your password by typing the same password as above';
        }
    };
    SignUpComponent.prototype.validatePhone = function (phone) {
        if (!(/^\d+$/.test(phone))) {
            this.user['phoneErrorB'] = true;
            this.user['phoneError'] = 'Your phone should be a valid phone number without formatting, like 8018675309';
        }
    };
    return SignUpComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SignUpComponent.prototype, "close", void 0);
SignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'signup-comp',
        templateUrl: 'signup.component.html',
        providers: [onboarding_service_1.OnboardingService, token_service_1.TokenService, login_service_1.LoginService],
        styleUrls: ['onboarding.component.css']
    }),
    __metadata("design:paramtypes", [onboarding_service_1.OnboardingService,
        login_service_1.LoginService,
        router_1.Router])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map