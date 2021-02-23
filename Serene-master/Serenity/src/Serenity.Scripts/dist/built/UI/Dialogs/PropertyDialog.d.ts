/// <reference types="jqueryui" />
import { PropertyGrid, PropertyGridOptions } from "../Widgets/PropertyGrid";
import { TemplatedDialog } from "./TemplatedDialog";
export declare class PropertyDialog<TItem, TOptions> extends TemplatedDialog<TOptions> {
    protected _entity: TItem;
    protected _entityId: any;
    constructor(opt?: TOptions);
    destroy(): void;
    protected getDialogOptions(): JQueryUI.DialogOptions;
    protected getDialogButtons(): {
        text: string;
        click: () => void;
    }[];
    protected okClick(): void;
    protected okClickValidated(): void;
    protected cancelClick(): void;
    protected initPropertyGrid(): void;
    protected getFormKey(): string;
    protected getPropertyGridOptions(): PropertyGridOptions;
    protected getPropertyItems(): Serenity.PropertyItem[];
    protected getSaveEntity(): TItem;
    protected loadInitialEntity(): void;
    protected get_entity(): TItem;
    protected set_entity(value: TItem): void;
    protected get_entityId(): any;
    protected set_entityId(value: any): void;
    protected validateBeforeSave(): boolean;
    protected updateTitle(): void;
    protected propertyGrid: PropertyGrid;
}
