/// <reference types="jquery" />
/// <reference types="jqueryui" />
/// <reference types="toastr" />
/// <reference types="jquery.validation" />

declare namespace Q {
    type Grouping<TItem> = {
        [key: string]: TItem[];
    };
    /**
     * Tests if any of array elements matches given predicate
     */
    function any<TItem>(array: TItem[], predicate: (x: TItem) => boolean): boolean;
    /**
     * Counts number of array elements that matches a given predicate
     */
    function count<TItem>(array: TItem[], predicate: (x: TItem) => boolean): number;
    /**
     * Gets first element in an array that matches given predicate.
     * Throws an error if no match is found.
     */
    function first<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;
    /**
     * Gets index of first element in an array that matches given predicate
     */
    function indexOf<TItem>(array: TItem[], predicate: (x: TItem) => boolean): number;
    /**
     * Inserts an item to the array at specified index
     */
    function insert(obj: any, index: number, item: any): void;
    /**
     * Determines if the object is an array
     */
    function isArray(obj: any): boolean;
    /**
    * Gets first element in an array that matches given predicate.
    * Throws an error if no matches is found, or there are multiple matches.
    */
    function single<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;
    /**
     * Maps an array into a dictionary with keys determined by specified getKey() callback,
     * and values that are arrays containing elements for a particular key.
     */
    function toGrouping<TItem>(items: TItem[], getKey: (x: TItem) => any): Grouping<TItem>;
    type Group<TItem> = {
        order: number;
        key: string;
        items: TItem[];
        start: number;
    };
    type Groups<TItem> = {
        byKey: {
            [key: string]: Group<TItem>;
        };
        inOrder: Group<TItem>[];
    };
    /**
     * Groups an array with keys determined by specified getKey() callback.
     * Resulting object contains group objects in order and a dictionary to access by key.
     */
    function groupBy<TItem>(items: TItem[], getKey: (x: TItem) => any): Groups<TItem>;
    /**
     * Gets first element in an array that matches given predicate.
     * Returns null if no match is found.
     */
    function tryFirst<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;

    interface UserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }

    namespace Authorization {
        function hasPermission(permission: string): boolean;
        function validatePermission(permission: string): void;
    }
    namespace Authorization {
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
    function blockUI(options: JQBlockUIOptions): void;
    function blockUndo(): void;

    var Config: {
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
    function debounce(func: Function, wait?: number, immediate?: boolean): () => any;

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
    function isBS3(): boolean;
    function bsModalMarkup(title: string, body: string, modalClass?: string): string;
    function dialogButtonToBS(x: DialogButton): string;
    function dialogButtonToUI(x: DialogButton): JQueryUI.DialogButtonOptions;
    function alert(message: string, options?: AlertOptions): void;
    interface ConfirmOptions extends CommonDialogOptions {
        yesButton?: string | boolean;
        noButton?: string | boolean;
        cancelButton?: string | boolean;
        onCancel?: () => void;
        onNo?: () => void;
    }
    function confirm(message: string, onYes: () => void, options?: ConfirmOptions): void;
    interface IFrameDialogOptions {
        html?: string;
    }
    function iframeDialog(options: IFrameDialogOptions): void;
    function information(message: string, onOk: () => void, options?: ConfirmOptions): void;
    function warning(message: string, options?: AlertOptions): void;
    function closePanel(element: JQuery, e?: JQueryEventObject): void;

    namespace ErrorHandling {
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
    let Invariant: Locale;
    function compareStringFactory(order: string): ((a: string, b: string) => number);
    let Culture: Locale;
    function turkishLocaleToUpper(a: string): string;
    let turkishLocaleCompare: (a: string, b: string) => number;
    function format(format: string, ...prm: any[]): string;
    function localeFormat(format: string, l: Locale, ...prm: any[]): string;
    let round: (n: number, d?: number, rounding?: boolean) => number;
    let trunc: (n: number) => number;
    function formatNumber(num: number, format?: string, decOrLoc?: string | NumberFormat, grp?: string): string;
    function parseInteger(s: string): number;
    function parseDecimal(s: string): number;
    function toId(id: any): any;
    function formatDate(d: Date | string, format?: string, locale?: Locale): string;
    function formatDayHourAndMin(n: number): string;
    function formatISODateTimeUTC(d: Date): string;
    function parseISODateTime(s: string): Date;
    function parseHourAndMin(value: string): number;
    function parseDayHourAndMin(s: string): number;
    function parseDate(s: string, dateOrder?: string): any;
    function splitDateString(s: string): string[];

    function addOption(select: JQuery, key: string, text: string): void;
    function addEmptyOption(select: JQuery): void;
    function clearOptions(select: JQuery): void;
    function findElementWithRelativeId(element: JQuery, relativeId: string): JQuery;
    /**
     * Html attribute encodes a string (encodes quotes in addition to &, > and <)
     * @param s String to be HTML attribute encoded
     */
    function attrEncode(s: any): string;
    /**
     * Html encodes a string
     * @param s String to be HTML encoded
     */
    function htmlEncode(s: any): string;
    function jsRender(markup: string, data?: any): any;
    function log(m: any): void;
    function newBodyDiv(): JQuery;
    function outerHtml(element: JQuery): string;

    namespace LayoutTimer {
        function store(key: number): void;
        function trigger(key: number): void;
        function onSizeChange(element: () => HTMLElement, handler: () => void, width?: boolean, height?: boolean): number;
        function onWidthChange(element: () => HTMLElement, handler: () => void): number;
        function onHeightChange(element: () => HTMLElement, handler: () => void): number;
        function onShown(element: () => HTMLElement, handler: () => void): number;
        function off(key: number): number;
    }

    function text(key: string): string;
    function dbText(prefix: string): ((key: string) => string);
    function prefixedText(prefix: string): (text: string, key: string | ((p?: string) => string)) => string;
    function tryGetText(key: string): string;
    function dbTryText(prefix: string): ((key: string) => string);
    function proxyTexts(o: Object, p: string, t: Object): Object;
    class LT {
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

    class Lookup<TItem> {
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

    let defaultNotifyOptions: ToastrOptions;
    function notifyWarning(message: string, title?: string, options?: ToastrOptions): void;
    function notifySuccess(message: string, title?: string, options?: ToastrOptions): void;
    function notifyInfo(message: string, title?: string, options?: ToastrOptions): void;
    function notifyError(message: string, title?: string, options?: ToastrOptions): void;
    function positionToastContainer(create: boolean): void;

    namespace ScriptData {
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
    function getRemoteData(key: string): any;
    function getRemoteDataAsync(key: string): PromiseLike<any>;
    function getLookup<TItem>(key: string): Q.Lookup<TItem>;
    function getLookupAsync<TItem>(key: string): PromiseLike<Q.Lookup<TItem>>;
    function reloadLookup(key: string): void;
    function reloadLookupAsync(key: string): PromiseLike<any>;
    function getColumns(key: string): Serenity.PropertyItem[];
    function getColumnsAsync(key: string): PromiseLike<Serenity.PropertyItem[]>;
    function getForm(key: string): Serenity.PropertyItem[];
    function getFormAsync(key: string): PromiseLike<Serenity.PropertyItem[]>;
    function getTemplate(key: string): string;
    function getTemplateAsync(key: string): PromiseLike<string>;
    function canLoadScriptData(name: string): boolean;

    function getCookie(name: string): any;
    function serviceCall<TResponse>(options: Serenity.ServiceOptions<TResponse>): JQueryXHR;
    function serviceRequest<TResponse>(service: string, request?: any, onSuccess?: (response: TResponse) => void, options?: Serenity.ServiceOptions<TResponse>): JQueryXHR;
    function setEquality(request: Serenity.ListRequest, field: string, value: any): void;
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
    function parseQueryString(s?: string): {};
    function postToService(options: PostToServiceOptions): void;
    function postToUrl(options: PostToUrlOptions): void;
    function resolveUrl(url: string): string;

    function endsWith(s: string, suffix: string): boolean;
    function isEmptyOrNull(s: string): boolean;
    function isTrimmedEmpty(s: string): boolean;
    function padLeft(s: string | number, len: number, ch?: string): any;
    function startsWith(s: string, prefix: string): boolean;
    function toSingleLine(str: string): string;
    var trimEnd: (s: string) => string;
    var trimStart: (s: string) => string;
    function trim(s: string): string;
    function trimToEmpty(s: string): string;
    function trimToNull(s: string): string;
    function replaceAll(s: string, f: string, r: string): string;
    function zeroPad(n: number, digits: number): string;

    type Dictionary<TItem> = {
        [key: string]: TItem;
    };
    function coalesce(a: any, b: any): any;
    function isValue(a: any): boolean;
    let today: () => Date;
    function extend<T = any>(a: T, b: T): T;
    function deepClone<T = any>(a: T, a2?: any, a3?: any): T;
    type Type = Function | Object;
    interface TypeMember {
        name: string;
        type: MemberType;
        attr?: any[];
        getter?: string;
        setter?: string;
    }
    function getNested(from: any, name: string): any;
    function getType(name: string, target?: any): Type;
    function getTypeFullName(type: Type): string;
    function getTypeName(type: Type): string;
    function getInstanceType(instance: any): any;
    function isAssignableFrom(target: any, type: Type): boolean;
    function isInstanceOfType(instance: any, type: Type): boolean;
    function safeCast(instance: any, type: Type): any;
    function cast(instance: any, type: Type): any;
    function getBaseType(type: any): any;
    function getAttributes(type: any, attrType: any, inherit?: boolean): any[];
    const enum MemberType {
        field = 4,
        property = 16
    }
    function getMembers(type: any, memberTypes: MemberType): TypeMember[];
    function addTypeMember(type: any, member: TypeMember): TypeMember;
    function getTypes(from?: any): any[];
    function clearKeys(d: any): void;
    function delegateCombine(delegate1: any, delegate2: any): any;
    namespace Enum {
        let toString: (enumType: any, value: number) => string;
        let getValues: (enumType: any) => any[];
    }
    let delegateRemove: (delegate1: any, delegate2: any) => any;
    let isEnum: (type: any) => boolean;
    function initFormType(typ: Function, nameWidgetPairs: any[]): void;
    function prop(type: any, name: string, getter?: string, setter?: string): void;
    function registerClass(type: any, name: string, intf?: any[]): void;
    function registerEnum(type: any, name: string): void;
    function registerInterface(type: any, name: string, intf?: any[]): void;
    function addAttribute(type: any, attr: any): void;
    function setTypeName(target: Type, value: string): void;
    class ISlickFormatter {
    }
    function initializeTypes(root: any, pre: string, limit: number): void;
    class Exception extends Error {
        constructor(message: string);
    }
    class NullReferenceException extends Exception {
        constructor(message?: string);
    }
    class ArgumentNullException extends Exception {
        constructor(paramName: string, message?: string);
    }
    class ArgumentOutOfRangeException extends Exception {
        constructor(paramName: string, message?: string);
    }
    class InvalidCastException extends Exception {
        constructor(message: string);
    }

    function validatorAbortHandler(validator: any): void;
    function validateOptions(options: JQueryValidation.ValidationOptions): JQueryValidation.ValidationOptions;

    function getHighlightTarget(el: HTMLElement): HTMLElement;
    function baseValidateOptions(): JQueryValidation.ValidationOptions;
    function validateForm(form: JQuery, opt: JQueryValidation.ValidationOptions): JQueryValidation.Validator;
    function addValidationRule(element: JQuery, eventClass: string, rule: (p1: JQuery) => string): JQuery;
    function removeValidationRule(element: JQuery, eventClass: string): JQuery;

    function autoFullHeight(element: JQuery): void;
    function initFullHeightGridPage(gridDiv: JQuery): void;
    function layoutFillHeightValue(element: JQuery): number;
    function layoutFillHeight(element: JQuery): void;
    function setMobileDeviceMode(): void;
    function triggerLayoutOnShow(element: JQuery): void;
    function centerDialog(el: JQuery): void;

    namespace Router {
        let enabled: boolean;
        function navigate(hash: string, tryBack?: boolean, silent?: boolean): void;
        function replace(hash: string, tryBack?: boolean): void;
        function replaceLast(hash: string, tryBack?: boolean): void;
        function dialog(owner: JQuery, element: JQuery, hash: () => string): void;
        function resolve(hash?: string): void;
    }

    interface ServiceOptions<TResponse extends Serenity.ServiceResponse> extends Serenity.ServiceOptions<TResponse> {
    }
}
declare namespace Q {
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