import { Widget } from "./Widget";
export declare namespace WX {
    function getWidget<TWidget>(element: JQuery, type: any): TWidget;
    var getWidgetName: typeof Widget.getWidgetName;
    function hasOriginalEvent(e: any): boolean;
    function change(widget: any, handler: any): void;
    function changeSelect2(widget: any, handler: any): void;
    function getGridField(widget: Widget<any>): JQuery;
}
