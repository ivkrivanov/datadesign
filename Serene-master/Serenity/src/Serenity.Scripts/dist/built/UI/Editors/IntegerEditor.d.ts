import { IDoubleValue } from "../../Interfaces";
import { Widget } from "../Widgets/Widget";
export interface IntegerEditorOptions {
    minValue?: number;
    maxValue?: number;
    allowNegatives?: boolean;
}
export declare class IntegerEditor extends Widget<IntegerEditorOptions> implements IDoubleValue {
    constructor(input: JQuery, opt?: IntegerEditorOptions);
    get_value(): number;
    get value(): number;
    set_value(value: number): void;
    set value(v: number);
    get_isValid(): boolean;
}
