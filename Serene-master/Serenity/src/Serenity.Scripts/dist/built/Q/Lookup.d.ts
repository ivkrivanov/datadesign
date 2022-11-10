export interface LookupOptions<TItem> {
    idField?: string;
    parentIdField?: string;
    textField?: string;
    textFormatter?(item: TItem): string;
}
declare global {
    namespace Q {
        interface Lookup<TItem> {
            items: TItem[];
            itemById: {
                [key: string]: TItem;
            };
            idField: string;
            parentIdField: string;
            textField: string;
            textFormatter: (item: TItem) => string;
        }
    }
}
export declare class Lookup<TItem> {
    items: TItem[];
    itemById: {
        [key: string]: TItem;
    };
    idField: string;
    parentIdField: string;
    textField: string;
    textFormatter: (item: TItem) => string;
    constructor(options: LookupOptions<TItem>, items?: TItem[]);
    update(value: TItem[]): void;
    protected get_idField(): string;
    protected get_parentIdField(): string;
    protected get_textField(): string;
    protected get_textFormatter(): (item: TItem) => string;
    protected get_itemById(): {
        [key: string]: TItem;
    };
    protected get_items(): TItem[];
}
