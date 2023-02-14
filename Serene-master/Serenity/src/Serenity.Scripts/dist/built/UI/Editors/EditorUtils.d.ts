import { Widget } from "../Widgets/Widget";
export declare namespace EditorUtils {
    function getDisplayText(editor: Widget<any>): string;
    function getValue(editor: Widget<any>): any;
    function saveValue(editor: Widget<any>, item: Serenity.PropertyItem, target: any): void;
    function setValue(editor: Widget<any>, value: any): void;
    function loadValue(editor: Widget<any>, item: Serenity.PropertyItem, source: any): void;
    function setReadonly(elements: JQuery, isReadOnly: boolean): JQuery;
    function setReadOnly(widget: Widget<any>, isReadOnly: boolean): void;
    function setRequired(widget: Widget<any>, isRequired: boolean): void;
    function setContainerReadOnly(container: JQuery, readOnly: boolean): void;
}
