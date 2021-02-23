import { IDoubleValue } from "../../Interfaces";
import { Widget } from "../Widgets/Widget";
export interface DecimalEditorOptions {
    minValue?: string;
    maxValue?: string;
    decimals?: any;
    padDecimals?: any;
    allowNegatives?: boolean;
}
export declare class DecimalEditor extends Widget<DecimalEditorOptions> implements IDoubleValue {
    constructor(input: JQuery, opt?: DecimalEditorOptions);
    get_value(): number;
    get value(): number;
    set_value(value: number): void;
    set value(v: number);
    get_isValid(): boolean;
    static defaultAutoNumericOptions(): any;
}
