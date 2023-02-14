import { IReadOnly, IStringValue } from "../../Interfaces";
import { Widget } from "../Widgets/Widget";
export interface HtmlContentEditorOptions {
    cols?: any;
    rows?: any;
}
export interface CKEditorConfig {
}
export declare class HtmlContentEditor extends Widget<HtmlContentEditorOptions> implements IStringValue, IReadOnly {
    private _instanceReady;
    constructor(textArea: JQuery, opt?: HtmlContentEditorOptions);
    protected instanceReady(x: any): void;
    protected getLanguage(): string;
    protected getConfig(): CKEditorConfig;
    protected getEditorInstance(): any;
    destroy(): void;
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    static CKEditorVer: string;
    static CKEditorBasePath: string;
    static getCKEditorBasePath(): string;
    static includeCKEditor(): void;
}
export declare class HtmlNoteContentEditor extends HtmlContentEditor {
    constructor(textArea: JQuery, opt?: HtmlContentEditorOptions);
    protected getConfig(): CKEditorConfig;
}
export declare class HtmlReportContentEditor extends HtmlContentEditor {
    constructor(textArea: JQuery, opt?: HtmlContentEditorOptions);
    protected getConfig(): CKEditorConfig;
}
