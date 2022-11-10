/// <reference types="jquery" />
import { IEditDialog, IGetEditValue, IReadOnly } from "../../Interfaces";
import { ISetEditValue, IStringValue } from "../../Interfaces";
import { Widget } from "../Widgets/Widget";
import { CascadedWidgetLink } from "./CascadedWidgetLink";
export interface Select2CommonOptions {
    allowClear?: boolean;
    delimited?: boolean;
    minimumResultsForSearch?: any;
    multiple?: boolean;
}
export interface Select2FilterOptions {
    cascadeFrom?: string;
    cascadeField?: string;
    cascadeValue?: any;
    filterField?: string;
    filterValue?: any;
}
export interface Select2InplaceAddOptions {
    inplaceAdd?: boolean;
    inplaceAddPermission?: string;
    dialogType?: string;
    autoComplete?: boolean;
}
export interface Select2EditorOptions extends Select2FilterOptions, Select2InplaceAddOptions, Select2CommonOptions {
}
export interface Select2SearchPromise {
    abort?(): void;
    catch?(callback: () => void): void;
    fail?(callback: () => void): void;
}
export interface Select2SearchQuery {
    searchTerm?: string;
    idList?: string[];
    skip?: number;
    take?: number;
    checkMore?: boolean;
}
export interface Select2SearchResult<TItem> {
    items: TItem[];
    more: boolean;
}
export declare class Select2Editor<TOptions, TItem> extends Widget<TOptions> implements ISetEditValue, IGetEditValue, IStringValue, IReadOnly {
    private _items;
    private _itemById;
    protected lastCreateTerm: string;
    constructor(hidden: JQuery, opt?: any);
    destroy(): void;
    protected hasAsyncSource(): boolean;
    protected asyncSearch(query: Select2SearchQuery, results: (result: Select2SearchResult<TItem>) => void): Select2SearchPromise;
    protected getTypeDelay(): any;
    protected emptyItemText(): string;
    protected getPageSize(): number;
    protected getIdField(): any;
    protected itemId(item: TItem): string;
    protected getTextField(): any;
    protected itemText(item: TItem): string;
    protected itemDisabled(item: TItem): boolean;
    protected mapItem(item: TItem): Select2Item;
    protected mapItems(items: TItem[]): Select2Item[];
    protected allowClear(): boolean;
    protected isMultiple(): boolean;
    protected getSelect2Options(): Select2Options;
    get_delimited(): boolean;
    get items(): Select2Item[];
    set items(value: Select2Item[]);
    protected get itemById(): {
        [key: string]: Select2Item;
    };
    protected set itemById(value: {
        [key: string]: Select2Item;
    });
    clearItems(): void;
    addItem(item: Select2Item): void;
    addOption(key: string, text: string, source?: any, disabled?: boolean): void;
    protected addInplaceCreate(addTitle: string, editTitle: string): void;
    protected useInplaceAdd(): boolean;
    protected isAutoComplete(): boolean;
    getCreateSearchChoice(getName: (z: any) => string): (s: string) => {
        id: string;
        text: string;
    };
    setEditValue(source: any, property: Serenity.PropertyItem): void;
    getEditValue(property: Serenity.PropertyItem, target: any): void;
    protected get_select2Container(): JQuery;
    protected get_items(): Select2Item[];
    protected get_itemByKey(): {
        [key: string]: Select2Item;
    };
    static filterByText<TItem>(items: TItem[], getText: (item: TItem) => string, term: string): TItem[];
    get_value(): any;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    get selectedItem(): TItem;
    get selectedItems(): TItem[];
    protected get_values(): string[];
    get values(): string[];
    protected set_values(value: string[]): void;
    set values(value: string[]);
    protected get_text(): string;
    get text(): string;
    get_readOnly(): boolean;
    get readOnly(): boolean;
    private updateInplaceReadOnly;
    set_readOnly(value: boolean): void;
    set readOnly(value: boolean);
    protected getCascadeFromValue(parent: Widget<any>): any;
    protected cascadeLink: CascadedWidgetLink<Widget<any>>;
    protected setCascadeFrom(value: string): void;
    protected get_cascadeFrom(): string;
    get cascadeFrom(): string;
    protected set_cascadeFrom(value: string): void;
    set cascadeFrom(value: string);
    protected get_cascadeField(): string;
    get cascadeField(): string;
    protected set_cascadeField(value: string): void;
    set cascadeField(value: string);
    protected get_cascadeValue(): any;
    get cascadeValue(): any;
    protected set_cascadeValue(value: any): void;
    set cascadeValue(value: any);
    protected get_filterField(): string;
    get filterField(): string;
    protected set_filterField(value: string): void;
    set filterField(value: string);
    protected get_filterValue(): any;
    get filterValue(): any;
    protected set_filterValue(value: any): void;
    set filterValue(value: any);
    protected cascadeItems(items: TItem[]): TItem[];
    protected filterItems(items: TItem[]): TItem[];
    protected updateItems(): void;
    protected getDialogTypeKey(): string;
    protected createEditDialog(callback: (dlg: IEditDialog) => void): void;
    onInitNewEntity: (entity: TItem) => void;
    protected initNewEntity(entity: TItem): void;
    protected setEditDialogReadOnly(dialog: any): void;
    protected editDialogDataChange(): void;
    protected setTermOnNewEntity(entity: TItem, term: string): void;
    protected inplaceCreateClick(e: JQueryEventObject): void;
    openDialogAsPanel: boolean;
}
