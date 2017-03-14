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
var data_service_1 = require("../data/data.service");
var token_service_1 = require("../login/token.service");
var shuffle = require("shufflejs");
var DataComponent = (function () {
    function DataComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.crumb = "";
        this.filter = "";
        this.iframeUrl = "";
        this.iframeActive = false;
        this.shuffle = true;
        this.odd = false;
        this.search = "collapsed";
        this.dataService.getViews()
            .subscribe(function (obj) {
            _this.views = obj['VIEWS'];
            if (_this.views.length % 2 == 1) {
                _this.odd = true;
            }
            for (var i = 0; i < _this.views.length; i++) {
                _this.views[i].show = true;
            }
            _this.route.params.forEach(function (params) {
                if (params['view'] !== undefined) {
                    _this.iframeActive = true;
                    _this.iframeUrl = _this.views[params['view']].invokeurl;
                    _this.crumb = _this.views[params['view']].view_name;
                }
                else {
                    _this.iframeActive = false;
                    _this.crumb = "";
                    if (_this.shuffle) {
                        setTimeout(function () {
                            var myShuffle = new shuffle(document.querySelector('.my-grid-with-images'), {
                                itemSelector: '.js-item',
                                sizer: '.my-sizer-element',
                            });
                        }, 100);
                    }
                }
            });
        }, function (error) {
            console.log("ERROR");
            // console.log(error);
        });
    }
    DataComponent.prototype.ngOnInit = function () {
        // console.log($(window).width());
        if ($(window).width() <= 600) {
            this.shuffle = false;
        }
    };
    DataComponent.prototype.ngAfterViewInit = function () {
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
    DataComponent.prototype.toggleSearch = function () {
        var _this = this;
        if (this.search == "collapsed") {
            this.search = "extended";
        }
        else {
            this.search = "collapsed";
            setTimeout(function () {
                _this.filter = "";
                _this.runFilter();
            }, 300);
        }
    };
    //open specific view
    DataComponent.prototype.open = function (number, view) {
        this.iframeUrl = view.invokeurl;
        this.iframeActive = true;
        var link = ['/data/' + number];
        this.router.navigate(link);
    };
    //filter views on front end
    DataComponent.prototype.runFilter = function () {
        var count = 0;
        for (var i = 0; i < this.views.length; i++) {
            var lower = this.views[i].view_name.toLowerCase();
            if (lower.includes(this.filter.toLowerCase())) {
                this.views[i]['show'] = true;
                count++;
            }
            else {
                this.views[i]['show'] = false;
            }
        }
        if (count % 2 == 1) {
            this.odd = true;
        }
        else {
            this.odd = false;
        }
    };
    return DataComponent;
}());
DataComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'data-comp',
        templateUrl: 'data.component.html',
        providers: [data_service_1.DataService, token_service_1.TokenService],
        styleUrls: ['data.component.css'],
        animations: [
            core_1.trigger('searchExtended', [
                core_1.state('extended', core_1.style({
                    width: '169px',
                    opacity: '1'
                })),
                core_1.state('collapsed', core_1.style({
                    width: '0px',
                    opacity: '0'
                })),
                core_1.transition('extended => collapsed', core_1.animate('300ms ease-in')),
                core_1.transition('collapsed => extended', core_1.animate('300ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService,
        router_1.Router,
        router_1.ActivatedRoute])
], DataComponent);
exports.DataComponent = DataComponent;
//# sourceMappingURL=data.component.js.map