import { Select2Editor, Select2EditorOptions, Select2SearchPromise, Select2SearchQuery, Select2SearchResult } from "./Select2Editor";
export interface LookupEditorOptions extends Select2EditorOptions {
    lookupKey?: string;
    async?: boolean;
}
export declare class LookupEditorBase<TOptions extends LookupEditorOptions, TItem> extends Select2Editor<TOptions, TItem> {
    constructor(input: JQuery, opt?: TOptions);
    hasAsyncSource(): boolean;
    destroy(): void;
    protected getLookupKey(): string;
    protected lookup: Q.Lookup<TItem>;
    protected getLookupAsync(): PromiseLike<Q.Lookup<TItem>>;
    protected getLookup(): Q.Lookup<TItem>;
    protected getItems(lookup: Q.Lookup<TItem>): TItem[];
    protected getIdField(): any;
    protected getItemText(item: TItem, lookup: Q.Lookup<TItem>): any;
    protected mapItem(item: TItem): Select2Item;
    protected getItemDisabled(item: TItem, lookup: Q.Lookup<TItem>): boolean;
    updateItems(): void;
    protected asyncSearch(query: Select2SearchQuery, results: (result: Select2SearchResult<TItem>) => void): Select2SearchPromise;
    protected getDialogTypeKey(): string;
    protected setCreateTermOnNewEntity(entity: TItem, term: string): void;
    protected editDialogDataChange(): void;
}
export declare class LookupEditor extends LookupEditorBase<LookupEditorOptions, any> {
    constructor(hidden: JQuery, opt?: LookupEditorOptions);
}
