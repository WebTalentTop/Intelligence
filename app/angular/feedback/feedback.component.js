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
var feedback_service_1 = require("../feedback/feedback.service");
var FeedbackComponent = (function () {
    function FeedbackComponent(router, tokenService, feedbackService) {
        this.router = router;
        this.tokenService = tokenService;
        this.feedbackService = feedbackService;
        this.feedback = {};
    }
    FeedbackComponent.prototype.ngOnInit = function () { };
    //email curtis
    FeedbackComponent.prototype.submitFeedback = function () {
        console.log(this.feedback);
        var message = {
            'MESSAGE_TEXT': this.feedback['body'],
            'MESSAGE_HTML': this.feedback['body'],
            'MESSAGE_SUBJECT': 'New Feedback From ',
            'TITLE': this.feedback['title'],
            'TO_ADDRESS': 'curtis@sherlockintelligence.com'
        };
        this.feedbackService.sendMessage(message)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) {
            console.log(error);
        });
    };
    return FeedbackComponent;
}());
FeedbackComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'feedback-comp',
        templateUrl: 'feedback.component.html',
        providers: [token_service_1.TokenService, feedback_service_1.FeedbackService],
        styleUrls: ['feedback.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        token_service_1.TokenService,
        feedback_service_1.FeedbackService])
], FeedbackComponent);
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map