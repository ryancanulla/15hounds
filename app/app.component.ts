import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import { HeaderComponent }  from './common/header/header.component';
import { SidebarModel }  from './common/sidebar/sidebar.model';


@Component({
    selector: 'my-app',
    styleUrls: [ 'app/app.component.css' ],
    templateUrl: 'app/app.component.html',
    directives: [NgClass]
})
export class AppComponent {

    isSidebarOpen:boolean;

    constructor(private sidebarModel: SidebarModel) {
        sidebarModel.onToggleChangedStream.subscribe(isOpen => {
            this.isSidebarOpen = isOpen;
        });

    }
}
