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
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
require("../../../config/testing-utils");
var chart_common_module_1 = require("../chart-common.module");
var color_helper_1 = require("../color.helper");
// some test data (includes just enought data to run the tests)
var seriesData = ['complete', 'not complete'];
var TestComponent = (function () {
    function TestComponent() {
        this.seriesData = seriesData;
        this.legendTitle = 'Test legend title';
        var scheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
        this.colors = new color_helper_1.ColorHelper(scheme, 'ordinal', [], null);
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-component',
        template: ''
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
describe('<ngx-charts-legend>', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [chart_common_module_1.ChartCommonModule]
        });
        testing_1.TestBed.overrideComponent(TestComponent, {
            set: {
                template: "\n                <ngx-charts-legend\n                  [title]=\"legendTitle\"\n                  [colors]=\"colors\"\n                  [data]=\"seriesData\"\n                  [height]=\"legendHeight\">\n                </ngx-charts-legend>\n            "
            }
        });
    });
    it('should set the legend labels', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            var labelsElement = fixture.debugElement.nativeElement.querySelector('.legend-labels');
            expect(labelsElement).toBeDefined();
            expect(labelsElement.childElementCount).toEqual(2); // 2 legend labels
            //expect(labelsElement.children[0]).toContainText('complete');
            //expect(labelsElement.children[1]).toContainText('not complete');
        });
    }));
});
//# sourceMappingURL=legend.component.spec.js.map