"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var d3_1 = require("../../d3");
require("../../../config/testing-utils");
var chart_common_module_1 = require("../chart-common.module");
var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-component',
        template: ''
    })
], TestComponent);
describe('<ngx-charts-chart>', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [chart_common_module_1.ChartCommonModule]
        });
    });
    describe('basic setup', function () {
        beforeEach(function () {
            // set up a  basic chart
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n                    <ngx-charts-chart\n                        [view]=\"[400,800]\"\n                        >\n                        <p>ngx-charts is cool!</p>\n                    </ngx-charts-chart>\n                "
                }
            });
        });
        it('should set the svg width and height', testing_1.async(function () {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var svg = compiled.querySelectorAll('svg')[0];
                expect(d3_1.default.select(svg).attr('width')).toEqual('400');
                expect(d3_1.default.select(svg).attr('height')).toEqual('800');
            });
        }));
        it('should correctly project the inner content', testing_1.async(function (done) {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var svg = d3_1.default.select(compiled.querySelectorAll('svg')[0]);
                var textNode = svg.select('p');
                expect(textNode.text()).toEqual('ngx-charts is cool!');
            });
        }));
    });
});
//# sourceMappingURL=chart.component.spec.js.map