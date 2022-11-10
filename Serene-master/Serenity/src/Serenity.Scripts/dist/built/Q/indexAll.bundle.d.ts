/// <reference types="jquery" />
/// <reference types="jqueryui" />
/// <reference types="toastr" />
/// <reference types="jquery.validation" />
declare type Grouping<TItem> = {
    [key: string]: TItem[];
};
/**
 * Tests if any of array elements matches given predicate
 */
declare function any<TItem>(array: TItem[], predicate: (x: TItem) => boolean): boolean;
/**
 * Counts number of array elements that matches a given predicate
 */
declare function count<TItem>(array: TItem[], predicate: (x: TItem) => boolean): number;
/**
 * Gets first element in an array that matches given predicate.
 * Throws an error if no match is found.
 */
declare function first<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;
/**
 * Gets index of first element in an array that matches given predicate
 */
declare function indexOf<TItem>(array: TItem[], predicate: (x: TItem) => boolean): number;
/**
 * Inserts an item to the array at specified index
 */
declare function insert(obj: any, index: number, item: any): void;
/**
 * Determines if the object is an array
 */
declare function isArray(obj: any): boolean;
/**
* Gets first element in an array that matches given predicate.
* Throws an error if no matches is found, or there are multiple matches.
*/
declare function single<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;
/**
 * Maps an array into a dictionary with keys determined by specified getKey() callback,
 * and values that are arrays containing elements for a particular key.
 */
declare function toGrouping<TItem>(items: TItem[], getKey: (x: TItem) => any): Grouping<TItem>;
declare type Group<TItem> = {
    order: number;
    key: string;
    items: TItem[];
    start: number;
};
declare type Groups<TItem> = {
    byKey: {
        [key: string]: Group<TItem>;
    };
    inOrder: Group<TItem>[];
};
/**
 * Groups an array with keys determined by specified getKey() callback.
 * Resulting object contains group objects in order and a dictionary to access by key.
 */
declare function groupBy<TItem>(items: TItem[], getKey: (x: TItem) => any): Groups<TItem>;
/**
 * Gets first element in an array that matches given predicate.
 * Returns null if no match is found.
 */
declare function tryFirst<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;

interface UserDefinition {
    Username?: string;
    DisplayName?: string;
    IsAdmin?: boolean;
    Permissions?: {
        [key: string]: boolean;
    };
}

declare namespace Authorization {
    function hasPermission(permission: string): boolean;
    function validatePermission(permission: string): void;
}
declare namespace Authorization {
    let isLoggedIn: boolean;
    let username: string;
    let userDefinition: UserDefinition;
}

interface JQBlockUIOptions {
    useTimeout?: boolean;
}
/**
 * Uses jQuery BlockUI plugin to block access to whole page (default) or
 * a part of it, by using a transparent overlay covering the whole area.
 * @param options Parameters for the BlockUI plugin
 * @remarks If options are not specified, this function blocks
 * whole page with a transparent overlay. Default z-order of the overlay
 * div is 2000, so a higher z-order shouldn't be used in page.
 */
declare function blockUI(options: JQBlockUIOptions): void;
declare function blockUndo(): void;

declare var Config: {
    /**
     * This is the root path of your application. If your application resides under http://localhost/mysite/,
     * your root path is "mysite/". This variable is automatically initialized by reading from a <link> element
     * with ID "ApplicationPath" from current page, which is usually located in your _LayoutHead.cshtml file
     */
    applicationPath: string;
    /**
     * Email validation by default only allows ASCII characters. Set this to true if you want to allow unicode.
     */
    emailAllowOnlyAscii: boolean;
    /**
     * Set this to true, to enable responsive dialogs by default, without having to add Decorators.responsive()"
     * on dialog classes manually. It's false by default for backward compatibility.
     */
    responsiveDialogs: boolean;
    /**
     * Set this to true, to prefer bootstrap dialogs over jQuery UI dialogs by default for message dialogs
     */
    bootstrapMessages: boolean;
    /**
     * This is the list of root namespaces that may be searched for types. For example, if you specify an editor type
     * of "MyEditor", first a class with name "MyEditor" will be searched, if not found, search will be followed by
     * "Serenity.MyEditor" and "MyApp.MyEditor" if you added "MyApp" to the list of root namespaces.
     *
     * You should usually add your application root namespace to this list in ScriptInitialization.ts file.
     */
    rootNamespaces: string[];
    /**
     * This is an optional method for handling when user is not logged in. If a users session is expired
     * and when a NotAuthorized response is received from a service call, Serenity will call this handler, so
     * you may intercept it and notify user about this situation and ask if she wants to login again...
     */
    notLoggedInHandler: Function;
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear'
 * that is a function which will clear the timer to prevent previously scheduled executions.
 *
 * @source underscore.js
 */
declare function debounce(func: Function, wait?: number, immediate?: boolean): () => any;

interface DialogButton {
    text?: string;
    hint?: string;
    icon?: string;
    click?: (e: JQueryEventObject) => void;
    cssClass?: string;
    htmlEncode?: boolean;
    result?: string;
}
interface CommonDialogOptions {
    onOpen?: () => void;
    onClose?: (result: string) => void;
    title?: string;
    htmlEncode?: boolean;
    preWrap?: boolean;
    dialogClass?: string;
    buttons?: DialogButton[];
    modalClass?: string;
    bootstrap?: boolean;
    result?: string;
}
interface AlertOptions extends CommonDialogOptions {
    okButton?: string | boolean;
}
declare function isBS3(): boolean;
declare function bsModalMarkup(title: string, body: string, modalClass?: string): string;
declare function dialogButtonToBS(x: DialogButton): string;
declare function dialogButtonToUI(x: DialogButton): JQueryUI.DialogButtonOptions;
declare function alert(message: string, options?: AlertOptions): void;
interface ConfirmOptions extends CommonDialogOptions {
    yesButton?: string | boolean;
    noButton?: string | boolean;
    cancelButton?: string | boolean;
    onCancel?: () => void;
    onNo?: () => void;
}
declare function confirm(message: string, onYes: () => void, options?: ConfirmOptions): void;
interface IFrameDialogOptions {
    html?: string;
}
declare function iframeDialog(options: IFrameDialogOptions): void;
declare function information(message: string, onOk: () => void, options?: ConfirmOptions): void;
declare function warning(message: string, options?: AlertOptions): void;
declare function closePanel(element: JQuery, e?: JQueryEventObject): void;

declare namespace ErrorHandling {
    function showServiceError(error: Serenity.ServiceError): void;
    function runtimeErrorHandler(message: string, filename?: string, lineno?: number, colno?: number, error?: Error): void;
}

interface NumberFormat {
    decimalSeparator: string;
    groupSeparator?: string;
    decimalDigits?: number;
    positiveSign?: string;
    negativeSign?: string;
    nanSymbol?: string;
    percentSymbol?: string;
    currencySymbol?: string;
}
interface DateFormat {
    dateSeparator?: string;
    dateFormat?: string;
    dateOrder?: string;
    dateTimeFormat?: string;
    amDesignator?: string;
    pmDesignator?: string;
    timeSeparator?: string;
    firstDayOfWeek?: number;
    dayNames?: string[];
    shortDayNames?: string[];
    minimizedDayNames?: string[];
    monthNames?: string[];
    shortMonthNames?: string[];
}
interface Locale extends NumberFormat, DateFormat {
    stringCompare?: (a: string, b: string) => number;
    toUpper?: (a: string) => string;
}
declare let Invariant: Locale;
declare function compareStringFactory(order: string): ((a: string, b: string) => number);
declare let Culture: Locale;
declare function turkishLocaleToUpper(a: string): string;
declare let turkishLocaleCompare: (a: string, b: string) => number;
declare function format(format: string, ...prm: any[]): string;
declare function localeFormat(format: string, l: Locale, ...prm: any[]): string;
declare let round: (n: number, d?: number, rounding?: boolean) => number;
declare let trunc: (n: number) => number;
declare function formatNumber(num: number, format?: string, decOrLoc?: string | NumberFormat, grp?: string): string;
declare function parseInteger(s: string): number;
declare function parseDecimal(s: string): number;
declare function toId(id: any): any;
declare function formatDate(d: Date | string, format?: string, locale?: Locale): string;
declare function formatDayHourAndMin(n: number): string;
declare function formatISODateTimeUTC(d: Date): string;
declare function parseISODateTime(s: string): Date;
declare function parseHourAndMin(value: string): number;
declare function parseDayHourAndMin(s: string): number;
declare function parseDate(s: string, dateOrder?: string): any;
declare function splitDateString(s: string): string[];

declare function addOption(select: JQuery, key: string, text: string): void;
declare function addEmptyOption(select: JQuery): void;
declare function clearOptions(select: JQuery): void;
declare function findElementWithRelativeId(element: JQuery, relativeId: string): JQuery;
/**
 * Html attribute encodes a string (encodes quotes in addition to &, > and <)
 * @param s String to be HTML attribute encoded
 */
declare function attrEncode(s: any): string;
/**
 * Html encodes a string
 * @param s String to be HTML encoded
 */
declare function htmlEncode(s: any): string;
declare function jsRender(markup: string, data?: any): any;
declare function log(m: any): void;
declare function newBodyDiv(): JQuery;
declare function outerHtml(element: JQuery): string;

declare namespace LayoutTimer {
    function store(key: number): void;
    function trigger(key: number): void;
    function onSizeChange(element: () => HTMLElement, handler: () => void, width?: boolean, height?: boolean): number;
    function onWidthChange(element: () => HTMLElement, handler: () => void): number;
    function onHeightChange(element: () => HTMLElement, handler: () => void): number;
    function onShown(element: () => HTMLElement, handler: () => void): number;
    function off(key: number): number;
}

declare function text(key: string): string;
declare function dbText(prefix: string): ((key: string) => string);
declare function prefixedText(prefix: string): (text: string, key: string | ((p?: string) => string)) => string;
declare function tryGetText(key: string): string;
declare function dbTryText(prefix: string): ((key: string) => string);
declare function proxyTexts(o: Object, p: string, t: Object): Object;
declare class LT {
    private key;
    static $table: {
        [key: string]: string;
    };
    static empty: LT;
    constructor(key: string);
    static add(obj: any, pre?: string): void;
    get(): string;
    toString(): string;
    static initializeTextClass: (type: any, prefix: string) => void;
    static getDefault: (key: string, defaultText: string) => string;
}

interface LookupOptions<TItem> {
    idField?: string;
    parentIdField?: string;
    textField?: string;
    textFormatter?(item: TItem): string;
}
declare global {
    namespace Q {
        interface Lookup<TItem> {
            items: TItem[];
            itemById: {
                [key: string]: TItem;
            };
            idField: string;
            parentIdField: string;
            textField: string;
            textFormatter: (item: TItem) => string;
        }
    }
}
declare class Lookup<TItem> {
    items: TItem[];
    itemById: {
        [key: string]: TItem;
    };
    idField: string;
    parentIdField: string;
    textField: string;
    textFormatter: (item: TItem) => string;
    constructor(options: LookupOptions<TItem>, items?: TItem[]);
    update(value: TItem[]): void;
    protected get_idField(): string;
    protected get_parentIdField(): string;
    protected get_textField(): string;
    protected get_textFormatter(): (item: TItem) => string;
    protected get_itemById(): {
        [key: string]: TItem;
    };
    protected get_items(): TItem[];
}

declare let defaultNotifyOptions: ToastrOptions;
declare function notifyWarning(message: string, title?: string, options?: ToastrOptions): void;
declare function notifySuccess(message: string, title?: string, options?: ToastrOptions): void;
declare function notifyInfo(message: string, title?: string, options?: ToastrOptions): void;
declare function notifyError(message: string, title?: string, options?: ToastrOptions): void;
declare function positionToastContainer(create: boolean): void;

declare namespace ScriptData {
    function bindToChange(name: string, regClass: string, onChange: () => void): void;
    function triggerChange(name: string): void;
    function unbindFromChange(regClass: string): void;
    function ensure(name: string): any;
    function ensureAsync(name: string): PromiseLike<any>;
    function reload(name: string): any;
    function reloadAsync(name: string): PromiseLike<any>;
    function canLoad(name: string): boolean;
    function setRegisteredScripts(scripts: any[]): void;
    function set(name: string, value: any): void;
}
declare function getRemoteData(key: string): any;
declare function getRemoteDataAsync(key: string): PromiseLike<any>;
declare function getLookup<TItem>(key: string): Q.Lookup<TItem>;
declare function getLookupAsync<TItem>(key: string): PromiseLike<Q.Lookup<TItem>>;
declare function reloadLookup(key: string): void;
declare function reloadLookupAsync(key: string): PromiseLike<any>;
declare function getColumns(key: string): Serenity.PropertyItem[];
declare function getColumnsAsync(key: string): PromiseLike<Serenity.PropertyItem[]>;
declare function getForm(key: string): Serenity.PropertyItem[];
declare function getFormAsync(key: string): PromiseLike<Serenity.PropertyItem[]>;
declare function getTemplate(key: string): string;
declare function getTemplateAsync(key: string): PromiseLike<string>;
declare function canLoadScriptData(name: string): boolean;

declare function getCookie(name: string): any;
declare function serviceCall<TResponse>(options: Serenity.ServiceOptions<TResponse>): JQueryXHR;
declare function serviceRequest<TResponse>(service: string, request?: any, onSuccess?: (response: TResponse) => void, options?: Serenity.ServiceOptions<TResponse>): JQueryXHR;
declare function setEquality(request: Serenity.ListRequest, field: string, value: any): void;
interface PostToServiceOptions {
    url?: string;
    service?: string;
    target?: string;
    request: any;
}
interface PostToUrlOptions {
    url?: string;
    target?: string;
    params: any;
}
declare function parseQueryString(s?: string): {};
declare function postToService(options: PostToServiceOptions): void;
declare function postToUrl(options: PostToUrlOptions): void;
declare function resolveUrl(url: string): string;

declare function endsWith(s: string, suffix: string): boolean;
declare function isEmptyOrNull(s: string): boolean;
declare function isTrimmedEmpty(s: string): boolean;
declare function padLeft(s: string | number, len: number, ch?: string): any;
declare function startsWith(s: string, prefix: string): boolean;
declare function toSingleLine(str: string): string;
declare var trimEnd: (s: string) => string;
declare var trimStart: (s: string) => string;
declare function trim(s: string): string;
declare function trimToEmpty(s: string): string;
declare function trimToNull(s: string): string;
declare function replaceAll(s: string, f: string, r: string): string;
declare function zeroPad(n: number, digits: number): string;

declare type Dictionary<TItem> = {
    [key: string]: TItem;
};
declare function coalesce(a: any, b: any): any;
declare function isValue(a: any): boolean;
declare let today: () => Date;
declare function extend<T = any>(a: T, b: T): T;
declare function deepClone<T = any>(a: T, a2?: any, a3?: any): T;
declare type Type = Function | Object;
interface TypeMember {
    name: string;
    type: MemberType;
    attr?: any[];
    getter?: string;
    setter?: string;
}
declare function getNested(from: any, name: string): any;
declare function getType(name: string, target?: any): Type;
declare function getTypeFullName(type: Type): string;
declare function getTypeName(type: Type): string;
declare function getInstanceType(instance: any): any;
declare function isAssignableFrom(target: any, type: Type): boolean;
declare function isInstanceOfType(instance: any, type: Type): boolean;
declare function safeCast(instance: any, type: Type): any;
declare function cast(instance: any, type: Type): any;
declare function getBaseType(type: any): any;
declare function getAttributes(type: any, attrType: any, inherit?: boolean): any[];
declare const enum MemberType {
    field = 4,
    property = 16
}
declare function getMembers(type: any, memberTypes: MemberType): TypeMember[];
declare function addTypeMember(type: any, member: TypeMember): TypeMember;
declare function getTypes(from?: any): any[];
declare function clearKeys(d: any): void;
declare function delegateCombine(delegate1: any, delegate2: any): any;
declare namespace Enum {
    let toString: (enumType: any, value: number) => string;
    let getValues: (enumType: any) => any[];
}
declare let delegateRemove: (delegate1: any, delegate2: any) => any;
declare let isEnum: (type: any) => boolean;
declare function initFormType(typ: Function, nameWidgetPairs: any[]): void;
declare function prop(type: any, name: string, getter?: string, setter?: string): void;
declare function registerClass(type: any, name: string, intf?: any[]): void;
declare function registerEnum(type: any, name: string): void;
declare function registerInterface(type: any, name: string, intf?: any[]): void;
declare function addAttribute(type: any, attr: any): void;
declare function setTypeName(target: Type, value: string): void;
declare class ISlickFormatter {
}
declare function initializeTypes(root: any, pre: string, limit: number): void;
declare class Exception extends Error {
    constructor(message: string);
}
declare class NullReferenceException extends Exception {
    constructor(message?: string);
}
declare class ArgumentNullException extends Exception {
    constructor(paramName: string, message?: string);
}
declare class ArgumentOutOfRangeException extends Exception {
    constructor(paramName: string, message?: string);
}
declare class InvalidCastException extends Exception {
    constructor(message: string);
}

declare function validatorAbortHandler(validator: any): void;
declare function validateOptions(options: JQueryValidation.ValidationOptions): JQueryValidation.ValidationOptions;

declare function getHighlightTarget(el: HTMLElement): HTMLElement;
declare function baseValidateOptions(): JQueryValidation.ValidationOptions;
declare function validateForm(form: JQuery, opt: JQueryValidation.ValidationOptions): JQueryValidation.Validator;
declare function addValidationRule(element: JQuery, eventClass: string, rule: (p1: JQuery) => string): JQuery;
declare function removeValidationRule(element: JQuery, eventClass: string): JQuery;

declare function autoFullHeight(element: JQuery): void;
declare function initFullHeightGridPage(gridDiv: JQuery): void;
declare function layoutFillHeightValue(element: JQuery): number;
declare function layoutFillHeight(element: JQuery): void;
declare function setMobileDeviceMode(): void;
declare function triggerLayoutOnShow(element: JQuery): void;
declare function centerDialog(el: JQuery): void;

declare namespace Router {
    let enabled: boolean;
    function navigate(hash: string, tryBack?: boolean, silent?: boolean): void;
    function replace(hash: string, tryBack?: boolean): void;
    function replaceLast(hash: string, tryBack?: boolean): void;
    function dialog(owner: JQuery, element: JQuery, hash: () => string): void;
    function resolve(hash?: string): void;
}

interface ServiceOptions<TResponse extends Serenity.ServiceResponse> extends Serenity.ServiceOptions<TResponse> {
}

export { AlertOptions, ArgumentNullException, ArgumentOutOfRangeException, Authorization, CommonDialogOptions, Config, ConfirmOptions, Culture, DateFormat, DialogButton, Dictionary, Enum, ErrorHandling, Exception, Group, Grouping, Groups, IFrameDialogOptions, ISlickFormatter, InvalidCastException, Invariant, JQBlockUIOptions, LT, LayoutTimer, Locale, Lookup, LookupOptions, MemberType, NullReferenceException, NumberFormat, PostToServiceOptions, PostToUrlOptions, Router, ScriptData, ServiceOptions, Type, TypeMember, UserDefinition, addAttribute, addEmptyOption, addOption, addTypeMember, addValidationRule, alert, any, attrEncode, autoFullHeight, baseValidateOptions, blockUI, blockUndo, bsModalMarkup, canLoadScriptData, cast, centerDialog, clearKeys, clearOptions, closePanel, coalesce, compareStringFactory, confirm, count, dbText, dbTryText, debounce, deepClone, defaultNotifyOptions, delegateCombine, delegateRemove, dialogButtonToBS, dialogButtonToUI, endsWith, extend, findElementWithRelativeId, first, format, formatDate, formatDayHourAndMin, formatISODateTimeUTC, formatNumber, getAttributes, getBaseType, getColumns, getColumnsAsync, getCookie, getForm, getFormAsync, getHighlightTarget, getInstanceType, getLookup, getLookupAsync, getMembers, getNested, getRemoteData, getRemoteDataAsync, getTemplate, getTemplateAsync, getType, getTypeFullName, getTypeName, getTypes, groupBy, htmlEncode, iframeDialog, indexOf, information, initFormType, initFullHeightGridPage, initializeTypes, insert, isArray, isAssignableFrom, isBS3, isEmptyOrNull, isEnum, isInstanceOfType, isTrimmedEmpty, isValue, jsRender, layoutFillHeight, layoutFillHeightValue, localeFormat, log, newBodyDiv, notifyError, notifyInfo, notifySuccess, notifyWarning, outerHtml, padLeft, parseDate, parseDayHourAndMin, parseDecimal, parseHourAndMin, parseISODateTime, parseInteger, parseQueryString, positionToastContainer, postToService, postToUrl, prefixedText, prop, proxyTexts, registerClass, registerEnum, registerInterface, reloadLookup, reloadLookupAsync, removeValidationRule, replaceAll, resolveUrl, round, safeCast, serviceCall, serviceRequest, setEquality, setMobileDeviceMode, setTypeName, single, splitDateString, startsWith, text, toGrouping, toId, toSingleLine, today, triggerLayoutOnShow, trim, trimEnd, trimStart, trimToEmpty, trimToNull, trunc, tryFirst, tryGetText, turkishLocaleCompare, turkishLocaleToUpper, validateForm, validateOptions, validatorAbortHandler, warning, zeroPad };