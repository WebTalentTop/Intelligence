"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var d3_1 = require("../d3");
var base_chart_component_1 = require("../common/base-chart.component");
var view_dimensions_helper_1 = require("../common/view-dimensions.helper");
var color_helper_1 = require("../common/color.helper");
var LinearGaugeComponent = (function (_super) {
    __extends(LinearGaugeComponent, _super);
    function LinearGaugeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.min = 0;
        _this.max = 100;
        _this.value = 0;
        _this.margin = [10, 20, 10, 20];
        _this.valueResizeScale = 1;
        _this.unitsResizeScale = 1;
        _this.valueTextTransform = '';
        _this.valueTranslate = '';
        _this.unitsTextTransform = '';
        _this.unitsTranslate = '';
        return _this;
    }
    LinearGaugeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        setTimeout(function () {
            _this.scaleText('value');
            _this.scaleText('units');
        });
    };
    LinearGaugeComponent.prototype.update = function () {
        var _this = this;
        _super.prototype.update.call(this);
        this.zone.run(function () {
            _this.hasPreviousValue = _this.previousValue !== undefined;
            _this.max = Math.max(_this.max, _this.value);
            _this.min = Math.min(_this.min, _this.value);
            if (_this.hasPreviousValue) {
                _this.max = Math.max(_this.max, _this.previousValue);
                _this.min = Math.min(_this.min, _this.previousValue);
            }
            _this.dims = view_dimensions_helper_1.calculateViewDimensions({
                width: _this.width,
                height: _this.height,
                margins: _this.margin
            });
            _this.valueDomain = _this.getValueDomain();
            _this.valueScale = _this.getValueScale();
            _this.displayValue = _this.getDisplayValue();
            _this.setColors();
            var xOffset = _this.margin[3] + _this.dims.width / 2;
            var yOffset = _this.margin[0] + _this.dims.height / 2;
            _this.transform = "translate(" + xOffset + ", " + yOffset + ")";
            _this.transformLine = "translate(" + (_this.margin[3] + _this.valueScale(_this.previousValue)) + ", " + yOffset + ")";
            _this.valueTranslate = "translate(0, -15)";
            _this.unitsTranslate = "translate(0, 15)";
            setTimeout(function () { return _this.scaleText('value'); }, 50);
            setTimeout(function () { return _this.scaleText('units'); }, 50);
        });
    };
    LinearGaugeComponent.prototype.getValueDomain = function () {
        return [this.min, this.max];
    };
    LinearGaugeComponent.prototype.getValueScale = function () {
        return d3_1.default.scaleLinear()
            .range([0, this.dims.width])
            .domain(this.valueDomain);
    };
    LinearGaugeComponent.prototype.getDisplayValue = function () {
        return this.value.toLocaleString();
    };
    LinearGaugeComponent.prototype.scaleText = function (element, repeat) {
        var _this = this;
        if (repeat === void 0) { repeat = true; }
        this.zone.run(function () {
            var el;
            var resizeScale;
            if (element === 'value') {
                el = _this.valueTextEl;
                resizeScale = _this.valueResizeScale;
            }
            else {
                el = _this.unitsTextEl;
                resizeScale = _this.unitsResizeScale;
            }
            var _a = el.nativeElement.getBoundingClientRect(), width = _a.width, height = _a.height;
            if (width === 0 || height === 0)
                return;
            var oldScale = resizeScale;
            var availableWidth = _this.dims.width;
            var availableHeight = Math.max(_this.dims.height / 2 - 15, 0);
            var resizeScaleWidth = Math.floor((availableWidth / (width / resizeScale)) * 100) / 100;
            var resizeScaleHeight = Math.floor((availableHeight / (height / resizeScale)) * 100) / 100;
            resizeScale = Math.min(resizeScaleHeight, resizeScaleWidth);
            if (resizeScale !== oldScale) {
                if (element === 'value') {
                    _this.valueResizeScale = resizeScale;
                    _this.valueTextTransform = "scale(" + resizeScale + ", " + resizeScale + ")";
                }
                else {
                    _this.unitsResizeScale = resizeScale;
                    _this.unitsTextTransform = "scale(" + resizeScale + ", " + resizeScale + ")";
                }
                _this.cd.markForCheck();
                if (repeat) {
                    setTimeout(function () { _this.scaleText(element, false); }, 50);
                }
            }
        });
    };
    LinearGaugeComponent.prototype.onClick = function () {
        this.select.emit({
            name: 'Value',
            value: this.value
        });
    };
    LinearGaugeComponent.prototype.setColors = function () {
        this.colors = new color_helper_1.ColorHelper(this.scheme, 'ordinal', [this.value], this.customColors);
    };
    return LinearGaugeComponent;
}(base_chart_component_1.BaseChartComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LinearGaugeComponent.prototype, "min", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LinearGaugeComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LinearGaugeComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LinearGaugeComponent.prototype, "units", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LinearGaugeComponent.prototype, "previousValue", void 0);
__decorate([
    core_1.ViewChild('valueTextEl'),
    __metadata("design:type", core_1.ElementRef)
], LinearGaugeComponent.prototype, "valueTextEl", void 0);
__decorate([
    core_1.ViewChild('unitsTextEl'),
    __metadata("design:type", core_1.ElementRef)
], LinearGaugeComponent.prototype, "unitsTextEl", void 0);
LinearGaugeComponent = __decorate([
    core_1.Component({
        selector: 'ngx-charts-linear-gauge',
        template: "\n    <ngx-charts-chart\n      [view]=\"[width, height]\"\n      [showLegend]=\"false\"\n      (click)=\"onClick()\">\n      <svg:g class=\"linear-gauge chart\">\n        <svg:g ngx-charts-bar \n          class=\"background-bar\"\n          [width]=\"dims.width\"\n          [height]=\"3\"\n          [x]=\"margin[3]\"\n          [y]=\"dims.height / 2 + margin[0] - 2\"\n          [data]=\"{}\"\n          [orientation]=\"'horizontal'\"\n          [roundEdges]=\"true\">\n        </svg:g>\n        <svg:g ngx-charts-bar \n          [width]=\"valueScale(value)\"\n          [height]=\"3\"\n          [x]=\"margin[3]\"\n          [y]=\"dims.height / 2 + margin[0] - 2\"\n          [fill]=\"colors.getColor(units)\"\n          [data]=\"{}\"\n          [orientation]=\"'horizontal'\"\n          [roundEdges]=\"true\">\n        </svg:g>\n\n        <svg:line \n          *ngIf=\"hasPreviousValue\"\n          [attr.transform]=\"transformLine\"\n          x1=\"0\"\n          y1=\"5\" \n          x2=\"0\"\n          y2=\"15\"\n          [attr.stroke]=\"colors.getColor(units)\"          \n        />\n\n        <svg:line \n          *ngIf=\"hasPreviousValue\"\n          [attr.transform]=\"transformLine\"\n          x1=\"0\"\n          y1=\"-5\" \n          x2=\"0\"\n          y2=\"-15\"\n          [attr.stroke]=\"colors.getColor(units)\"          \n        />\n        \n        <svg:g [attr.transform]=\"transform\">        \n          <svg:g [attr.transform]=\"valueTranslate\">\n            <svg:text #valueTextEl\n              class=\"value\"\n              [style.textAnchor]=\"'middle'\"\n              [attr.transform]=\"valueTextTransform\"          \n              alignment-baseline=\"after-edge\">\n              {{displayValue}}\n            </svg:text>        \n          </svg:g>\n          \n          <svg:g [attr.transform]=\"unitsTranslate\">\n            <svg:text #unitsTextEl\n              class=\"units\"\n              [style.textAnchor]=\"'middle'\"\n              [attr.transform]=\"unitsTextTransform\"          \n              alignment-baseline=\"before-edge\">\n              {{units}}\n            </svg:text>        \n          </svg:g>\n        </svg:g>\n      </svg:g>\n    </ngx-charts-chart>\n  ",
        styleUrls: [
            '../common/base-chart.component.scss',
            './linear-gauge.component.scss'
        ],
        encapsulation: core_1.ViewEncapsulation.None,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    })
], LinearGaugeComponent);
exports.LinearGaugeComponent = LinearGaugeComponent;
//# sourceMappingURL=linear-gauge.component.js.map