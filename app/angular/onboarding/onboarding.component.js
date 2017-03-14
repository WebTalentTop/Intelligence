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
var onboarding_service_1 = require("../onboarding/onboarding.service");
var company_component_1 = require("./company.component");
var signup_component_1 = require("./signup.component");
var OnboardingComponent = (function () {
    function OnboardingComponent(router, tokenService, loginService, onboardingService) {
        this.router = router;
        this.tokenService = tokenService;
        this.loginService = loginService;
        this.onboardingService = onboardingService;
        this.signedUp = false;
        this.companyCreated = false;
        this.joinCodeError = false;
        this.company_id = "";
        this.onboard = false;
        this.plan = "123456789";
        this.jCompany = {};
        this.connectors = [
            { name: 'Google Analytics', img: 'app/images/GA_200x200.png' },
            { name: 'Zoho', img: 'app/images/Zoho_200x200.png' },
            { name: 'Dentrix', img: 'app/images/Dentrix_200x200.png' },
        ];
        this.connectorsAdded = [];
        this.active = 0;
        this.planSelected = false;
        this.sections = [
            {
                "state": "active",
                "visited": "current"
            },
            {
                "state": "inactive",
                "visited": "false"
            },
            {
                "state": "inactive",
                "visited": "false"
            },
            {
                "state": "inactive",
                "visited": "false"
            },
            {
                "state": "inactive",
                "visited": "false"
            }
        ];
        this.customSections = [
            {
                "state": "active",
                "visited": "current"
            },
            {
                "state": "inactive",
                "visited": "false"
            },
            {
                "state": "inactive",
                "visited": "false"
            }
        ];
        this.joinSections = [
            {
                "state": "active",
                "visited": "current"
            },
            {
                "state": "inactive",
                "visited": "false"
            }
        ];
        localStorage.removeItem("token");
    }
    OnboardingComponent.prototype.toggle = function () {
        this.active = 0;
    };
    OnboardingComponent.prototype.open = function (num) {
        this.active = num;
    };
    OnboardingComponent.prototype.ngOnInit = function () { };
    OnboardingComponent.prototype.confirm = function (stripe_token) {
        var _this = this;
        /*
                signs up and logs in
                    creates company
                        signs up zoho if filled out
                        signs up ga if filled out
                        submit billing info(stripe)
        */
        var userInfo = this.signupComponent.getUserInfo();
        var companyInfo = this.companyComponent.getCompanyInfo();
        if (this.checkUserInfo(userInfo)) {
            if (this.signedUp) {
                if (this.companyCreated) {
                    this.signUpZoho();
                    this.signUpGoogleAnalytics();
                    this.submitBilling(stripe_token);
                }
                else {
                    this.onboardingService.createCompany(companyInfo)
                        .subscribe(function (obj) {
                        _this.companyCreated = true;
                        _this.company_id = obj["COMPANY_ID"];
                        _this.signUpZoho();
                        _this.signUpGoogleAnalytics();
                        _this.submitBilling(stripe_token);
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                this.onboardingService.signUp(userInfo)
                    .subscribe(function (obj) {
                    _this.loginService.login(userInfo)
                        .subscribe(function (lobj) {
                        _this.signedUp = true;
                        _this.onboardingService.createCompany(companyInfo)
                            .subscribe(function (obj) {
                            _this.companyCreated = true;
                            _this.company_id = obj["COMPANY_ID"];
                            _this.signUpZoho();
                            _this.signUpGoogleAnalytics();
                            _this.submitBilling(stripe_token);
                        }, function (error) {
                            console.log(error);
                        });
                    }, function (lerror) {
                        console.log(lerror);
                    });
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            this.toggleState(0);
        }
    };
    OnboardingComponent.prototype.signUpZoho = function () {
    };
    OnboardingComponent.prototype.signUpGoogleAnalytics = function () {
    };
    OnboardingComponent.prototype.submitBilling = function (stripe_token) {
        var _this = this;
        this.onboardingService.createSubscription(this.company_id, this.plan, stripe_token)
            .subscribe(function (obj) {
            // console.log(obj);
            var link = ['/data'];
            _this.router.navigate(link);
        }, function (error) {
            console.log(error);
        });
    };
    OnboardingComponent.prototype.joinCompany = function () {
        var _this = this;
        // console.log(this.jCompany['addcode']);
        var code = this.jCompany['addcode'];
        var userInfo = this.signupComponent.getUserInfo();
        if (this.checkUserInfo(userInfo)) {
            if (this.signedUp) {
                this.onboardingService.joinCompany(code)
                    .subscribe(function (obj) {
                    var link = ['/data'];
                    _this.router.navigate(link);
                }, function (error) {
                    _this.joinCodeError = true;
                    console.log(error);
                });
            }
            else {
                this.onboardingService.signUp(userInfo)
                    .subscribe(function (obj) {
                    _this.loginService.login(userInfo)
                        .subscribe(function (lobj) {
                        _this.signedUp = true;
                        _this.onboardingService.joinCompany(code)
                            .subscribe(function (obj) {
                            var link = ['/data'];
                            _this.router.navigate(link);
                        }, function (error) {
                            _this.joinCodeError = true;
                            console.log(error);
                        });
                    }, function (lerror) {
                        console.log(lerror);
                    });
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            this.toggleJoinState(0);
        }
    };
    OnboardingComponent.prototype.toggleState = function (num) {
        for (var i = 0; i < this.sections.length; i++) {
            if (i < num) {
                this.sections[i].state = "inactive";
                this.sections[i].visited = "true";
            }
            else if (i == num) {
                this.sections[i].state = "active";
                this.sections[i].visited = "current";
            }
            else {
                this.sections[i].state = "inactive";
                this.sections[i].visited = "false";
            }
        }
    };
    OnboardingComponent.prototype.toggleCustomState = function (num) {
        var _this = this;
        for (var i = 0; i < this.customSections.length; i++) {
            if (i < num) {
                this.customSections[i].state = "inactive";
                this.customSections[i].visited = "true";
            }
            else if (i == num) {
                this.customSections[i].state = "active";
                this.customSections[i].visited = "current";
            }
            else {
                this.customSections[i].state = "inactive";
                this.customSections[i].visited = "false";
            }
        }
        if (num == 2) {
            var companyInfo = this.companyComponent.getCompanyInfo();
            var userInfo = this.signupComponent.getUserInfo();
            if (this.checkUserInfo(userInfo)) {
                if (this.signedUp) {
                    this.onboardingService.createCompany(companyInfo)
                        .subscribe(function (obj) {
                        // console.log("sign up, login, and create all worked");
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    this.onboardingService.signUp(userInfo)
                        .subscribe(function (obj) {
                        _this.loginService.login(userInfo)
                            .subscribe(function (lobj) {
                            _this.signedUp = true;
                            _this.onboardingService.createCompany(companyInfo)
                                .subscribe(function (obj) {
                                // console.log("sign up, login, and create all worked");
                            }, function (error) {
                                console.log(error);
                            });
                        }, function (lerror) {
                            console.log(lerror);
                        });
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                this.toggleCustomState(0);
            }
        }
    };
    OnboardingComponent.prototype.toggleJoinState = function (num) {
        for (var i = 0; i < this.joinSections.length; i++) {
            if (i < num) {
                this.joinSections[i].state = "inactive";
                this.joinSections[i].visited = "true";
            }
            else if (i == num) {
                this.joinSections[i].state = "active";
                this.joinSections[i].visited = "current";
            }
            else {
                this.joinSections[i].state = "inactive";
                this.joinSections[i].visited = "false";
            }
        }
    };
    OnboardingComponent.prototype.checkUserInfo = function (userInfo) {
        if (!userInfo.firstname || !userInfo.lastname || !userInfo.username || !userInfo.email || !userInfo.password || !userInfo.telephone || !userInfo.agreetoterms || userInfo['emailErrorB'] || userInfo['passwordErrorB'] || userInfo['confirmErrorB'] || userInfo['phoneErrorB']) {
            return false;
        }
        return true;
    };
    OnboardingComponent.prototype.connectorAdded = function ($event) {
        if ($event.con == "zoho") {
            var obj = {
                "name": "Zoho",
                "image": "app/images/Zoho_200x200.png"
            };
            if (!this.checkIfAdded(obj.name)) {
                this.connectorsAdded.push(obj);
            }
        }
        else if ($event.con == "dentrix") {
            var obj = {
                "name": "Dentrix",
                "image": "app/images/Dentrix_200x200.png"
            };
            if (!this.checkIfAdded(obj.name)) {
                this.connectorsAdded.push(obj);
            }
        }
        else if ($event.con == "google") {
            var obj = {
                "name": "Google Analytics",
                "image": "app/images/GA_200x200.png"
            };
            if (!this.checkIfAdded(obj.name)) {
                this.connectorsAdded.push(obj);
            }
        }
    };
    OnboardingComponent.prototype.checkIfAdded = function (name) {
        var found = false;
        for (var i = 0; i < this.connectorsAdded.length; i++) {
            if (this.connectorsAdded[i].name == name) {
                found = true;
                break;
            }
        }
        return found;
    };
    return OnboardingComponent;
}());
__decorate([
    core_1.ViewChild(company_component_1.CompanyComponent),
    __metadata("design:type", company_component_1.CompanyComponent)
], OnboardingComponent.prototype, "companyComponent", void 0);
__decorate([
    core_1.ViewChild(signup_component_1.SignUpComponent),
    __metadata("design:type", signup_component_1.SignUpComponent)
], OnboardingComponent.prototype, "signupComponent", void 0);
OnboardingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'onboarding-comp',
        templateUrl: 'onboarding.component.html',
        providers: [token_service_1.TokenService, login_service_1.LoginService, onboarding_service_1.OnboardingService],
        styleUrls: ['onboarding.component.css'],
        animations: [
            core_1.trigger('stepperState', [
                core_1.state('inactive', core_1.style({
                    height: '0px',
                    overflow: 'hidden'
                })),
                core_1.state('active', core_1.style({
                    height: '*'
                })),
                core_1.transition('inactive => active', core_1.animate('500ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('500ms ease-out'))
            ]),
            core_1.trigger('stepperVisited', [
                core_1.state('current', core_1.style({
                    // background: 'blue',
                    background: '#528fA6'
                })),
                core_1.state('true', core_1.style({
                    // background: 'blue',
                    background: '#528fA6'
                })),
                core_1.state('false', core_1.style({
                    // background: 'red',
                    background: '#dddddd'
                })),
                core_1.transition('false => current', core_1.animate('300ms ease-in')),
                core_1.transition('current => false', core_1.animate('300ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        token_service_1.TokenService,
        login_service_1.LoginService,
        onboarding_service_1.OnboardingService])
], OnboardingComponent);
exports.OnboardingComponent = OnboardingComponent;
//# sourceMappingURL=onboarding.component.js.map