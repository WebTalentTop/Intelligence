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
var SvgRadialGradientComponent = (function () {
    function SvgRadialGradientComponent() {
        this.endOpacity = 1;
        this.cx = 0;
        this.cy = 0;
    }
    SvgRadialGradientComponent.prototype.ngOnChanges = function (changes) {
        this.r = '30%';
    };
    return SvgRadialGradientComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SvgRadialGradientComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SvgRadialGradientComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SvgRadialGradientComponent.prototype, "startOpacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SvgRadialGradientComponent.prototype, "endOpacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SvgRadialGradientComponent.prototype, "cx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SvgRadialGradientComponent.prototype, "cy", void 0);
SvgRadialGradientComponent = __decorate([
    core_1.Component({
        selector: 'g[ngx-charts-svg-radial-gradient]',
        template: "\n    <svg:radialGradient\n      [id]=\"name\"\n      [attr.cx]=\"cx\"\n      [attr.cy]=\"cy\"\n      [attr.r]=\"r\"\n      gradientUnits=\"userSpaceOnUse\">\n      <svg:stop\n        offset=\"0%\"\n        [style.stop-color]=\"color\"\n        [style.stop-opacity]=\"startOpacity\"\n      />\n      <svg:stop\n        offset=\"100%\"\n        [style.stop-color]=\"color\"\n        [style.stop-opacity]=\"endOpacity\"\n      />\n    </svg:radialGradient>\n  ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], SvgRadialGradientComponent);
exports.SvgRadialGradientComponent = SvgRadialGradientComponent;
//# sourceMappingURL=svg-radial-gradient.component.js.map