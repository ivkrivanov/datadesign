import { Widget } from "../Widgets/Widget";
export declare class MaskedEditor extends Widget<MaskedEditorOptions> {
    constructor(input: JQuery, opt?: MaskedEditorOptions);
    get value(): string;
    protected get_value(): string;
    set value(value: string);
    protected set_value(value: string): void;
}
export interface MaskedEditorOptions {
    mask?: string;
    placeholder?: string;
}
