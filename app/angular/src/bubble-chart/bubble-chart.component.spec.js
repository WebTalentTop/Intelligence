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
var bubble_chart_module_1 = require("./bubble-chart.module");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
var TestComponent = (function () {
    function TestComponent() {
        this.results = data_1.bubble;
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
(TRAVIS ? xdescribe : describe)('<ngx-charts-bubble-chart>', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [bubble_chart_module_1.BubbleChartModule],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ]
        });
    });
    describe('basic setup', function () {
        beforeEach(function () {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n              <ngx-charts-bubble-chart\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [results]=\"results\">\n              </ngx-charts-bubble-chart>"
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
        it('should render 12 circle elements', function (done) {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                expect(compiled.querySelectorAll('g.circle').length).toEqual(12);
                done();
            });
        });
    });
});
//# sourceMappingURL=bubble-chart.component.spec.js.map