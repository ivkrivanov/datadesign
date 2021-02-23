/// <reference types="jquery" />
import { IReadOnly, IStringValue } from "../../Interfaces";
import { Widget } from "../Widgets/Widget";
export declare let datePickerIconSvg: string;
export declare class DateEditor extends Widget<any> implements IStringValue, IReadOnly {
    private minValue;
    private maxValue;
    private minDate;
    private maxDate;
    private sqlMinMax;
    constructor(input: JQuery);
    static useFlatpickr: boolean;
    static flatPickrOptions(input: JQuery): {
        clickOpens: boolean;
        allowInput: boolean;
        dateFormat: string;
        onChange: () => void;
    };
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    private get_valueAsDate;
    get valueAsDate(): Date;
    private set_valueAsDate;
    set valueAsDate(v: Date);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    yearRange: string;
    get_minValue(): string;
    set_minValue(value: string): void;
    get_maxValue(): string;
    set_maxValue(value: string): void;
    get_minDate(): Date;
    set_minDate(value: Date): void;
    get_maxDate(): Date;
    set_maxDate(value: Date): void;
    get_sqlMinMax(): boolean;
    set_sqlMinMax(value: boolean): void;
    static dateInputChange: (e: JQueryEventObject) => void;
    static flatPickrTrigger(input: JQuery): JQuery;
    static dateInputKeyup(e: JQueryEventObject): void;
}
