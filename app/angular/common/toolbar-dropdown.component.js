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
var ToolbarDropdownComponent = (function () {
    function ToolbarDropdownComponent() {
        this.toggled = new core_1.EventEmitter();
        this.open = false;
        this.state = 'inactive';
    }
    ToolbarDropdownComponent.prototype.toggleMove = function (opened) {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.toggled.emit(opened);
        this.open = !this.open;
    };
    return ToolbarDropdownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ToolbarDropdownComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ToolbarDropdownComponent.prototype, "subtitle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ToolbarDropdownComponent.prototype, "toggled", void 0);
ToolbarDropdownComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'toolbar-dropdown-comp',
        templateUrl: 'toolbar-dropdown.component.html',
        styleUrls: ['toolbar-dropdown.component.css'],
        animations: [
            core_1.trigger('toggleArrow', [
                core_1.state('inactive', core_1.style({
                    transform: 'rotate(0deg)'
                })),
                core_1.state('active', core_1.style({
                    transform: 'rotate(180deg)'
                })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    })
], ToolbarDropdownComponent);
exports.ToolbarDropdownComponent = ToolbarDropdownComponent;
//# sourceMappingURL=toolbar-dropdown.component.js.map