import { Select2CommonOptions, Select2Editor } from "./Select2Editor";
export declare class SelectEditor extends Select2Editor<SelectEditorOptions, Select2Item> {
    constructor(hidden: JQuery, opt?: SelectEditorOptions);
    getItems(): any[];
    protected emptyItemText(): string;
    updateItems(): void;
}
export interface SelectEditorOptions extends Select2CommonOptions {
    items?: any[];
    emptyOptionText?: string;
}
