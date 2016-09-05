import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './common/header/header.component';
import { SidebarComponent }  from './common/sidebar/sidebar.component';
import { SidebarModel }  from './common/sidebar/sidebar.model';

import { HomeComponent }  from './home/home.component';
import { ServiceComponent }  from './service/service.component';
import { CompanyComponent }  from './company/company.component';
import { ContactComponent }  from './contact/contact.component';
import { MapComponent }  from './contact/map/map.component';

//import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
//import { AgmCoreModule } from 'angular2-google-maps/core';

import { routing } from './app.routing';

//{apiKey: 'AIzaSyCMteN4JqG18tq16fkp1C0elhMJ7ZKxt6s'}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        //AgmCoreModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        HomeComponent,
        ServiceComponent,
        CompanyComponent,
        ContactComponent,
        MapComponent
    ],
    providers: [SidebarModel],
    bootstrap: [AppComponent],
    //directives: [GOOGLE_MAPS_DIRECTIVES]
})

export class AppModule {

}

