import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'service',
        component: ServiceComponent
    },
    {
        path: 'company',
        component: CompanyComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
