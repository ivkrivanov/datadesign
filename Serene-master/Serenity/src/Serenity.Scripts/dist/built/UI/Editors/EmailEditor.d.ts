import { Widget } from "../Widgets/Widget";
export interface EmailEditorOptions {
    domain?: string;
    readOnlyDomain?: boolean;
}
export declare class EmailEditor extends Widget<EmailEditorOptions> {
    constructor(input: JQuery, opt: EmailEditorOptions);
    static registerValidationMethods(): void;
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
}
