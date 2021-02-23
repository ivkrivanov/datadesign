import { FilterWidgetBase } from "./FilterWidgetBase";
export declare class FilterDisplayBar extends FilterWidgetBase<any> {
    constructor(div: JQuery);
    protected filterStoreChanged(): void;
    protected getTemplate(): string;
}
