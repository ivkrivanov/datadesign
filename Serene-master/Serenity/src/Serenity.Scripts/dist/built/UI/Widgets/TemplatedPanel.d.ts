/// <reference types="jquery.validation" />
import { TemplatedWidget } from "./TemplatedWidget";
import { Toolbar, ToolButton } from "./Toolbar";
export declare class TemplatedPanel<TOptions> extends TemplatedWidget<TOptions> {
    constructor(container: JQuery, options?: TOptions);
    destroy(): void;
    protected tabs: JQuery;
    protected toolbar: Toolbar;
    protected validator: JQueryValidation.Validator;
    protected isPanel: boolean;
    protected responsive: boolean;
    protected arrange(): void;
    protected getToolbarButtons(): ToolButton[];
    protected getValidatorOptions(): JQueryValidation.ValidationOptions;
    protected initTabs(): void;
    protected initToolbar(): void;
    protected initValidator(): void;
    protected resetValidation(): void;
    protected validateForm(): boolean;
}
