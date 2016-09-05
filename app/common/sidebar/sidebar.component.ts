import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

import { SidebarModel }  from './sidebar.model';

@Component({
    selector: 'ui-sidebar',
    styleUrls: [ 'app/common/sidebar/sidebar.component.css' ],
    templateUrl: 'app/common/sidebar/sidebar.component.html',
    directives: [NgClass]
})
export class SidebarComponent {

    constructor(private router: Router, private sidebarModel: SidebarModel) {

    }

    isActiveTab ( tabName:string ) {
        return this.router.isActive(tabName, false);
    }

    goTo( uri:string ) {
        this.sidebarModel.closeSidebar();
        this.router.navigateByUrl(uri);
    }

    goToHome () {
        this.goTo('/home');
    }

    goToService () {
        this.goTo('/service');
    }

    goToCompany () {
        this.goTo('/company');
    }

    goToContact () {
        this.goTo('/contact');
    }
}
