var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var sidebar_model_1 = require('./common/sidebar/sidebar.model');
var AppComponent = (function () {
    function AppComponent(sidebarModel) {
        var _this = this;
        this.sidebarModel = sidebarModel;
        sidebarModel.onToggleChangedStream.subscribe(function (isOpen) {
            _this.isSidebarOpen = isOpen;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: ['app/app.component.css'],
            templateUrl: 'app/app.component.html',
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [sidebar_model_1.SidebarModel])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map