/// <reference types="jquery" />
import { IDataGrid } from "../DataGrid/IDataGrid";
import { QuickSearchField, QuickSearchInput } from "../DataGrid/QuickSearchInput";
import { ToolButton } from "../Widgets/Toolbar";
export interface GridRowSelectionMixinOptions {
    selectable?: (item: any) => boolean;
}
export declare class GridRowSelectionMixin {
    private idField;
    private include;
    private grid;
    private options;
    constructor(grid: IDataGrid, options?: GridRowSelectionMixinOptions);
    updateSelectAll(): void;
    clear(): void;
    resetCheckedAndRefresh(): void;
    selectKeys(keys: string[]): void;
    getSelectedKeys(): string[];
    getSelectedAsInt32(): number[];
    getSelectedAsInt64(): number[];
    setSelectedKeys(keys: string[]): void;
    private isSelectable;
    static createSelectColumn(getMixin: () => GridRowSelectionMixin): Slick.Column;
}
export interface GridRadioSelectionMixinOptions {
    selectable?: (item: any) => boolean;
}
export declare class GridRadioSelectionMixin {
    private idField;
    private include;
    private grid;
    private options;
    constructor(grid: IDataGrid, options?: GridRadioSelectionMixinOptions);
    private isSelectable;
    clear(): void;
    resetCheckedAndRefresh(): void;
    getSelectedKey(): string;
    getSelectedAsInt32(): number;
    getSelectedAsInt64(): number;
    setSelectedKey(key: string): void;
    static createSelectColumn(getMixin: () => GridRadioSelectionMixin): Slick.Column;
}
export declare namespace GridSelectAllButtonHelper {
    function update(grid: IDataGrid, getSelected: (p1: any) => boolean): void;
    function define(getGrid: () => IDataGrid, getId: (p1: any) => any, getSelected: (p1: any) => boolean, setSelected: (p1: any, p2: boolean) => void, text?: string, onClick?: () => void): ToolButton;
}
export declare namespace GridUtils {
    function addToggleButton(toolDiv: JQuery, cssClass: string, callback: (p1: boolean) => void, hint: string, initial?: boolean): void;
    function addIncludeDeletedToggle(toolDiv: JQuery, view: Slick.RemoteView<any>, hint?: string, initial?: boolean): void;
    function addQuickSearchInput(toolDiv: JQuery, view: Slick.RemoteView<any>, fields?: QuickSearchField[], onChange?: () => void): void;
    function addQuickSearchInputCustom(container: JQuery, onSearch: (p1: string, p2: string, done: (p3: boolean) => void) => void, fields?: QuickSearchField[]): QuickSearchInput;
    function makeOrderable(grid: Slick.Grid, handleMove: (p1: any, p2: number) => void): void;
    function makeOrderableWithUpdateRequest(grid: IDataGrid, getId: (p1: any) => number, getDisplayOrder: (p1: any) => any, service: string, getUpdateRequest: (p1: number, p2: number) => Serenity.SaveRequest<any>): void;
}
export declare namespace PropertyItemSlickConverter {
    function toSlickColumns(items: Serenity.PropertyItem[]): Slick.Column[];
    function toSlickColumn(item: Serenity.PropertyItem): Slick.Column;
}
export declare namespace SlickFormatting {
    function getEnumText(enumKey: string, name: string): string;
    function treeToggle<TItem>(getView: () => Slick.RemoteView<TItem>, getId: (x: TItem) => any, formatter: Slick.Format): Slick.Format;
    function date(format?: string): Slick.Format;
    function dateTime(format?: string): Slick.Format;
    function checkBox(): Slick.Format;
    function number(format: string): Slick.Format;
    function getItemType(link: JQuery): string;
    function getItemId(link: JQuery): string;
    function itemLinkText(itemType: string, id: any, text: any, extraClass: string, encode: boolean): string;
    function itemLink(itemType: string, idField: string, getText: Slick.Format, cssClass?: Slick.Format, encode?: boolean): Slick.Format;
}
export declare namespace SlickHelper {
    function setDefaults(columns: Slick.Column[], localTextPrefix?: string): any;
    function convertToFormatter(format: Slick.Format): Slick.ColumnFormatter;
}
export declare namespace SlickTreeHelper {
    function filterCustom<TItem>(item: TItem, getParent: (x: TItem) => any): boolean;
    function filterById<TItem>(item: TItem, view: Slick.RemoteView<TItem>, getParentId: (x: TItem) => any): boolean;
    function setCollapsed<TItem>(items: TItem[], collapsed: boolean): void;
    function setCollapsedFlag<TItem>(item: TItem, collapsed: boolean): void;
    function setIndents<TItem>(items: TItem[], getId: (x: TItem) => any, getParentId: (x: TItem) => any, setCollapsed?: boolean): void;
    function toggleClick<TItem>(e: JQueryEventObject, row: number, cell: number, view: Slick.RemoteView<TItem>, getId: (x: TItem) => any): void;
}
