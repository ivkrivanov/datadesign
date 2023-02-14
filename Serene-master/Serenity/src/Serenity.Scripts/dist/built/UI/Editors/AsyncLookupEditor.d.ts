import { LookupEditorBase, LookupEditorOptions } from "./LookupEditor";
export declare class AsyncLookupEditor extends LookupEditorBase<LookupEditorOptions, any> {
    constructor(hidden: JQuery, opt: LookupEditorOptions);
    getLookupKey(): string;
}
