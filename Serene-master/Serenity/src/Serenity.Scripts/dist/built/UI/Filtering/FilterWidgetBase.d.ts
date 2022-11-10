import { TemplatedWidget } from "../Widgets/TemplatedWidget";
import { FilterStore } from "./FilterStore";
export declare class FilterWidgetBase<TOptions> extends TemplatedWidget<TOptions> {
    private store;
    private onFilterStoreChanged;
    constructor(div: JQuery, opt?: TOptions);
    destroy(): void;
    protected filterStoreChanged(): void;
    get_store(): FilterStore;
    set_store(value: FilterStore): void;
}
