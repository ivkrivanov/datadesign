import { PropertyGrid, PropertyGridOptions } from "./PropertyGrid";
import { TemplatedPanel } from "./TemplatedPanel";
export declare class PropertyPanel<TItem, TOptions> extends TemplatedPanel<TOptions> {
    private _entity;
    private _entityId;
    constructor(container: JQuery, options?: TOptions);
    destroy(): void;
    protected initPropertyGrid(): void;
    protected loadInitialEntity(): void;
    protected getFormKey(): string;
    protected getPropertyGridOptions(): PropertyGridOptions;
    protected getPropertyItems(): Serenity.PropertyItem[];
    protected getSaveEntity(): TItem;
    protected get_entity(): TItem;
    protected get_entityId(): any;
    protected set_entity(value: TItem): void;
    protected set_entityId(value: any): void;
    protected validateBeforeSave(): boolean;
    protected propertyGrid: PropertyGrid;
}
