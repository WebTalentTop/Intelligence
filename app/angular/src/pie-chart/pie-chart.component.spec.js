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
var d3_1 = require("../d3");
require("../../config/testing-utils");
var data_1 = require("../../ngxdemo/data");
var common_1 = require("@angular/common");
var pie_chart_module_1 = require("./pie-chart.module");
var TestComponent = (function () {
    function TestComponent() {
        this.single = data_1.single;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-component',
        template: ''
    })
], TestComponent);
describe('<ngx-charts-pie>', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [pie_chart_module_1.PieChartModule],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ]
        });
    });
    describe('basic setup', function () {
        beforeEach(function () {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n            <ngx-charts-pie-chart\n                [results]=\"single\"\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [doughnut]=\"false\">\n            </ngx-charts-pie-chart>"
                }
            });
        });
        it('should set the svg width and height', function (done) {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var svg = d3_1.default.select(compiled.querySelectorAll('svg')[0]);
                expect(svg.attr('width')).toEqual('400');
                expect(svg.attr('height')).toEqual('800');
                done();
            });
        });
        it('should render 6 arc elements', function (done) {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                expect(compiled.querySelectorAll('path.arc').length).toEqual(6);
                done();
            });
        });
        it('should render an arc', function (done) {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var arcs = compiled.querySelectorAll('path.arc');
                var arc = d3_1.default.arc()
                    .innerRadius(0)
                    .outerRadius(440 / 3)
                    .startAngle(0)
                    .endAngle(1.0996941056424656);
                expect(d3_1.default.select(arcs[0]).attr('d')).toEqual(arc());
                done();
            });
        });
    });
    describe('doughnut', function () {
        it('should render an arc, default width', function (done) {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n            <ngx-charts-pie-chart\n                [results]=\"single\"\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [doughnut]=\"true\">\n            </ngx-charts-pie-chart>"
                }
            });
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var arcs = compiled.querySelectorAll('path.arc');
                var outerRadius = 440 / 3;
                var arc = d3_1.default.arc()
                    .innerRadius(outerRadius * 3 / 4) // default arc is 1/4 outerwidth
                    .outerRadius(outerRadius)
                    .startAngle(0)
                    .endAngle(1.0996941056424656);
                expect(d3_1.default.select(arcs[0]).attr('d')).toEqual(arc());
                done();
            });
        });
        it('should render an arc, set width', function (done) {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n            <ngx-charts-pie-chart\n                [results]=\"single\"\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [doughnut]=\"true\"\n                [arcWidth]=\"0.1\">\n            </ngx-charts-pie-chart>"
                }
            });
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var arcs = compiled.querySelectorAll('path.arc');
                var outerRadius = 440 / 3;
                var arc = d3_1.default.arc()
                    .innerRadius(outerRadius * 0.90) // default arc is 1/4 outerwidth
                    .outerRadius(outerRadius)
                    .startAngle(0)
                    .endAngle(1.0996941056424656);
                expect(d3_1.default.select(arcs[0]).attr('d')).toEqual(arc());
                done();
            });
        });
    });
});
//# sourceMappingURL=pie-chart.component.spec.js.map