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
var heat_map_module_1 = require("./heat-map.module");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
var TestComponent = (function () {
    function TestComponent() {
        this.multi = data_1.multi;
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
(TRAVIS ? xdescribe : describe)('<ngx-charts-heat-map>', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [heat_map_module_1.HeatMapModule],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ]
        });
    });
    describe('basic setup', function () {
        beforeEach(function () {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n              <ngx-charts-heat-map\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [results]=\"multi\">\n              </ngx-charts-heat-map>"
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
        it('should render 12 cell elements', function (done) {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                expect(compiled.querySelectorAll('rect.cell').length).toEqual(12);
                done();
            });
        });
        it('should render correct cell size', function (done) {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var rects = compiled.querySelectorAll('rect.cell');
                var rect = d3_1.default.select(rects[0]);
                expect(rect.attr('width')).toEqual('84');
                expect(rect.attr('height')).toEqual('254');
                done();
            });
        });
    });
    describe('with gradiant', function () {
        beforeEach(function () {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n              <ngx-charts-heat-map\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [results]=\"multi\"\n                [gradient]=\"true\">\n              </ngx-charts-heat-map>"
                }
            });
        });
        it('should set fill attr', function (done) {
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var rects = compiled.querySelectorAll('rect.cell');
                var rect = d3_1.default.select(rects[0]);
                expect(rect.attr('fill')).toMatch('url(.*)');
                done();
            });
        });
    });
    describe('padding', function () {
        it('should render correct cell size, with zero padding', function (done) {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n              <ngx-charts-heat-map\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [results]=\"multi\"\n                [innerPadding]=\"0\">\n              </ngx-charts-heat-map>"
                }
            });
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var rects = compiled.querySelectorAll('rect.cell');
                var rect = d3_1.default.select(rects[0]);
                expect(rect.attr('width')).toEqual('90');
                expect(rect.attr('height')).toEqual('260');
                done();
            });
        });
        it('should render correct cell size, with padding', function (done) {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n              <ngx-charts-heat-map\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [results]=\"multi\"\n                [innerPadding]=\"20\">\n              </ngx-charts-heat-map>\n          "
                }
            });
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var rects = compiled.querySelectorAll('rect.cell');
                var rect = d3_1.default.select(rects[0]);
                expect(rect.attr('width')).toEqual('75'); // ~(360 - 3 * innerPadding) / 4
                expect(rect.attr('height')).toEqual('246'); // ~(780 - 2 * innnerPadding) / 3
                done();
            });
        });
        it('should render correct cell size, with x and y padding', function (done) {
            testing_1.TestBed.overrideComponent(TestComponent, {
                set: {
                    template: "\n              <ngx-charts-heat-map\n                [view]=\"[400,800]\"\n                [scheme]=\"colorScheme\"\n                [results]=\"multi\"\n                [innerPadding]=\"[50,40]\">\n              </ngx-charts-heat-map>\n          "
                }
            });
            testing_1.TestBed.compileComponents().then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                var rects = compiled.querySelectorAll('rect.cell');
                var rect = d3_1.default.select(rects[0]);
                expect(rect.attr('width')).toEqual('52'); // ~(360 - 3 * innerPadding) / 4
                expect(rect.attr('height')).toEqual('233'); // ~(780 - 2 * innnerPadding) / 3
                done();
            });
        });
    });
});
//# sourceMappingURL=heat-map.component.spec.js.map