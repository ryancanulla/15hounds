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
//import { SebmGoogleMap } from 'angular2-google-maps/core';
var MapComponent = (function () {
    function MapComponent() {
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapComponent = __decorate([
        core_1.Component({
            selector: 'ui-map',
            styleUrls: ['app/contact/map/map.component.css'],
            templateUrl: 'app/contact/map/map.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
})();
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map