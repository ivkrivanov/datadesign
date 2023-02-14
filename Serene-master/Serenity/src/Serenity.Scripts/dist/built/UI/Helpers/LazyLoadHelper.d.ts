export declare namespace LazyLoadHelper {
    function executeOnceWhenShown(element: JQuery, callback: Function): void;
    function executeEverytimeWhenShown(element: JQuery, callback: Function, callNowIfVisible: boolean): void;
}
