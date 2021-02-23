/// <reference types="react" />
/// <reference types="jquery" />
import { IDialog } from "../../Interfaces";
export interface WidgetClass<TOptions = object> {
    new (element: JQuery, options?: TOptions): Widget<TOptions>;
    element: JQuery;
}
export interface WidgetDialogClass<TOptions = object> {
    new (options?: TOptions): Widget<TOptions> & IDialog;
    element: JQuery;
}
export declare type AnyWidgetClass<TOptions = object> = WidgetClass<TOptions> | WidgetDialogClass<TOptions>;
export declare function reactPatch(): void;
export interface CreateWidgetParams<TWidget extends Widget<TOptions>, TOptions> {
    type?: new (element: JQuery, options?: TOptions) => TWidget;
    options?: TOptions;
    container?: JQuery;
    element?: (e: JQuery) => void;
    init?: (w: TWidget) => void;
}
export declare class Widget<TOptions> extends React.Component<TOptions> {
    private static nextWidgetNumber;
    element: JQuery;
    protected options: TOptions;
    protected widgetName: string;
    protected uniqueName: string;
    constructor(element: JQuery, options?: TOptions);
    destroy(): void;
    protected addCssClass(): void;
    protected getCssClass(): string;
    static getWidgetName(type: Function): string;
    static elementFor<TWidget>(editorType: {
        new (...args: any[]): TWidget;
    }): JQuery;
    addValidationRule(eventClass: string, rule: (p1: JQuery) => string): JQuery;
    getGridField(): JQuery;
    static create<TWidget extends Widget<TOpt>, TOpt>(params: CreateWidgetParams<TWidget, TOpt>): TWidget;
    initialize(): void;
    init(action?: (widget: any) => void): this;
    private static __isWidgetType;
    props: Readonly<{
        children?: React.ReactNode;
    }> & Readonly<TOptions> & WidgetComponentProps<this>;
}
export interface WidgetComponentProps<W extends Widget<any>> {
    id?: string;
    name?: string;
    className?: string;
    maxLength?: number;
    placeholder?: string;
    setOptions?: any;
    required?: boolean;
    readOnly?: boolean;
    oneWay?: boolean;
    onChange?: (e: JQueryEventObject) => void;
    onChangeSelect2?: (e: JQueryEventObject) => void;
    value?: any;
    defaultValue?: any;
}
export declare interface Widget<TOptions> {
    change(handler: (e: JQueryEventObject) => void): void;
    changeSelect2(handler: (e: JQueryEventObject) => void): void;
}
