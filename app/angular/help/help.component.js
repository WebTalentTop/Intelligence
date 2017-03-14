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
var help_service_1 = require("../help/help.service");
var HelpComponent = (function () {
    function HelpComponent(router, tokenService, helpService) {
        this.router = router;
        this.tokenService = tokenService;
        this.helpService = helpService;
        this.help = {};
    }
    HelpComponent.prototype.ngOnInit = function () { };
    HelpComponent.prototype.submitHelp = function () {
        console.log(this.help);
        var message = {
            'MESSAGE_TEXT': this.help['body'],
            'MESSAGE_HTML': this.help['body'],
            'MESSAGE_SUBJECT': 'New Support Request From ',
            'SECTION': this.help['section'],
            'TO_ADDRESS': 'curtis@sherlockintelligence.com'
        };
        this.helpService.sendMessage(message)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) {
            console.log(error);
        });
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'help-comp',
        templateUrl: 'help.component.html',
        providers: [token_service_1.TokenService, help_service_1.HelpService],
        styleUrls: ['help.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        token_service_1.TokenService,
        help_service_1.HelpService])
], HelpComponent);
exports.HelpComponent = HelpComponent;
//# sourceMappingURL=help.component.js.map