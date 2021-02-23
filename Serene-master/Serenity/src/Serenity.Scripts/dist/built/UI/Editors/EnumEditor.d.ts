import { Select2CommonOptions, Select2Editor } from "./Select2Editor";
export interface EnumEditorOptions extends Select2CommonOptions {
    enumKey?: string;
    enumType?: any;
}
export declare class EnumEditor extends Select2Editor<EnumEditorOptions, Select2Item> {
    constructor(hidden: JQuery, opt: EnumEditorOptions);
    protected updateItems(): void;
    protected allowClear(): boolean;
}
