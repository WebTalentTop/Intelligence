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
var label_helper_1 = require("../common/label.helper");
var BubbleSeriesComponent = (function () {
    function BubbleSeriesComponent() {
        this.tooltipDisabled = false;
        this.select = new core_1.EventEmitter();
        this.activate = new core_1.EventEmitter();
        this.deactivate = new core_1.EventEmitter();
    }
    BubbleSeriesComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    BubbleSeriesComponent.prototype.update = function () {
        this.circles = this.getCircles();
    };
    BubbleSeriesComponent.prototype.getCircles = function () {
        var _this = this;
        var seriesName = this.data.name;
        return this.data.series.map(function (d, i) {
            if (typeof d.y !== 'undefined' && typeof d.x !== 'undefined') {
                var y = d.y;
                var x = d.x;
                var r = d.r;
                var radius = _this.rScale(r || 1);
                var tooltipLabel = label_helper_1.formatLabel(d.name);
                var cx = (_this.xScaleType === 'linear') ? _this.xScale(Number(x)) : _this.xScale(x);
                var cy = (_this.yScaleType === 'linear') ? _this.yScale(Number(y)) : _this.yScale(y);
                var color = (_this.colors.scaleType === 'linear') ?
                    _this.colors.getColor(r) :
                    _this.colors.getColor(seriesName);
                var isActive = !_this.activeEntries.length ? true : _this.isActive({ name: seriesName });
                var opacity = isActive ? 1 : 0.3;
                return {
                    x: x,
                    y: y,
                    r: r,
                    classNames: ["circle-data-" + i],
                    value: y,
                    label: x,
                    cx: cx,
                    cy: cy,
                    radius: radius,
                    tooltipLabel: tooltipLabel,
                    color: color,
                    opacity: opacity,
                    seriesName: seriesName,
                    isActive: isActive
                };
            }
        }).filter(function (circle) { return circle !== undefined; });
    };
    BubbleSeriesComponent.prototype.getTooltipText = function (circle) {
        var hasRadius = typeof circle.r !== 'undefined';
        var radiusValue = hasRadius ? circle.r.toLocaleString() : '';
        var xAxisLabel = this.xAxisLabel && this.xAxisLabel !== '' ? this.xAxisLabel + ":" : '';
        var yAxisLabel = this.yAxisLabel && this.yAxisLabel !== '' ? this.yAxisLabel + ":" : '';
        return "\n      <span class=\"tooltip-label\">\n        " + circle.seriesName + " \u2022 " + circle.tooltipLabel + "\n      </span>\n      <span class=\"tooltip-label\">\n        <label>" + xAxisLabel + "</label> " + circle.x.toLocaleString() + "<br />\n        <label>" + yAxisLabel + "</label> " + circle.y.toLocaleString() + "\n      </span>\n      <span class=\"tooltip-val\">\n        " + radiusValue + "\n      </span>\n    ";
    };
    BubbleSeriesComponent.prototype.onClick = function (value, label) {
        this.select.emit({
            name: label,
            value: value
        });
    };
    BubbleSeriesComponent.prototype.isActive = function (entry) {
        if (!this.activeEntries)
            return false;
        var item = this.activeEntries.find(function (d) {
            return entry.name === d.name;
        });
        return item !== undefined;
    };
    BubbleSeriesComponent.prototype.isVisible = function (circle) {
        if (this.activeEntries.length > 0) {
            return this.isActive({ name: circle.seriesName });
        }
        return circle.opacity !== 0;
    };
    BubbleSeriesComponent.prototype.activateCircle = function (circle) {
        circle.barVisible = true;
        this.activate.emit({ name: this.data.name });
    };
    BubbleSeriesComponent.prototype.deactivateCircle = function (circle) {
        circle.barVisible = false;
        this.deactivate.emit({ name: this.data.name });
    };
    return BubbleSeriesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "xScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "yScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "rScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "xScaleType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "yScaleType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "colors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "visibleValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BubbleSeriesComponent.prototype, "activeEntries", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BubbleSeriesComponent.prototype, "xAxisLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BubbleSeriesComponent.prototype, "yAxisLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BubbleSeriesComponent.prototype, "tooltipDisabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "activate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BubbleSeriesComponent.prototype, "deactivate", void 0);
BubbleSeriesComponent = __decorate([
    core_1.Component({
        selector: 'g[ngx-charts-bubble-series]',
        template: "\n    <svg:g *ngFor=\"let circle of circles\">\n      <svg:g ngx-charts-circle\n        class=\"circle\"\n        [cx]=\"circle.cx\"\n        [cy]=\"circle.cy\"\n        [r]=\"circle.radius\"\n        [fill]=\"circle.color\"\n        [style.opacity]=\"circle.opacity\"\n        [class.active]=\"circle.isActive\"\n        [pointerEvents]=\"'all'\"\n        [data]=\"circle.value\"\n        [classNames]=\"circle.classNames\"\n        (select)=\"onClick($event, circle.label)\"\n        (activate)=\"activateCircle(circle)\"\n        (deactivate)=\"deactivateCircle(circle)\"\n        ngx-tooltip\n        [tooltipDisabled]=\"tooltipDisabled\"\n        [tooltipPlacement]=\"'top'\"\n        [tooltipType]=\"'tooltip'\"\n        [tooltipTitle]=\"getTooltipText(circle)\"\n      />\n    </svg:g>\n  ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        animations: [
            core_1.trigger('animationState', [
                core_1.transition('void => *', [
                    core_1.style({
                        opacity: 0,
                    }),
                    core_1.animate(250, core_1.style({ opacity: 1 }))
                ])
            ])
        ]
    })
], BubbleSeriesComponent);
exports.BubbleSeriesComponent = BubbleSeriesComponent;
//# sourceMappingURL=bubble-series.component.js.map