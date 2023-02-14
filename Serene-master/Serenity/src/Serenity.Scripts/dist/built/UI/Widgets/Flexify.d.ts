import { Widget } from "./Widget";
export declare class Flexify extends Widget<FlexifyOptions> {
    private xDifference;
    private yDifference;
    constructor(container: JQuery, options: FlexifyOptions);
    storeInitialSize(): void;
    private getXFactor;
    private getYFactor;
    private resizeElements;
    private resizeElement;
}
export interface FlexifyOptions {
    getXFactor?: (p1: JQuery) => any;
    getYFactor?: (p1: JQuery) => any;
    designWidth?: any;
    designHeight?: any;
}
