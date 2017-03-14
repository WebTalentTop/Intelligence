"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_2 = require("@covalent/core");
var ngx_component_1 = require("./ngx.component");
var NgxModule = (function () {
    function NgxModule() {
    }
    return NgxModule;
}());
NgxModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, core_2.CovalentCoreModule],
        declarations: [ngx_component_1.NgxChartsDemoComponent],
        bootstrap: [ngx_component_1.NgxChartsDemoComponent]
    })
], NgxModule);
exports.NgxModule = NgxModule;
//# sourceMappingURL=ngx.module.js.map