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
var router_1 = require('@angular/router');
var sidebar_model_1 = require('./sidebar.model');
var SidebarComponent = (function () {
    function SidebarComponent(router, sidebarModel) {
        this.router = router;
        this.sidebarModel = sidebarModel;
    }
    SidebarComponent.prototype.isActiveTab = function (tabName) {
        return this.router.isActive(tabName, false);
    };
    SidebarComponent.prototype.goTo = function (uri) {
        this.sidebarModel.closeSidebar();
        this.router.navigateByUrl(uri);
    };
    SidebarComponent.prototype.goToHome = function () {
        this.goTo('/home');
    };
    SidebarComponent.prototype.goToService = function () {
        this.goTo('/service');
    };
    SidebarComponent.prototype.goToCompany = function () {
        this.goTo('/company');
    };
    SidebarComponent.prototype.goToContact = function () {
        this.goTo('/contact');
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'ui-sidebar',
            styleUrls: ['app/common/sidebar/sidebar.component.css'],
            templateUrl: 'app/common/sidebar/sidebar.component.html',
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [router_1.Router, sidebar_model_1.SidebarModel])
    ], SidebarComponent);
    return SidebarComponent;
})();
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map