import { Widget } from "../Widgets/Widget";
export declare class StringEditor extends Widget<any> {
    constructor(input: JQuery);
    get value(): string;
    protected get_value(): string;
    set value(value: string);
    protected set_value(value: string): void;
}
