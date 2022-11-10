/// <reference types="jquery" />
import { DateEditor } from "../Editors/DateEditor";
import { DateTimeEditor, DateTimeEditorOptions } from "../Editors/DateTimeEditor";
import { SelectEditor, SelectEditorOptions } from "../Editors/SelectEditor";
import { Widget } from "../Widgets/Widget";
import { QuickFilter } from "./QuickFilter";
export interface QuickFilterBarOptions {
    filters: QuickFilter<Widget<any>, any>[];
    getTitle?: (filter: QuickFilter<Widget<any>, any>) => string;
    idPrefix?: string;
}
export declare class QuickFilterBar extends Widget<QuickFilterBarOptions> {
    constructor(container: JQuery, options?: QuickFilterBarOptions);
    addSeparator(): void;
    add<TWidget extends Widget<any>, TOptions>(opt: QuickFilter<TWidget, TOptions>): TWidget;
    addDateRange(field: string, title?: string): DateEditor;
    static dateRange(field: string, title?: string): QuickFilter<DateEditor, DateTimeEditorOptions>;
    addDateTimeRange(field: string, title?: string): DateTimeEditor;
    static dateTimeRange(field: string, title?: string): QuickFilter<DateTimeEditor, DateTimeEditorOptions>;
    addBoolean(field: string, title?: string, yes?: string, no?: string): SelectEditor;
    static boolean(field: string, title?: string, yes?: string, no?: string): QuickFilter<SelectEditor, SelectEditorOptions>;
    onChange: (e: JQueryEventObject) => void;
    private submitHandlers;
    destroy(): void;
    onSubmit(request: Serenity.ListRequest): void;
    protected add_submitHandlers(action: (request: Serenity.ListRequest) => void): void;
    protected remove_submitHandlers(action: (request: Serenity.ListRequest) => void): void;
    protected clear_submitHandlers(): void;
    find<TWidget>(type: {
        new (...args: any[]): TWidget;
    }, field: string): TWidget;
    tryFind<TWidget>(type: {
        new (...args: any[]): TWidget;
    }, field: string): TWidget;
}
