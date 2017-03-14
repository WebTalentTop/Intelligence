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
var nvd_component_1 = require("./nvd.component");
var ngx_module_1 = require("../ngxdemo/ngx.module");
var ng2_nvd3_1 = require("ng2-nvd3");
var NvdModule = (function () {
    function NvdModule() {
    }
    return NvdModule;
}());
NvdModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ngx_module_1.NgxModule, ng2_nvd3_1.nvD3],
        declarations: [nvd_component_1.NvdComponent, ng2_nvd3_1.nvD3],
        bootstrap: [nvd_component_1.NvdComponent]
    })
], NvdModule);
exports.NvdModule = NvdModule;
//# sourceMappingURL=nvd.module.js.map