import { SelectEditor, SelectEditorOptions } from "./SelectEditor";
export declare class DateYearEditor extends SelectEditor {
    constructor(hidden: JQuery, opt: DateYearEditorOptions);
    getItems(): any[];
}
export interface DateYearEditorOptions extends SelectEditorOptions {
    minYear?: string;
    maxYear?: string;
    descending?: boolean;
}
