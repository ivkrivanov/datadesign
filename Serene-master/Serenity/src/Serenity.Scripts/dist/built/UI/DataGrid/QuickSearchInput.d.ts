import { Widget } from "../Widgets/Widget";
export interface QuickSearchField {
    name: string;
    title: string;
}
export interface QuickSearchInputOptions {
    typeDelay?: number;
    loadingParentClass?: string;
    filteredParentClass?: string;
    onSearch?: (p1: string, p2: string, p3: (p1: boolean) => void) => void;
    fields?: QuickSearchField[];
}
export declare class QuickSearchInput extends Widget<QuickSearchInputOptions> {
    private lastValue;
    private field;
    private fieldChanged;
    private timer;
    constructor(input: JQuery, opt: QuickSearchInputOptions);
    protected checkIfValueChanged(): void;
    get_value(): string;
    get_field(): QuickSearchField;
    set_field(value: QuickSearchField): void;
    protected updateInputPlaceHolder(): void;
    restoreState(value: string, field: QuickSearchField): void;
    protected searchNow(value: string): void;
}
