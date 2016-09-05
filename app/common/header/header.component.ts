import { Component } from '@angular/core';
import { SidebarModel }  from '../sidebar/sidebar.model';

@Component({
    selector: 'ui-header',
    templateUrl: 'app/common/header/header.component.html',
    styleUrls: ['app/common/header/header.component.css']
})
export class HeaderComponent {



    constructor(private sidebarModel: SidebarModel) {}

    onToggleSidebar() {
        this.sidebarModel.toggleSidebar();
    }
}
