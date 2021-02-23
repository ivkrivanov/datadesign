import { Widget } from "../Widgets/Widget";
export interface TimeEditorOptions {
    noEmptyOption?: boolean;
    startHour?: any;
    endHour?: any;
    intervalMinutes?: any;
}
export declare class TimeEditor extends Widget<TimeEditorOptions> {
    private minutes;
    constructor(input: JQuery, opt?: TimeEditorOptions);
    get value(): number;
    protected get_value(): number;
    set value(value: number);
    protected set_value(value: number): void;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
}
