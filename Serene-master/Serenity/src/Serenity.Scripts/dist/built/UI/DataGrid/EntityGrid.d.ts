/// <reference types="jqueryui" />
import { ToolButton } from "../Widgets/Toolbar";
import { Widget } from "../Widgets/Widget";
import { DataGrid } from "./DataGrid";
export declare class EntityGrid<TItem, TOptions> extends DataGrid<TItem, TOptions> {
    constructor(container: JQuery, options?: TOptions);
    protected usePager(): boolean;
    protected createToolbarExtensions(): void;
    protected getInitialTitle(): string;
    protected getLocalTextPrefix(): string;
    private entityType;
    protected getEntityType(): string;
    private displayName;
    protected getDisplayName(): string;
    private itemName;
    protected getItemName(): string;
    protected getAddButtonCaption(): string;
    protected getButtons(): ToolButton[];
    protected newRefreshButton(noText?: boolean): ToolButton;
    protected addButtonClick(): void;
    protected editItem(entityOrId: any): void;
    protected editItemOfType(itemType: string, entityOrId: any): void;
    private service;
    protected getService(): string;
    protected getViewOptions(): Slick.RemoteViewOptions;
    protected getItemType(): string;
    protected routeDialog(itemType: string, dialog: Widget<any>): void;
    protected getInsertPermission(): string;
    protected hasInsertPermission(): boolean;
    protected transferDialogReadOnly(dialog: Widget<any>): void;
    protected initDialog(dialog: Widget<any>): void;
    protected initEntityDialog(itemType: string, dialog: Widget<any>): void;
    protected createEntityDialog(itemType: string, callback?: (dlg: Widget<any>) => void): Widget<any>;
    protected getDialogOptions(): JQueryUI.DialogOptions;
    protected getDialogOptionsFor(itemType: string): JQueryUI.DialogOptions;
    protected getDialogTypeFor(itemType: string): {
        new (...args: any[]): Widget<any>;
    };
    private dialogType;
    protected getDialogType(): {
        new (...args: any[]): Widget<any>;
    };
}
