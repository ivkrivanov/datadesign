export declare class EnumKeyAttribute {
    value: string;
    constructor(value: string);
}
export declare class DisplayNameAttribute {
    displayName: string;
    constructor(displayName: string);
}
export declare class CategoryAttribute {
    category: string;
    constructor(category: string);
}
export declare class ColumnsKeyAttribute {
    value: string;
    constructor(value: string);
}
export declare class CssClassAttribute {
    cssClass: string;
    constructor(cssClass: string);
}
export declare class DefaultValueAttribute {
    value: any;
    constructor(value: any);
}
export declare class DialogTypeAttribute {
    value: any;
    constructor(value: any);
}
export declare class EditorAttribute {
    constructor();
    key: string;
}
export declare class EditorOptionAttribute {
    key: string;
    value: any;
    constructor(key: string, value: any);
}
export declare class EditorTypeAttributeBase {
    editorType: string;
    constructor(editorType: string);
    setParams(editorParams: any): void;
}
export declare class EditorTypeAttribute extends EditorTypeAttributeBase {
    constructor(editorType: string);
}
export declare class ElementAttribute {
    value: string;
    constructor(value: string);
}
export declare class EntityTypeAttribute {
    value: string;
    constructor(value: string);
}
export declare class FilterableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare class FlexifyAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare class FormKeyAttribute {
    value: string;
    constructor(value: string);
}
export declare class GeneratedCodeAttribute {
    origin?: string;
    constructor(origin?: string);
}
export declare class HiddenAttribute {
    constructor();
}
export declare class HintAttribute {
    hint: string;
    constructor(hint: string);
}
export declare class IdPropertyAttribute {
    value: string;
    constructor(value: string);
}
export declare class InsertableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare class IsActivePropertyAttribute {
    value: string;
    constructor(value: string);
}
export declare class ItemNameAttribute {
    value: string;
    constructor(value: string);
}
export declare class LocalTextPrefixAttribute {
    value: string;
    constructor(value: string);
}
export declare class MaximizableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare class MaxLengthAttribute {
    maxLength: number;
    constructor(maxLength: number);
}
export declare class NamePropertyAttribute {
    value: string;
    constructor(value: string);
}
export declare class OneWayAttribute {
}
export declare class OptionAttribute {
}
export declare class OptionsTypeAttribute {
    value: Function;
    constructor(value: Function);
}
export declare class PanelAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare class PlaceholderAttribute {
    value: string;
    constructor(value: string);
}
export declare class ReadOnlyAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare class RequiredAttribute {
    isRequired: boolean;
    constructor(isRequired?: boolean);
}
export declare class ResizableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare class ResponsiveAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare class ServiceAttribute {
    value: string;
    constructor(value: string);
}
export declare class UpdatableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
export declare namespace Decorators {
    function registerClass(nameOrIntf?: string | any[], intf2?: any[]): (target: Function) => void;
    function registerInterface(nameOrIntf?: string | any[], intf2?: any[]): (target: Function) => void;
    function registerEditor(nameOrIntf?: string | any[], intf2?: any[]): (target: Function) => void;
    function registerEnum(target: any, enumKey?: string, name?: string): void;
    function registerEnumType(target: any, name?: string, enumKey?: string): void;
    function registerFormatter(nameOrIntf?: string | any[], intf2?: any[]): (target: Function) => void;
    function enumKey(value: string): (target: Function) => void;
    function option(): (target: Object, propertyKey: string) => void;
    function dialogType(value: any): (target: Function) => void;
    function editor(key?: string): (target: Function) => void;
    function element(value: string): (target: Function) => void;
    function filterable(value?: boolean): (target: Function) => void;
    function flexify(value?: boolean): (target: Function) => void;
    function itemName(value: string): (target: Function) => void;
    function maximizable(value?: boolean): (target: Function) => void;
    function optionsType(value: Function): (target: Function) => void;
    function panel(value?: boolean): (target: Function) => void;
    function resizable(value?: boolean): (target: Function) => void;
    function responsive(value?: boolean): (target: Function) => void;
    function service(value: string): (target: Function) => void;
}
