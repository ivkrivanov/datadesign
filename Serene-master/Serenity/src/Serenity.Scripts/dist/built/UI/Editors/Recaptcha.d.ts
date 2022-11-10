import { IStringValue } from "../../Interfaces";
import { Widget } from "../Widgets/Widget";
export interface RecaptchaOptions {
    siteKey?: string;
    language?: string;
}
export declare class Recaptcha extends Widget<RecaptchaOptions> implements IStringValue {
    constructor(div: JQuery, opt: RecaptchaOptions);
    get_value(): string;
    set_value(value: string): void;
}
