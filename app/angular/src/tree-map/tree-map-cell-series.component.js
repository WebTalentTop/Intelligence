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
var TreeMapCellSeriesComponent = (function () {
    function TreeMapCellSeriesComponent() {
        this.tooltipDisabled = false;
        this.select = new core_1.EventEmitter();
    }
    TreeMapCellSeriesComponent.prototype.ngOnChanges = function (changes) {
        this.cells = this.getCells();
    };
    TreeMapCellSeriesComponent.prototype.getCells = function () {
        var _this = this;
        return this.data.children
            .filter(function (d) {
            return d.depth === 1;
        })
            .map(function (d, index) {
            var label = d.id;
            return {
                x: d.x0,
                y: d.y0,
                width: d.x1 - d.x0,
                height: d.y1 - d.y0,
                fill: _this.colors.getColor(label),
                label: label,
                value: d.value,
                valueType: d.valueType
            };
        });
    };
    TreeMapCellSeriesComponent.prototype.getTooltipText = function (_a) {
        var label = _a.label, value = _a.value;
        return "\n      <span class=\"tooltip-label\">" + label + "</span>\n      <span class=\"tooltip-val\">" + value.toLocaleString() + "</span>\n    ";
    };
    TreeMapCellSeriesComponent.prototype.onClick = function (data) {
        this.select.emit(data);
    };
    TreeMapCellSeriesComponent.prototype.trackBy = function (index, item) {
        return item.label;
    };
    return TreeMapCellSeriesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TreeMapCellSeriesComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TreeMapCellSeriesComponent.prototype, "dims", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TreeMapCellSeriesComponent.prototype, "colors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TreeMapCellSeriesComponent.prototype, "tooltipDisabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TreeMapCellSeriesComponent.prototype, "select", void 0);
TreeMapCellSeriesComponent = __decorate([
    core_1.Component({
        selector: 'g[ngx-charts-tree-map-cell-series]',
        template: "\n    <svg:g ngx-charts-tree-map-cell *ngFor=\"let c of cells; trackBy:trackBy\"\n      [x]=\"c.x\"\n      [y]=\"c.y\"\n      [width]=\"c.width\"\n      [height]=\"c.height\"\n      [fill]=\"c.fill\"\n      [label]=\"c.label\"\n      [value]=\"c.value\"\n      [valueType]=\"c.valueType\"\n      (select)=\"onClick($event)\"\n      ngx-tooltip\n      [tooltipDisabled]=\"tooltipDisabled\"\n      [tooltipPlacement]=\"'top'\"\n      [tooltipType]=\"'tooltip'\"\n      [tooltipTitle]=\"getTooltipText(c)\"\n    />\n  ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], TreeMapCellSeriesComponent);
exports.TreeMapCellSeriesComponent = TreeMapCellSeriesComponent;
//# sourceMappingURL=tree-map-cell-series.component.js.map