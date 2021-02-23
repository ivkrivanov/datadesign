import { ArgumentNullException } from "../../Q/System";
import { DateEditor } from "../Editors/DateEditor";
import { DecimalEditor } from "../Editors/DecimalEditor";
import { EnumEditor } from "../Editors/EnumEditor";
import { IntegerEditor } from "../Editors/IntegerEditor";
import { LookupEditor } from "../Editors/LookupEditor";
import { ServiceLookupEditor } from "../Editors/ServiceLookupEditor";
import { Widget } from "../Widgets/Widget";
import { FilterOperator } from "./FilterOperator";
import { QuickFilter } from "../DataGrid/QuickFilter";
export interface IFiltering {
    createEditor(): void;
    getCriteria(): CriteriaWithText;
    getOperators(): FilterOperator[];
    loadState(state: any): void;
    saveState(): any;
    get_field(): Serenity.PropertyItem;
    set_field(value: Serenity.PropertyItem): void;
    get_container(): JQuery;
    set_container(value: JQuery): void;
    get_operator(): FilterOperator;
    set_operator(value: FilterOperator): void;
}
export declare class IFiltering {
}
export interface CriteriaWithText {
    criteria?: any[];
    displayText?: string;
}
export interface IQuickFiltering {
    initQuickFilter(filter: QuickFilter<Widget<any>, any>): void;
}
export declare class IQuickFiltering {
}
export declare abstract class BaseFiltering implements IFiltering, IQuickFiltering {
    private field;
    get_field(): Serenity.PropertyItem;
    set_field(value: Serenity.PropertyItem): void;
    private container;
    get_container(): JQuery;
    set_container(value: JQuery): void;
    private operator;
    get_operator(): FilterOperator;
    set_operator(value: FilterOperator): void;
    abstract getOperators(): FilterOperator[];
    protected appendNullableOperators(list: FilterOperator[]): FilterOperator[];
    protected appendComparisonOperators(list: FilterOperator[]): FilterOperator[];
    protected isNullable(): boolean;
    createEditor(): void;
    protected operatorFormat(op: FilterOperator): string;
    protected getTitle(field: Serenity.PropertyItem): string;
    protected displayText(op: FilterOperator, values?: any[]): string;
    protected getCriteriaField(): string;
    getCriteria(): CriteriaWithText;
    loadState(state: any): void;
    saveState(): any;
    protected argumentNull(): ArgumentNullException;
    validateEditorValue(value: string): string;
    getEditorValue(): string;
    getEditorText(): any;
    initQuickFilter(filter: QuickFilter<Widget<any>, any>): void;
}
export declare abstract class BaseEditorFiltering<TEditor extends Widget<any>> extends BaseFiltering {
    editorType: any;
    constructor(editorType: any);
    protected useEditor(): boolean;
    protected editor: TEditor;
    createEditor(): void;
    protected useIdField(): boolean;
    getCriteriaField(): string;
    getEditorOptions(): any;
    loadState(state: any): void;
    saveState(): any;
    getEditorValue(): any;
    initQuickFilter(filter: QuickFilter<Widget<any>, any>): void;
}
export declare class DateFiltering extends BaseEditorFiltering<DateEditor> {
    constructor();
    getOperators(): FilterOperator[];
}
export declare class BooleanFiltering extends BaseFiltering {
    getOperators(): FilterOperator[];
}
export declare class DateTimeFiltering extends BaseEditorFiltering<DateEditor> {
    constructor();
    getOperators(): FilterOperator[];
    getCriteria(): CriteriaWithText;
}
export declare class DecimalFiltering extends BaseEditorFiltering<DecimalEditor> {
    constructor();
    getOperators(): FilterOperator[];
}
export declare class EditorFiltering extends BaseEditorFiltering<Widget<any>> {
    constructor();
    editorType: string;
    useRelative: boolean;
    useLike: boolean;
    getOperators(): FilterOperator[];
    protected useEditor(): boolean;
    getEditorOptions(): any;
    createEditor(): void;
    protected useIdField(): boolean;
    initQuickFilter(filter: QuickFilter<Widget<any>, any>): void;
}
export declare class EnumFiltering extends BaseEditorFiltering<EnumEditor> {
    constructor();
    getOperators(): FilterOperator[];
}
export declare class IntegerFiltering extends BaseEditorFiltering<IntegerEditor> {
    constructor();
    getOperators(): FilterOperator[];
}
export declare class LookupFiltering extends BaseEditorFiltering<LookupEditor> {
    constructor();
    getOperators(): FilterOperator[];
    protected useEditor(): boolean;
    protected useIdField(): boolean;
    getEditorText(): string;
}
export declare class ServiceLookupFiltering extends BaseEditorFiltering<ServiceLookupEditor> {
    constructor();
    getOperators(): FilterOperator[];
    protected useEditor(): boolean;
    protected useIdField(): boolean;
    getEditorText(): string;
}
export declare class StringFiltering extends BaseFiltering {
    getOperators(): FilterOperator[];
    validateEditorValue(value: string): string;
}
export declare namespace FilteringTypeRegistry {
    function get(key: string): Function;
}
