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
var token_service_1 = require("../login/token.service");
var toast_service_1 = require("../toast/toast.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ToastComponent = (function () {
    function ToastComponent(tokenService, toastService, toastr) {
        this.tokenService = tokenService;
        this.toastService = toastService;
        this.toastr = toastr;
    }
    ToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.toastService.getToasts(window.location.pathname)
            .subscribe(function (obj) {
            _this.toasts = obj['ROWS'];
            // console.log(obj);
            for (var i = 0; i < _this.toasts.length; i++) {
                var alert_id = _this.toasts[i][0];
                _this.toastr[_this.toasts[i][1]](_this.toasts[i][2] + '<span class="toasttoasttoast" id="TOAST-' + alert_id + '" ></span>', _this.toasts[i][3], { enableHTML: true, dismiss: 'click', toastLife: 0 });
                //jquery toastbar.height += toastheight
            }
            var jquerystring = '#TOAST-' + alert_id;
            $('.toast').on("click", (function () {
                // console.log('clicked!');
                // console.log(this);
                var z = $(this).find('.toasttoasttoast').first()[0].id;
                // console.log(z);
                var toastid = z.split('-')[1];
                //find the span witht he TOAST-id
                that.seen(toastid);
                //toastbar.height -= toastheight
                that.makeToast();
            }));
        }, function (error) {
            console.log("ERROR");
            // console.log(error);
        });
    };
    ToastComponent.prototype.seen = function (id) {
        this.toastService.setToastSeen(id)
            .subscribe(function (obj) {
            // console.log(obj);
        }, function (error) {
            console.log(error);
        });
    };
    //this is an example. it isnt initiaed, but here is how you would post a toast
    //also, the user must be logged in to get a toast. we can support arbitrary site-wide toasts in the future pretty easily though should we so desire
    ToastComponent.prototype.makeToast = function () {
        var toast = {
            'URL': '/data',
            'MESSAGE': 'hello here is the message',
            'TITLE': 'hi',
            'ACTION': 'success'
        };
        //action can be success|info|warning|error
        this.toastService.addToast(toast)
            .subscribe(function (obj) {
            // console.log(obj);
        }, function (error) {
            console.log(error);
        });
    };
    return ToastComponent;
}());
ToastComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'toast-comp',
        templateUrl: 'toast.component.html',
        providers: [token_service_1.TokenService, toast_service_1.ToastService],
        styleUrls: ['toast.component.css']
    }),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        toast_service_1.ToastService,
        ng2_toastr_1.ToastsManager])
], ToastComponent);
exports.ToastComponent = ToastComponent;
//# sourceMappingURL=toast.component.js.map