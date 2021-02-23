import { Widget } from "./Widget";
export interface GoogleMapOptions {
    latitude?: any;
    longitude?: any;
    zoom?: any;
    mapTypeId?: any;
    markerTitle?: string;
    markerLatitude?: any;
    markerLongitude?: any;
}
export declare class GoogleMap extends Widget<GoogleMapOptions> {
    private map;
    constructor(container: JQuery, opt: GoogleMapOptions);
    get_map(): any;
}
