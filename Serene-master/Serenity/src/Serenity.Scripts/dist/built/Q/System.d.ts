export declare type Dictionary<TItem> = {
    [key: string]: TItem;
};
export declare function coalesce(a: any, b: any): any;
export declare function isValue(a: any): boolean;
export declare let today: () => Date;
export declare function extend<T = any>(a: T, b: T): T;
export declare function deepClone<T = any>(a: T, a2?: any, a3?: any): T;
export declare type Type = Function | Object;
export interface TypeMember {
    name: string;
    type: MemberType;
    attr?: any[];
    getter?: string;
    setter?: string;
}
export declare function getNested(from: any, name: string): any;
export declare function getType(name: string, target?: any): Type;
export declare function getTypeFullName(type: Type): string;
export declare function getTypeName(type: Type): string;
export declare function getInstanceType(instance: any): any;
export declare function isAssignableFrom(target: any, type: Type): boolean;
export declare function isInstanceOfType(instance: any, type: Type): boolean;
export declare function safeCast(instance: any, type: Type): any;
export declare function cast(instance: any, type: Type): any;
export declare function getBaseType(type: any): any;
export declare function getAttributes(type: any, attrType: any, inherit?: boolean): any[];
export declare const enum MemberType {
    field = 4,
    property = 16
}
export declare function getMembers(type: any, memberTypes: MemberType): TypeMember[];
export declare function addTypeMember(type: any, member: TypeMember): TypeMember;
export declare function getTypes(from?: any): any[];
export declare function clearKeys(d: any): void;
export declare function delegateCombine(delegate1: any, delegate2: any): any;
export declare namespace Enum {
    let toString: (enumType: any, value: number) => string;
    let getValues: (enumType: any) => any[];
}
export declare let delegateRemove: (delegate1: any, delegate2: any) => any;
export declare let isEnum: (type: any) => boolean;
export declare function initFormType(typ: Function, nameWidgetPairs: any[]): void;
export declare function prop(type: any, name: string, getter?: string, setter?: string): void;
export declare function registerClass(type: any, name: string, intf?: any[]): void;
export declare function registerEnum(type: any, name: string): void;
export declare function registerInterface(type: any, name: string, intf?: any[]): void;
export declare function addAttribute(type: any, attr: any): void;
export declare function setTypeName(target: Type, value: string): void;
export declare class ISlickFormatter {
}
export declare function initializeTypes(root: any, pre: string, limit: number): void;
export declare class Exception extends Error {
    constructor(message: string);
}
export declare class NullReferenceException extends Exception {
    constructor(message?: string);
}
export declare class ArgumentNullException extends Exception {
    constructor(paramName: string, message?: string);
}
export declare class ArgumentOutOfRangeException extends Exception {
    constructor(paramName: string, message?: string);
}
export declare class InvalidCastException extends Exception {
    constructor(message: string);
}
export {};
