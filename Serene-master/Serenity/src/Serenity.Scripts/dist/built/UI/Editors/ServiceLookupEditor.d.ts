import { Select2Editor, Select2EditorOptions, Select2SearchPromise, Select2SearchQuery, Select2SearchResult } from "./Select2Editor";
export interface ServiceLookupEditorOptions extends Select2EditorOptions {
    service?: string;
    idField: string;
    textField: string;
    pageSize?: number;
    minimumResultsForSearch?: any;
    sort: string[];
    columnSelection?: Serenity.ColumnSelection;
    includeColumns?: string[];
    excludeColumns?: string[];
    includeDeleted?: boolean;
    containsField?: string;
    equalityFilter?: any;
    criteria?: any[];
}
export declare class ServiceLookupEditorBase<TOptions extends ServiceLookupEditorOptions, TItem> extends Select2Editor<TOptions, TItem> {
    constructor(input: JQuery, opt?: TOptions);
    protected getDialogTypeKey(): string;
    protected getService(): string;
    protected getServiceUrl(): string;
    protected getIncludeColumns(): string[];
    protected getSort(): any[];
    protected getCascadeCriteria(): any[];
    protected getFilterCriteria(): any[];
    protected getIdListCriteria(idList: any[]): any[];
    protected getCriteria(query: Select2SearchQuery): any[];
    protected getListRequest(query: Select2SearchQuery): Serenity.ListRequest;
    protected getServiceCallOptions(query: Select2SearchQuery, results: (result: Select2SearchResult<TItem>) => void): Serenity.ServiceOptions<Serenity.ListResponse<TItem>>;
    protected hasAsyncSource(): boolean;
    protected asyncSearch(query: Select2SearchQuery, results: (result: Select2SearchResult<TItem>) => void): Select2SearchPromise;
}
export declare class ServiceLookupEditor extends ServiceLookupEditorBase<ServiceLookupEditorOptions, any> {
    constructor(hidden: JQuery, opt?: ServiceLookupEditorOptions);
}
