import { Component } from '@angular/core';

//import { SebmGoogleMap } from 'angular2-google-maps/core';

@Component({
    selector: 'ui-map',
    styleUrls: [ 'app/contact/map/map.component.css' ],
    templateUrl: 'app/contact/map/map.component.html',
    //directives: [SebmGoogleMap]
})
export class MapComponent {

    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor() {

    }
}
