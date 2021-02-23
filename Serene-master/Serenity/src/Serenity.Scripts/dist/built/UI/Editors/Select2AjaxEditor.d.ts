import { IStringValue } from "../../Interfaces";
import { Widget } from "../Widgets/Widget";
export declare class Select2AjaxEditor<TOptions, TItem> extends Widget<TOptions> implements IStringValue {
    pageSize: number;
    constructor(hidden: JQuery, opt: TOptions);
    protected emptyItemText(): string;
    protected getService(): string;
    protected query(request: Serenity.ListRequest, callback: (p1: Serenity.ListResponse<any>) => void): void;
    protected executeQuery(options: Serenity.ServiceOptions<Serenity.ListResponse<any>>): void;
    protected queryByKey(key: string, callback: (p1: any) => void): void;
    protected executeQueryByKey(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<any>>): void;
    protected getItemKey(item: any): string;
    protected getItemText(item: any): string;
    protected getTypeDelay(): number;
    protected getSelect2Options(): Select2Options;
    protected addInplaceCreate(title: string): void;
    protected inplaceCreateClick(e: any): void;
    protected get_select2Container(): JQuery;
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
}
