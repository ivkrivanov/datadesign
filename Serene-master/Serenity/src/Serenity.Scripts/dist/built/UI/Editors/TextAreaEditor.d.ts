import { Widget } from "../Widgets/Widget";
export interface TextAreaEditorOptions {
    cols?: number;
    rows?: number;
}
export declare class TextAreaEditor extends Widget<TextAreaEditorOptions> {
    constructor(input: JQuery, opt?: TextAreaEditorOptions);
    get value(): string;
    protected get_value(): string;
    set value(value: string);
    protected set_value(value: string): void;
}
