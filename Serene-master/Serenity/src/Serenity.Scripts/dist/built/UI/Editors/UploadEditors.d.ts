import { IGetEditValue, IReadOnly, ISetEditValue, IValidateRequired } from "../../Interfaces";
import { FileUploadConstraints, UploadedFile, UploadInputOptions } from "../Helpers/UploadHelper";
import { Toolbar, ToolButton } from "../Widgets/Toolbar";
import { Widget } from "../Widgets/Widget";
export interface FileUploadEditorOptions extends FileUploadConstraints {
    displayFileName?: boolean;
    urlPrefix?: string;
}
export interface ImageUploadEditorOptions extends FileUploadEditorOptions {
}
export declare class FileUploadEditor extends Widget<FileUploadEditorOptions> implements IReadOnly, IGetEditValue, ISetEditValue, IValidateRequired {
    constructor(div: JQuery, opt: FileUploadEditorOptions);
    protected getUploadInputOptions(): UploadInputOptions;
    protected addFileButtonText(): string;
    protected getToolButtons(): ToolButton[];
    protected populate(): void;
    protected updateInterface(): void;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    get_required(): boolean;
    set_required(value: boolean): void;
    get_value(): UploadedFile;
    get value(): UploadedFile;
    set_value(value: UploadedFile): void;
    set value(v: UploadedFile);
    getEditValue(property: Serenity.PropertyItem, target: any): void;
    setEditValue(source: any, property: Serenity.PropertyItem): void;
    protected entity: UploadedFile;
    protected toolbar: Toolbar;
    protected progress: JQuery;
    protected fileSymbols: JQuery;
    protected uploadInput: JQuery;
    protected hiddenInput: JQuery;
}
export declare class ImageUploadEditor extends FileUploadEditor {
    constructor(div: JQuery, opt: ImageUploadEditorOptions);
}
export declare class MultipleFileUploadEditor extends Widget<FileUploadEditorOptions> implements IReadOnly, IGetEditValue, ISetEditValue, IValidateRequired {
    private entities;
    private toolbar;
    private fileSymbols;
    private uploadInput;
    protected hiddenInput: JQuery;
    constructor(div: JQuery, opt: ImageUploadEditorOptions);
    protected addFileButtonText(): string;
    protected getToolButtons(): ToolButton[];
    protected populate(): void;
    protected updateInterface(): void;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    get_required(): boolean;
    set_required(value: boolean): void;
    get_value(): UploadedFile[];
    get value(): UploadedFile[];
    set_value(value: UploadedFile[]): void;
    set value(v: UploadedFile[]);
    getEditValue(property: Serenity.PropertyItem, target: any): void;
    setEditValue(source: any, property: Serenity.PropertyItem): void;
    jsonEncodeValue: boolean;
}
export declare class MultipleImageUploadEditor extends MultipleFileUploadEditor {
    constructor(div: JQuery, opt: ImageUploadEditorOptions);
}
