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
var Subject_1 = require('rxjs/Subject');
var SidebarModel = (function () {
    function SidebarModel() {
        var _this = this;
        this.onToggleChangedSource = new Subject_1.Subject();
        this.onToggleChangedStream = this.onToggleChangedSource.asObservable();
        this.isOpen = false;
        setTimeout(function () { return _this.onToggleChangedSource.next(_this.isOpen); }, 200);
    }
    SidebarModel.prototype.isSidebarOpen = function () {
        return this.isOpen;
    };
    SidebarModel.prototype.toggleSidebar = function () {
        this.isOpen = !this.isOpen;
        this.onToggleChangedSource.next(this.isOpen);
    };
    SidebarModel.prototype.closeSidebar = function () {
        this.isOpen = false;
        this.onToggleChangedSource.next(this.isOpen);
    };
    SidebarModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SidebarModel);
    return SidebarModel;
})();
exports.SidebarModel = SidebarModel;
//# sourceMappingURL=sidebar.model.js.map