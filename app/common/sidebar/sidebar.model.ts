import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SidebarModel {

    private onToggleChangedSource = new Subject<boolean>();

    onToggleChangedStream = this.onToggleChangedSource.asObservable();

    private isOpen:boolean = false;

    constructor() {
        setTimeout(() => this.onToggleChangedSource.next(this.isOpen), 200);
    }

    isSidebarOpen() {
        return this.isOpen;
    }

    toggleSidebar() {
        this.isOpen = !this.isOpen;
        this.onToggleChangedSource.next(this.isOpen);
    }

    closeSidebar() {
        this.isOpen = false;
        this.onToggleChangedSource.next(this.isOpen);
    }

}