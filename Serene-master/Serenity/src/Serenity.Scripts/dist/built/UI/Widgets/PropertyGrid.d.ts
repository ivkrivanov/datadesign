import { Widget } from "./Widget";
export declare class PropertyGrid extends Widget<PropertyGridOptions> {
    private editors;
    private items;
    constructor(div: JQuery, opt: PropertyGridOptions);
    destroy(): void;
    private createItems;
    private createCategoryDiv;
    private categoryLinkClick;
    private determineText;
    private createField;
    private getCategoryOrder;
    private createCategoryLinks;
    get_editors(): Widget<any>[];
    get_items(): Serenity.PropertyItem[];
    get_idPrefix(): string;
    get_mode(): PropertyGridMode;
    set_mode(value: PropertyGridMode): void;
    static loadEditorValue(editor: Widget<any>, item: Serenity.PropertyItem, source: any): void;
    static saveEditorValue(editor: Widget<any>, item: Serenity.PropertyItem, target: any): void;
    private static setReadOnly;
    private static setReadonly;
    private static setRequired;
    private static setMaxLength;
    load(source: any): void;
    save(target?: any): any;
    get value(): any;
    set value(val: any);
    private canModifyItem;
    updateInterface(): void;
    enumerateItems(callback: (p1: Serenity.PropertyItem, p2: Widget<any>) => void): void;
}
export declare const enum PropertyGridMode {
    insert = 1,
    update = 2
}
export interface PropertyGridOptions {
    idPrefix?: string;
    items?: Serenity.PropertyItem[];
    useCategories?: boolean;
    categoryOrder?: string;
    defaultCategory?: string;
    localTextPrefix?: string;
    mode?: PropertyGridMode;
}
