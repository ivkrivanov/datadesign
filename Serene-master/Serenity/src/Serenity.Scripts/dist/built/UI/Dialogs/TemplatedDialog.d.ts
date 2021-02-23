/// <reference types="jquery.validation" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
import { DialogButton } from "../../Q/Dialogs";
import { TemplatedWidget } from "../Widgets/TemplatedWidget";
import { Toolbar, ToolButton } from "../Widgets/Toolbar";
export declare class TemplatedDialog<TOptions> extends TemplatedWidget<TOptions> {
    protected tabs: JQuery;
    protected toolbar: Toolbar;
    protected validator: JQueryValidation.Validator;
    constructor(options?: TOptions);
    private get isMarkedAsPanel();
    private get isResponsive();
    private static getCssSize;
    private static applyCssSizes;
    destroy(): void;
    protected initDialog(): void;
    protected getModalOptions(): ModalOptions;
    protected initModal(): void;
    protected initToolbar(): void;
    protected getToolbarButtons(): ToolButton[];
    protected getValidatorOptions(): JQueryValidation.ValidationOptions;
    protected initValidator(): void;
    protected resetValidation(): void;
    protected validateForm(): boolean;
    dialogOpen(asPanel?: boolean): void;
    private useBSModal;
    static bootstrapModal: boolean;
    static openPanel(element: JQuery, uniqueName: string): void;
    static closePanel(element: JQuery, e?: JQueryEventObject): void;
    protected onDialogOpen(): void;
    protected arrange(): void;
    protected onDialogClose(): void;
    protected addCssClass(): void;
    protected getDialogButtons(): DialogButton[];
    protected getDialogOptions(): JQueryUI.DialogOptions;
    protected getDialogTitle(): string;
    dialogClose(): void;
    get dialogTitle(): string;
    private setupPanelTitle;
    set dialogTitle(value: string);
    set_dialogTitle(value: string): void;
    protected initTabs(): void;
    protected handleResponsive(): void;
}
export interface ModalOptions {
    backdrop?: boolean | 'static';
    keyboard?: boolean;
    size?: 'lg' | 'sm';
    modalClass?: string;
}
