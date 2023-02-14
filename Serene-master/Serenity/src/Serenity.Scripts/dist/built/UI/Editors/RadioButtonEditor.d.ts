import { IReadOnly } from "../../Interfaces";
import { Widget } from "../Widgets/Widget";
export interface RadioButtonEditorOptions {
    enumKey?: string;
    enumType?: any;
    lookupKey?: string;
}
export declare class RadioButtonEditor extends Widget<RadioButtonEditorOptions> implements IReadOnly {
    constructor(input: JQuery, opt: RadioButtonEditorOptions);
    protected addRadio(value: string, text: string): void;
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
}
