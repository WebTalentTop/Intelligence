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
var CardSeriesComponent = (function () {
    function CardSeriesComponent(zone) {
        this.zone = zone;
        this.innerPadding = 2.5;
        this.emptyColor = 'rgba(0, 0, 0, 0)';
        this.select = new core_1.EventEmitter();
    }
    CardSeriesComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    CardSeriesComponent.prototype.update = function () {
        var _this = this;
        this.zone.run(function () {
            if (_this.data.length > 2) {
                var sortedLengths = _this.data.map(function (d) { return ('' + d.data.value).length; }).sort(function (a, b) { return b - a; });
                var idx = Math.ceil(_this.data.length / 2);
                _this.medianSize = sortedLengths[idx];
            }
            var cards = _this.getCards();
            _this.cards = cards.filter(function (d) { return d.data.value !== null; });
            _this.emptySlots = cards.filter(function (d) { return d.data.value === null; });
        });
    };
    CardSeriesComponent.prototype.getCards = function () {
        var _this = this;
        var yPadding = typeof this.innerPadding === 'number' ?
            this.innerPadding :
            this.innerPadding[0] + this.innerPadding[2];
        var xPadding = typeof this.innerPadding === 'number' ?
            this.innerPadding :
            this.innerPadding[1] + this.innerPadding[3];
        return this.data
            .map(function (d, index) {
            var label = d.data.name;
            if (label && label.constructor.name === 'Date') {
                label = label.toLocaleDateString();
            }
            else {
                label = label ? label.toLocaleString() : label;
            }
            d.data.name = label;
            var value = d.data.value;
            var labelColor = label ? _this.colors.getColor(label) : _this.emptyColor;
            return {
                x: d.x,
                y: d.y,
                width: d.width - xPadding,
                height: d.height - yPadding,
                color: _this.cardColor || labelColor,
                bandColor: _this.bandColor || labelColor,
                label: label,
                data: d.data,
                tooltipText: label + ": " + value
            };
        });
    };
    CardSeriesComponent.prototype.trackBy = function (index, card) {
        return card.label;
    };
    CardSeriesComponent.prototype.onClick = function (data) {
        this.select.emit(data);
    };
    return CardSeriesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CardSeriesComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CardSeriesComponent.prototype, "slots", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardSeriesComponent.prototype, "dims", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardSeriesComponent.prototype, "colors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardSeriesComponent.prototype, "innerPadding", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardSeriesComponent.prototype, "cardColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardSeriesComponent.prototype, "bandColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardSeriesComponent.prototype, "emptyColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CardSeriesComponent.prototype, "select", void 0);
CardSeriesComponent = __decorate([
    core_1.Component({
        selector: 'g[ngx-charts-card-series]',
        template: "\n    <svg:rect\n      *ngFor=\"let c of emptySlots; trackBy:trackBy\"\n      class=\"card-empty\"\n      [attr.x]=\"c.x\"\n      [attr.y]=\"c.y\"\n      [style.fill]=\"emptyColor\"\n      [attr.width]=\"c.width\"\n      [attr.height]=\"c.height\"\n      rx=\"3\"\n      ry=\"3\"\n    />\n    <svg:g ngx-charts-card *ngFor=\"let c of cards; trackBy:trackBy\"\n      [x]=\"c.x\"\n      [y]=\"c.y\"\n      [width]=\"c.width\"\n      [height]=\"c.height\"\n      [color]=\"c.color\"\n      [bandColor]=\"c.bandColor\"\n      [data]=\"c.data\"\n      [medianSize]=\"medianSize\"\n      (select)=\"onClick($event)\"\n    />\n  ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], CardSeriesComponent);
exports.CardSeriesComponent = CardSeriesComponent;
//# sourceMappingURL=card-series.component.js.map