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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var header_component_1 = require('./common/header/header.component');
var sidebar_component_1 = require('./common/sidebar/sidebar.component');
var sidebar_model_1 = require('./common/sidebar/sidebar.model');
var home_component_1 = require('./home/home.component');
var service_component_1 = require('./service/service.component');
var company_component_1 = require('./company/company.component');
var contact_component_1 = require('./contact/contact.component');
var map_component_1 = require('./contact/map/map.component');
//import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
//import { AgmCoreModule } from 'angular2-google-maps/core';
var app_routing_1 = require('./app.routing');
//{apiKey: 'AIzaSyCMteN4JqG18tq16fkp1C0elhMJ7ZKxt6s'}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                home_component_1.HomeComponent,
                service_component_1.ServiceComponent,
                company_component_1.CompanyComponent,
                contact_component_1.ContactComponent,
                map_component_1.MapComponent
            ],
            providers: [sidebar_model_1.SidebarModel],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map