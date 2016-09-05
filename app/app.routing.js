var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var service_component_1 = require('./service/service.component');
var company_component_1 = require('./company/company.component');
var contact_component_1 = require('./contact/contact.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'service',
        component: service_component_1.ServiceComponent
    },
    {
        path: 'company',
        component: company_component_1.CompanyComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map