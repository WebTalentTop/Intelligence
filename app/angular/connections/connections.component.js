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
var connections_service_1 = require("../connections/connections.service");
var token_service_1 = require("../login/token.service");
var shuffle = require("shufflejs");
var ConnectionsComponent = (function () {
    function ConnectionsComponent(router, connectionService) {
        var _this = this;
        this.router = router;
        this.connectionService = connectionService;
        this.shuffle = true;
        this.odd = false;
        this.connectionService.getConnections()
            .subscribe(function (obj) {
            _this.connections = obj['ROWS'];
            if (_this.connections.length % 2 == 1) {
                _this.odd = true;
            }
            // console.log(this.connections);
            if (_this.shuffle) {
                setTimeout(function () {
                    var myShuffle = new shuffle(document.querySelector('.my-grid-with-images'), {
                        itemSelector: '.js-item',
                        sizer: '.my-sizer-element',
                    });
                }, 100);
            }
        }, function (error) {
            console.log("ERROR");
        });
    }
    ConnectionsComponent.prototype.ngOnInit = function () {
        if ($(window).width() <= 600) {
            this.shuffle = false;
        }
    };
    ConnectionsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(window).resize(function () {
            // console.log($(window).width());
            if ($(window).width() <= 600) {
                if (_this.shuffle != false) {
                    _this.shuffle = false;
                    location.reload();
                }
            }
            else {
                if (_this.shuffle != true) {
                    _this.shuffle = true;
                    location.reload();
                }
            }
        });
    };
    return ConnectionsComponent;
}());
ConnectionsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'connections-comp',
        templateUrl: 'connections.component.html',
        providers: [connections_service_1.ConnectionService, token_service_1.TokenService],
        styleUrls: ['connections.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        connections_service_1.ConnectionService])
], ConnectionsComponent);
exports.ConnectionsComponent = ConnectionsComponent;
//# sourceMappingURL=connections.component.js.map