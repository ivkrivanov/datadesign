/// <reference types="jquery" />
import { FilterLine } from "./FilterLine";
export declare class FilterStore {
    constructor(fields: Serenity.PropertyItem[]);
    static getCriteriaFor(items: FilterLine[]): any[];
    static getDisplayTextFor(items: FilterLine[]): string;
    private changed;
    private displayText;
    private fields;
    private fieldByName;
    private items;
    get_fields(): Serenity.PropertyItem[];
    get_fieldByName(): {
        [key: string]: Serenity.PropertyItem;
    };
    get_items(): FilterLine[];
    raiseChanged(): void;
    add_changed(value: (e: JQueryEventObject, a: any) => void): void;
    remove_changed(value: (e: JQueryEventObject, a: any) => void): void;
    get_activeCriteria(): any[];
    get_displayText(): string;
}
