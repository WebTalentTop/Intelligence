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
var Rx_1 = require("rxjs/Rx");
var AnimationComponent = (function () {
    function AnimationComponent(ngZone) {
        var _this = this;
        this.ngZone = ngZone;
        this.firstPic = 1;
        this.secondPic = 3;
        this.thirdPic = 15;
        this.forthPic = 12;
        this.fifthPic = 10;
        this.first = "";
        this.second = "";
        this.third = "";
        this.forth = "";
        this.fifth = "";
        this.mySet = new Set();
        this.images = [
            'app/images/business_intelligence_sherlock_data_source_access.png',
            'app/images/business_intelligence_sherlock_data_source_adwords.png',
            'app/images/business_intelligence_sherlock_data_source_aws.png',
            'app/images/business_intelligence_sherlock_data_source_bing.png',
            'app/images/business_intelligence_sherlock_data_source_criteo.png',
            'app/images/business_intelligence_sherlock_data_source_entrata.png',
            'app/images/business_intelligence_sherlock_data_source_excel.png',
            'app/images/business_intelligence_sherlock_data_source_facebook.png',
            'app/images/business_intelligence_sherlock_data_source_firebird.png',
            'app/images/business_intelligence_sherlock_data_source_googleanalytics.png',
            'app/images/business_intelligence_sherlock_data_source_hadoop.png',
            'app/images/business_intelligence_sherlock_data_source_kenshoo.png',
            'app/images/business_intelligence_sherlock_data_source_mailchimp.png',
            'app/images/business_intelligence_sherlock_data_source_marin.png',
            'app/images/business_intelligence_sherlock_data_source_mongo.png',
            'app/images/business_intelligence_sherlock_data_source_moz.png',
            'app/images/business_intelligence_sherlock_data_source_mysql.png',
            'app/images/business_intelligence_sherlock_data_source_oracle.png',
            'app/images/business_intelligence_sherlock_data_source_postgres.png',
            'app/images/business_intelligence_sherlock_data_source_quickbooks.png',
            'app/images/business_intelligence_sherlock_data_source_salesforce.png',
            'app/images/business_intelligence_sherlock_data_source_sparksql.png',
            'app/images/business_intelligence_sherlock_data_source_stripe.png',
            'app/images/business_intelligence_sherlock_data_source_teradata.png',
            'app/images/business_intelligence_sherlock_data_source_trello.png',
            'app/images/business_intelligence_sherlock_data_source_twitter.png',
            'app/images/business_intelligence_sherlock_data_source_xero.png'
        ];
        Rx_1.Observable.interval(0)
            .take(1).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            _this.initialDelay();
        });
        this.mySet.add(this.firstPic);
        this.mySet.add(this.secondPic);
        this.mySet.add(this.thirdPic);
        this.mySet.add(this.forthPic);
        this.mySet.add(this.fifthPic);
        this.first = this.images[this.firstPic];
        this.second = this.images[this.secondPic];
        this.third = this.images[this.thirdPic];
        this.forth = this.images[this.forthPic];
        this.fifth = this.images[this.fifthPic];
    }
    AnimationComponent.prototype.ngOnInit = function () { };
    AnimationComponent.prototype.initialDelay = function () {
        var _this = this;
        Rx_1.Observable.interval(3000)
            .take(Infinity).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            _this.startTransitions();
        });
    };
    AnimationComponent.prototype.startTransitions = function () {
        var _this = this;
        Rx_1.Observable.interval(600)
            .take(1).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            _this.callAtInterval();
        });
        Rx_1.Observable.interval(1800)
            .take(1).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            _this.callAtInterval2();
        });
        Rx_1.Observable.interval(2400)
            .take(1).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            _this.callAtInterval3();
        });
        Rx_1.Observable.interval(1200)
            .take(1).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            _this.callAtInterval4();
        });
        Rx_1.Observable.interval(0)
            .take(1).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            _this.callAtInterval5();
        });
    };
    AnimationComponent.prototype.getRand = function () {
        var rand = Math.floor((Math.random() * this.images.length));
        while (this.mySet.has(rand)) {
            rand = Math.floor((Math.random() * this.images.length));
        }
        return rand;
    };
    AnimationComponent.prototype.callAtInterval = function () {
        var last = this.firstPic;
        this.firstPic = this.getRand();
        this.mySet.delete(last);
        this.mySet.add(this.firstPic);
        this.first = this.images[this.firstPic];
    };
    AnimationComponent.prototype.callAtInterval2 = function () {
        var last = this.secondPic;
        this.secondPic = this.getRand();
        this.mySet.delete(last);
        this.mySet.add(this.secondPic);
        this.second = this.images[this.secondPic];
    };
    AnimationComponent.prototype.callAtInterval3 = function () {
        var last = this.thirdPic;
        this.thirdPic = this.getRand();
        this.mySet.delete(last);
        this.mySet.add(this.thirdPic);
        this.third = this.images[this.thirdPic];
    };
    AnimationComponent.prototype.callAtInterval4 = function () {
        var last = this.forthPic;
        this.forthPic = this.getRand();
        this.mySet.delete(last);
        this.mySet.add(this.forthPic);
        this.forth = this.images[this.forthPic];
    };
    AnimationComponent.prototype.callAtInterval5 = function () {
        var last = this.fifthPic;
        this.fifthPic = this.getRand();
        this.mySet.delete(last);
        this.mySet.add(this.fifthPic);
        this.fifth = this.images[this.fifthPic];
    };
    return AnimationComponent;
}());
AnimationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'animation',
        templateUrl: 'animation.component.html',
        styleUrls: ['animation.component.css'],
        providers: []
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], AnimationComponent);
exports.AnimationComponent = AnimationComponent;
//# sourceMappingURL=animation.component.js.map