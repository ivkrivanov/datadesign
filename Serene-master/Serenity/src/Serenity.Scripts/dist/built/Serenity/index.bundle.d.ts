/// <reference types="react" />
/// <reference types="jquery" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
declare class IBooleanValue {
}
interface IBooleanValue {
    get_value(): boolean;
    set_value(value: boolean): void;
}

declare class IDoubleValue {
}
interface IDoubleValue {
    get_value(): any;
    set_value(value: any): void;
}

declare class IDialog {
}
interface IDialog {
    dialogOpen(asPanel?: boolean): void;
}

declare class IEditDialog {
}
interface IEditDialog {
    load(entityOrId: any, done: () => void, fail: (p1: any) => void): void;
}

declare class IGetEditValue {
}
interface IGetEditValue {
    getEditValue(property: Serenity.PropertyItem, target: any): void;
}

interface IReadOnly {
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
}
declare class IReadOnly {
}

declare class ISetEditValue {
}
interface ISetEditValue {
    setEditValue(source: any, property: Serenity.PropertyItem): void;
}

declare class IStringValue {
}
interface IStringValue {
    get_value(): string;
    set_value(value: string): void;
}

interface IValidateRequired {
    get_required(): boolean;
    set_required(value: boolean): void;
}
declare class IValidateRequired {
}

declare class ISlickFormatter {
}
declare class Exception extends Error {
    constructor(message: string);
}
declare class ArgumentNullException extends Exception {
    constructor(paramName: string, message?: string);
}

declare class EnumKeyAttribute {
    value: string;
    constructor(value: string);
}
declare class DisplayNameAttribute {
    displayName: string;
    constructor(displayName: string);
}
declare class CategoryAttribute {
    category: string;
    constructor(category: string);
}
declare class ColumnsKeyAttribute {
    value: string;
    constructor(value: string);
}
declare class CssClassAttribute {
    cssClass: string;
    constructor(cssClass: string);
}
declare class DefaultValueAttribute {
    value: any;
    constructor(value: any);
}
declare class DialogTypeAttribute {
    value: any;
    constructor(value: any);
}
declare class EditorAttribute {
    constructor();
    key: string;
}
declare class EditorOptionAttribute {
    key: string;
    value: any;
    constructor(key: string, value: any);
}
declare class EditorTypeAttributeBase {
    editorType: string;
    constructor(editorType: string);
    setParams(editorParams: any): void;
}
declare class EditorTypeAttribute extends EditorTypeAttributeBase {
    constructor(editorType: string);
}
declare class ElementAttribute {
    value: string;
    constructor(value: string);
}
declare class EntityTypeAttribute {
    value: string;
    constructor(value: string);
}
declare class FilterableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare class FlexifyAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare class FormKeyAttribute {
    value: string;
    constructor(value: string);
}
declare class GeneratedCodeAttribute {
    origin?: string;
    constructor(origin?: string);
}
declare class HiddenAttribute {
    constructor();
}
declare class HintAttribute {
    hint: string;
    constructor(hint: string);
}
declare class IdPropertyAttribute {
    value: string;
    constructor(value: string);
}
declare class InsertableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare class IsActivePropertyAttribute {
    value: string;
    constructor(value: string);
}
declare class ItemNameAttribute {
    value: string;
    constructor(value: string);
}
declare class LocalTextPrefixAttribute {
    value: string;
    constructor(value: string);
}
declare class MaximizableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare class MaxLengthAttribute {
    maxLength: number;
    constructor(maxLength: number);
}
declare class NamePropertyAttribute {
    value: string;
    constructor(value: string);
}
declare class OneWayAttribute {
}
declare class OptionAttribute {
}
declare class OptionsTypeAttribute {
    value: Function;
    constructor(value: Function);
}
declare class PanelAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare class PlaceholderAttribute {
    value: string;
    constructor(value: string);
}
declare class ReadOnlyAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare class RequiredAttribute {
    isRequired: boolean;
    constructor(isRequired?: boolean);
}
declare class ResizableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare class ResponsiveAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare class ServiceAttribute {
    value: string;
    constructor(value: string);
}
declare class UpdatableAttribute {
    value: boolean;
    constructor(value?: boolean);
}
declare namespace Decorators {
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

declare function Criteria(field: string): any[];
declare namespace Criteria {
    function isEmpty(c: any[]): boolean;
    function join(c1: any[], op: string, c2: any[]): any[];
    function paren(c: any[]): any[];
    function and(c1: any[], c2: any[], ...rest: any[][]): any[];
    function or(c1: any[], c2: any[], ...rest: any[][]): any[];
    const enum Operator {
        paren = "()",
        not = "not",
        isNull = "is null",
        isNotNull = "is not null",
        exists = "exists",
        and = "and",
        or = "or",
        xor = "xor",
        eq = "=",
        ne = "!=",
        gt = ">",
        ge = ">=",
        lt = "<",
        le = "<=",
        in = "in",
        notIn = "not in",
        like = "like",
        notLike = "not like"
    }
}

declare const enum CaptureOperationType {
    Before = 0,
    Delete = 1,
    Insert = 2,
    Update = 3
}

interface DataChangeInfo {
    type: string;
    entityId: any;
    entity: any;
}

declare namespace ReflectionUtils {
    function getPropertyValue(o: any, property: string): any;
    function setPropertyValue(o: any, property: string, value: any): void;
    function makeCamelCase(s: string): string;
}

declare namespace DialogTypeRegistry {
    function tryGet(key: string): any;
    function get(key: string): any;
}

declare namespace EditorTypeRegistry {
    function get(key: string): any;
    function reset(): void;
}

declare namespace EnumTypeRegistry {
    function tryGet(key: string): Function;
    function get(key: string): Function;
}

declare class PrefixedContext {
    readonly idPrefix: string;
    constructor(idPrefix: string);
    byId(id: string): JQuery;
    w<TWidget>(id: string, type: {
        new (...args: any[]): TWidget;
    }): TWidget;
}

interface WidgetClass<TOptions = object> {
    new (element: JQuery, options?: TOptions): Widget<TOptions>;
    element: JQuery;
}
interface WidgetDialogClass<TOptions = object> {
    new (options?: TOptions): Widget<TOptions> & IDialog;
    element: JQuery;
}
declare type AnyWidgetClass<TOptions = object> = WidgetClass<TOptions> | WidgetDialogClass<TOptions>;
declare function reactPatch(): void;
interface CreateWidgetParams<TWidget extends Widget<TOptions>, TOptions> {
    type?: new (element: JQuery, options?: TOptions) => TWidget;
    options?: TOptions;
    container?: JQuery;
    element?: (e: JQuery) => void;
    init?: (w: TWidget) => void;
}
interface WidgetComponentProps<W extends Widget<any>> {
    id?: string;
    name?: string;
    className?: string;
    maxLength?: number;
    placeholder?: string;
    setOptions?: any;
    required?: boolean;
    readOnly?: boolean;
    oneWay?: boolean;
    onChange?: (e: JQueryEventObject) => void;
    onChangeSelect2?: (e: JQueryEventObject) => void;
    value?: any;
    defaultValue?: any;
}
declare class Widget<TOptions> extends React.Component<TOptions> {
    private static nextWidgetNumber;
    element: JQuery;
    protected options: TOptions;
    protected widgetName: string;
    protected uniqueName: string;
    constructor(element: JQuery, options?: TOptions);
    destroy(): void;
    protected addCssClass(): void;
    protected getCssClass(): string;
    static getWidgetName(type: Function): string;
    static elementFor<TWidget>(editorType: {
        new (...args: any[]): TWidget;
    }): JQuery;
    addValidationRule(eventClass: string, rule: (p1: JQuery) => string): JQuery;
    getGridField(): JQuery;
    static create<TWidget extends Widget<TOpt>, TOpt>(params: CreateWidgetParams<TWidget, TOpt>): TWidget;
    initialize(): void;
    init(action?: (widget: any) => void): this;
    private static __isWidgetType;
    props: Readonly<{
        children?: React.ReactNode;
    }> & Readonly<TOptions> & WidgetComponentProps<this>;
}
declare interface Widget<TOptions> {
    change(handler: (e: JQueryEventObject) => void): void;
    changeSelect2(handler: (e: JQueryEventObject) => void): void;
}

declare class TemplatedWidget<TOptions> extends Widget<TOptions> {
    protected idPrefix: string;
    private static templateNames;
    constructor(container: JQuery, options?: TOptions);
    protected byId(id: string): JQuery;
    private byID;
    private static noGeneric;
    private getDefaultTemplateName;
    protected getTemplateName(): string;
    protected getFallbackTemplate(): string;
    protected getTemplate(): string;
}

declare namespace LazyLoadHelper {
    function executeOnceWhenShown(element: JQuery, callback: Function): void;
    function executeEverytimeWhenShown(element: JQuery, callback: Function, callNowIfVisible: boolean): void;
}

declare namespace SubDialogHelper {
    function bindToDataChange(dialog: any, owner: Widget<any>, dataChange: (p1: any, p2: DataChangeInfo) => void, useTimeout?: boolean): any;
    function triggerDataChange(dialog: Widget<any>): any;
    function triggerDataChanged(element: JQuery): JQuery;
    function bubbleDataChange(dialog: any, owner: Widget<any>, useTimeout?: boolean): any;
    function cascade(cascadedDialog: any, ofElement: JQuery): any;
    function cascadedDialogOffset(element: JQuery): any;
}

declare namespace UploadHelper {
    function addUploadInput(options: UploadInputOptions): JQuery;
    function checkImageConstraints(file: UploadResponse, opt: FileUploadConstraints): boolean;
    function fileNameSizeDisplay(name: string, bytes: number): string;
    function fileSizeDisplay(bytes: number): string;
    function hasImageExtension(filename: string): boolean;
    function thumbFileName(filename: string): string;
    function dbFileUrl(filename: string): string;
    function colorBox(link: JQuery, options: any): void;
    function populateFileSymbols(container: JQuery, items: UploadedFile[], displayOriginalName?: boolean, urlPrefix?: string): void;
}
interface UploadedFile {
    Filename?: string;
    OriginalName?: string;
}
interface UploadInputOptions {
    container?: JQuery;
    zone?: JQuery;
    progress?: JQuery;
    inputName?: string;
    allowMultiple?: boolean;
    fileDone?: (p1: UploadResponse, p2: string, p3: any) => void;
}
interface UploadResponse {
    TemporaryFile: string;
    Size: number;
    IsImage: boolean;
    Width: number;
    Height: number;
}
interface FileUploadConstraints {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    minSize?: number;
    maxSize?: number;
    allowNonImage?: boolean;
    originalNameProperty?: string;
}

interface ToolButton {
    title?: string;
    hint?: string;
    cssClass?: string;
    icon?: string;
    onClick?: any;
    htmlEncode?: any;
    hotkey?: string;
    hotkeyAllowDefault?: boolean;
    hotkeyContext?: any;
    separator?: (false | true | 'left' | 'right' | 'both');
    visible?: boolean | (() => boolean);
    disabled?: boolean | (() => boolean);
}
interface PopupMenuButtonOptions {
    menu?: JQuery;
    onPopup?: () => void;
    positionMy?: string;
    positionAt?: string;
}
declare class PopupMenuButton extends Widget<PopupMenuButtonOptions> {
    constructor(div: JQuery, opt: PopupMenuButtonOptions);
    destroy(): void;
}
interface PopupToolButtonOptions extends PopupMenuButtonOptions {
}
declare class PopupToolButton extends PopupMenuButton {
    constructor(div: JQuery, opt: PopupToolButtonOptions);
}
interface ToolbarOptions {
    buttons?: ToolButton[];
    hotkeyContext?: any;
}
declare class Toolbar extends Widget<ToolbarOptions> {
    constructor(div: JQuery, options: ToolbarOptions);
    destroy(): void;
    protected mouseTrap: any;
    protected createButton(container: JQuery, b: ToolButton): void;
    findButton(className: string): JQuery;
    updateInterface(): void;
}

declare namespace EditorUtils {
    function getDisplayText(editor: Widget<any>): string;
    function getValue(editor: Widget<any>): any;
    function saveValue(editor: Widget<any>, item: Serenity.PropertyItem, target: any): void;
    function setValue(editor: Widget<any>, value: any): void;
    function loadValue(editor: Widget<any>, item: Serenity.PropertyItem, source: any): void;
    function setReadonly(elements: JQuery, isReadOnly: boolean): JQuery;
    function setReadOnly(widget: Widget<any>, isReadOnly: boolean): void;
    function setRequired(widget: Widget<any>, isRequired: boolean): void;
    function setContainerReadOnly(container: JQuery, readOnly: boolean): void;
}

declare class CascadedWidgetLink<TParent extends Widget<any>> {
    private parentType;
    private widget;
    private parentChange;
    constructor(parentType: {
        new (...args: any[]): TParent;
    }, widget: Widget<any>, parentChange: (p1: TParent) => void);
    private _parentID;
    bind(): TParent;
    unbind(): TParent;
    get_parentID(): string;
    set_parentID(value: string): void;
}

declare namespace ValidationHelper {
    function asyncSubmit(form: JQuery, validateBeforeSave: () => boolean, submitHandler: () => void): boolean;
    function submit(form: JQuery, validateBeforeSave: () => boolean, submitHandler: () => void): boolean;
    function getValidator(element: JQuery): JQueryValidation.Validator;
}
declare namespace VX {
    function addValidationRule(element: JQuery, eventClass: string, rule: (p1: JQuery) => string): JQuery;
    function removeValidationRule(element: JQuery, eventClass: string): JQuery;
    function validateElement(validator: JQueryValidation.Validator, widget: Widget<any>): boolean;
}

declare class TemplatedPanel<TOptions> extends TemplatedWidget<TOptions> {
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

declare namespace TabsExtensions {
    function setDisabled(tabs: JQuery, tabKey: string, isDisabled: boolean): void;
    function toggle(tabs: JQuery, tabKey: string, visible: boolean): void;
    function activeTabKey(tabs: JQuery): string;
    function indexByKey(tabs: JQuery): any;
    function selectTab(tabs: JQuery, tabKey: string): void;
}

declare namespace ReflectionOptionsSetter {
    function set(target: any, options: any): void;
}

declare class PropertyGrid extends Widget<PropertyGridOptions> {
    private editors;
    private items;
    constructor(div: JQuery, opt: PropertyGridOptions);
    destroy(): void;
    private createItems;
    private createCategoryDiv;
    private categoryLinkClick;
    private determineText;
    private createField;
    private getCategoryOrder;
    private createCategoryLinks;
    get_editors(): Widget<any>[];
    get_items(): Serenity.PropertyItem[];
    get_idPrefix(): string;
    get_mode(): PropertyGridMode;
    set_mode(value: PropertyGridMode): void;
    static loadEditorValue(editor: Widget<any>, item: Serenity.PropertyItem, source: any): void;
    static saveEditorValue(editor: Widget<any>, item: Serenity.PropertyItem, target: any): void;
    private static setReadOnly;
    private static setReadonly;
    private static setRequired;
    private static setMaxLength;
    load(source: any): void;
    save(target?: any): any;
    get value(): any;
    set value(val: any);
    private canModifyItem;
    updateInterface(): void;
    enumerateItems(callback: (p1: Serenity.PropertyItem, p2: Widget<any>) => void): void;
}
declare const enum PropertyGridMode {
    insert = 1,
    update = 2
}
interface PropertyGridOptions {
    idPrefix?: string;
    items?: Serenity.PropertyItem[];
    useCategories?: boolean;
    categoryOrder?: string;
    defaultCategory?: string;
    localTextPrefix?: string;
    mode?: PropertyGridMode;
}

declare class PropertyPanel<TItem, TOptions> extends TemplatedPanel<TOptions> {
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

declare class StringEditor extends Widget<any> {
    constructor(input: JQuery);
    get value(): string;
    protected get_value(): string;
    set value(value: string);
    protected set_value(value: string): void;
}

declare class PasswordEditor extends StringEditor {
    constructor(input: JQuery);
}

interface TextAreaEditorOptions {
    cols?: number;
    rows?: number;
}
declare class TextAreaEditor extends Widget<TextAreaEditorOptions> {
    constructor(input: JQuery, opt?: TextAreaEditorOptions);
    get value(): string;
    protected get_value(): string;
    set value(value: string);
    protected set_value(value: string): void;
}

declare class BooleanEditor extends Widget<any> {
    get value(): boolean;
    protected get_value(): boolean;
    set value(value: boolean);
    protected set_value(value: boolean): void;
}

interface DecimalEditorOptions {
    minValue?: string;
    maxValue?: string;
    decimals?: any;
    padDecimals?: any;
    allowNegatives?: boolean;
}
declare class DecimalEditor extends Widget<DecimalEditorOptions> implements IDoubleValue {
    constructor(input: JQuery, opt?: DecimalEditorOptions);
    get_value(): number;
    get value(): number;
    set_value(value: number): void;
    set value(v: number);
    get_isValid(): boolean;
    static defaultAutoNumericOptions(): any;
}

interface IntegerEditorOptions {
    minValue?: number;
    maxValue?: number;
    allowNegatives?: boolean;
}
declare class IntegerEditor extends Widget<IntegerEditorOptions> implements IDoubleValue {
    constructor(input: JQuery, opt?: IntegerEditorOptions);
    get_value(): number;
    get value(): number;
    set_value(value: number): void;
    set value(v: number);
    get_isValid(): boolean;
}

declare let datePickerIconSvg: string;
declare class DateEditor extends Widget<any> implements IStringValue, IReadOnly {
    private minValue;
    private maxValue;
    private minDate;
    private maxDate;
    private sqlMinMax;
    constructor(input: JQuery);
    static useFlatpickr: boolean;
    static flatPickrOptions(input: JQuery): {
        clickOpens: boolean;
        allowInput: boolean;
        dateFormat: string;
        onChange: () => void;
    };
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    private get_valueAsDate;
    get valueAsDate(): Date;
    private set_valueAsDate;
    set valueAsDate(v: Date);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    yearRange: string;
    get_minValue(): string;
    set_minValue(value: string): void;
    get_maxValue(): string;
    set_maxValue(value: string): void;
    get_minDate(): Date;
    set_minDate(value: Date): void;
    get_maxDate(): Date;
    set_maxDate(value: Date): void;
    get_sqlMinMax(): boolean;
    set_sqlMinMax(value: boolean): void;
    static dateInputChange: (e: JQueryEventObject) => void;
    static flatPickrTrigger(input: JQuery): JQuery;
    static dateInputKeyup(e: JQueryEventObject): void;
}

declare class DateTimeEditor extends Widget<DateTimeEditorOptions> implements IStringValue, IReadOnly {
    private minValue;
    private maxValue;
    private time;
    private lastSetValue;
    private lastSetValueGet;
    constructor(input: JQuery, opt?: DateTimeEditorOptions);
    getFlatpickrOptions(): any;
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    private getInplaceNowText;
    private getDisplayFormat;
    set value(v: string);
    private get_valueAsDate;
    get valueAsDate(): Date;
    private set_valueAsDate;
    set valueAsDate(value: Date);
    get_minValue(): string;
    set_minValue(value: string): void;
    get_maxValue(): string;
    set_maxValue(value: string): void;
    get_minDate(): Date;
    set_minDate(value: Date): void;
    get_maxDate(): Date;
    set_maxDate(value: Date): void;
    get_sqlMinMax(): boolean;
    set_sqlMinMax(value: boolean): void;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    static roundToMinutes(date: Date, minutesStep: number): Date;
    static getTimeOptions: (fromHour: number, fromMin: number, toHour: number, toMin: number, stepMins: number) => string[];
}
interface DateTimeEditorOptions {
    startHour?: any;
    endHour?: any;
    intervalMinutes?: any;
    yearRange?: string;
    useUtc?: boolean;
    seconds?: boolean;
    inputOnly?: boolean;
}

interface TimeEditorOptions {
    noEmptyOption?: boolean;
    startHour?: any;
    endHour?: any;
    intervalMinutes?: any;
}
declare class TimeEditor extends Widget<TimeEditorOptions> {
    private minutes;
    constructor(input: JQuery, opt?: TimeEditorOptions);
    get value(): number;
    protected get_value(): number;
    set value(value: number);
    protected set_value(value: number): void;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
}

interface EmailEditorOptions {
    domain?: string;
    readOnlyDomain?: boolean;
}
declare class EmailEditor extends Widget<EmailEditorOptions> {
    constructor(input: JQuery, opt: EmailEditorOptions);
    static registerValidationMethods(): void;
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
}

declare class EmailAddressEditor extends StringEditor {
    constructor(input: JQuery);
}

declare class URLEditor extends StringEditor {
    constructor(input: JQuery);
}

interface RadioButtonEditorOptions {
    enumKey?: string;
    enumType?: any;
    lookupKey?: string;
}
declare class RadioButtonEditor extends Widget<RadioButtonEditorOptions> implements IReadOnly {
    constructor(input: JQuery, opt: RadioButtonEditorOptions);
    protected addRadio(value: string, text: string): void;
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
}

interface Select2CommonOptions {
    allowClear?: boolean;
    delimited?: boolean;
    minimumResultsForSearch?: any;
    multiple?: boolean;
}
interface Select2FilterOptions {
    cascadeFrom?: string;
    cascadeField?: string;
    cascadeValue?: any;
    filterField?: string;
    filterValue?: any;
}
interface Select2InplaceAddOptions {
    inplaceAdd?: boolean;
    inplaceAddPermission?: string;
    dialogType?: string;
    autoComplete?: boolean;
}
interface Select2EditorOptions extends Select2FilterOptions, Select2InplaceAddOptions, Select2CommonOptions {
}
interface Select2SearchPromise {
    abort?(): void;
    catch?(callback: () => void): void;
    fail?(callback: () => void): void;
}
interface Select2SearchQuery {
    searchTerm?: string;
    idList?: string[];
    skip?: number;
    take?: number;
    checkMore?: boolean;
}
interface Select2SearchResult<TItem> {
    items: TItem[];
    more: boolean;
}
declare class Select2Editor<TOptions, TItem> extends Widget<TOptions> implements ISetEditValue, IGetEditValue, IStringValue, IReadOnly {
    private _items;
    private _itemById;
    protected lastCreateTerm: string;
    constructor(hidden: JQuery, opt?: any);
    destroy(): void;
    protected hasAsyncSource(): boolean;
    protected asyncSearch(query: Select2SearchQuery, results: (result: Select2SearchResult<TItem>) => void): Select2SearchPromise;
    protected getTypeDelay(): any;
    protected emptyItemText(): string;
    protected getPageSize(): number;
    protected getIdField(): any;
    protected itemId(item: TItem): string;
    protected getTextField(): any;
    protected itemText(item: TItem): string;
    protected itemDisabled(item: TItem): boolean;
    protected mapItem(item: TItem): Select2Item;
    protected mapItems(items: TItem[]): Select2Item[];
    protected allowClear(): boolean;
    protected isMultiple(): boolean;
    protected getSelect2Options(): Select2Options;
    get_delimited(): boolean;
    get items(): Select2Item[];
    set items(value: Select2Item[]);
    protected get itemById(): {
        [key: string]: Select2Item;
    };
    protected set itemById(value: {
        [key: string]: Select2Item;
    });
    clearItems(): void;
    addItem(item: Select2Item): void;
    addOption(key: string, text: string, source?: any, disabled?: boolean): void;
    protected addInplaceCreate(addTitle: string, editTitle: string): void;
    protected useInplaceAdd(): boolean;
    protected isAutoComplete(): boolean;
    getCreateSearchChoice(getName: (z: any) => string): (s: string) => {
        id: string;
        text: string;
    };
    setEditValue(source: any, property: Serenity.PropertyItem): void;
    getEditValue(property: Serenity.PropertyItem, target: any): void;
    protected get_select2Container(): JQuery;
    protected get_items(): Select2Item[];
    protected get_itemByKey(): {
        [key: string]: Select2Item;
    };
    static filterByText<TItem>(items: TItem[], getText: (item: TItem) => string, term: string): TItem[];
    get_value(): any;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    get selectedItem(): TItem;
    get selectedItems(): TItem[];
    protected get_values(): string[];
    get values(): string[];
    protected set_values(value: string[]): void;
    set values(value: string[]);
    protected get_text(): string;
    get text(): string;
    get_readOnly(): boolean;
    get readOnly(): boolean;
    private updateInplaceReadOnly;
    set_readOnly(value: boolean): void;
    set readOnly(value: boolean);
    protected getCascadeFromValue(parent: Widget<any>): any;
    protected cascadeLink: CascadedWidgetLink<Widget<any>>;
    protected setCascadeFrom(value: string): void;
    protected get_cascadeFrom(): string;
    get cascadeFrom(): string;
    protected set_cascadeFrom(value: string): void;
    set cascadeFrom(value: string);
    protected get_cascadeField(): string;
    get cascadeField(): string;
    protected set_cascadeField(value: string): void;
    set cascadeField(value: string);
    protected get_cascadeValue(): any;
    get cascadeValue(): any;
    protected set_cascadeValue(value: any): void;
    set cascadeValue(value: any);
    protected get_filterField(): string;
    get filterField(): string;
    protected set_filterField(value: string): void;
    set filterField(value: string);
    protected get_filterValue(): any;
    get filterValue(): any;
    protected set_filterValue(value: any): void;
    set filterValue(value: any);
    protected cascadeItems(items: TItem[]): TItem[];
    protected filterItems(items: TItem[]): TItem[];
    protected updateItems(): void;
    protected getDialogTypeKey(): string;
    protected createEditDialog(callback: (dlg: IEditDialog) => void): void;
    onInitNewEntity: (entity: TItem) => void;
    protected initNewEntity(entity: TItem): void;
    protected setEditDialogReadOnly(dialog: any): void;
    protected editDialogDataChange(): void;
    protected setTermOnNewEntity(entity: TItem, term: string): void;
    protected inplaceCreateClick(e: JQueryEventObject): void;
    openDialogAsPanel: boolean;
}

declare class SelectEditor extends Select2Editor<SelectEditorOptions, Select2Item> {
    constructor(hidden: JQuery, opt?: SelectEditorOptions);
    getItems(): any[];
    protected emptyItemText(): string;
    updateItems(): void;
}
interface SelectEditorOptions extends Select2CommonOptions {
    items?: any[];
    emptyOptionText?: string;
}

declare class DateYearEditor extends SelectEditor {
    constructor(hidden: JQuery, opt: DateYearEditorOptions);
    getItems(): any[];
}
interface DateYearEditorOptions extends SelectEditorOptions {
    minYear?: string;
    maxYear?: string;
    descending?: boolean;
}

interface EnumEditorOptions extends Select2CommonOptions {
    enumKey?: string;
    enumType?: any;
}
declare class EnumEditor extends Select2Editor<EnumEditorOptions, Select2Item> {
    constructor(hidden: JQuery, opt: EnumEditorOptions);
    protected updateItems(): void;
    protected allowClear(): boolean;
}

interface LookupEditorOptions extends Select2EditorOptions {
    lookupKey?: string;
    async?: boolean;
}
declare class LookupEditorBase<TOptions extends LookupEditorOptions, TItem> extends Select2Editor<TOptions, TItem> {
    constructor(input: JQuery, opt?: TOptions);
    hasAsyncSource(): boolean;
    destroy(): void;
    protected getLookupKey(): string;
    protected lookup: Q.Lookup<TItem>;
    protected getLookupAsync(): PromiseLike<Q.Lookup<TItem>>;
    protected getLookup(): Q.Lookup<TItem>;
    protected getItems(lookup: Q.Lookup<TItem>): TItem[];
    protected getIdField(): any;
    protected getItemText(item: TItem, lookup: Q.Lookup<TItem>): any;
    protected mapItem(item: TItem): Select2Item;
    protected getItemDisabled(item: TItem, lookup: Q.Lookup<TItem>): boolean;
    updateItems(): void;
    protected asyncSearch(query: Select2SearchQuery, results: (result: Select2SearchResult<TItem>) => void): Select2SearchPromise;
    protected getDialogTypeKey(): string;
    protected setCreateTermOnNewEntity(entity: TItem, term: string): void;
    protected editDialogDataChange(): void;
}
declare class LookupEditor extends LookupEditorBase<LookupEditorOptions, any> {
    constructor(hidden: JQuery, opt?: LookupEditorOptions);
}

interface ServiceLookupEditorOptions extends Select2EditorOptions {
    service?: string;
    idField: string;
    textField: string;
    pageSize?: number;
    minimumResultsForSearch?: any;
    sort: string[];
    columnSelection?: Serenity.ColumnSelection;
    includeColumns?: string[];
    excludeColumns?: string[];
    includeDeleted?: boolean;
    containsField?: string;
    equalityFilter?: any;
    criteria?: any[];
}
declare class ServiceLookupEditorBase<TOptions extends ServiceLookupEditorOptions, TItem> extends Select2Editor<TOptions, TItem> {
    constructor(input: JQuery, opt?: TOptions);
    protected getDialogTypeKey(): string;
    protected getService(): string;
    protected getServiceUrl(): string;
    protected getIncludeColumns(): string[];
    protected getSort(): any[];
    protected getCascadeCriteria(): any[];
    protected getFilterCriteria(): any[];
    protected getIdListCriteria(idList: any[]): any[];
    protected getCriteria(query: Select2SearchQuery): any[];
    protected getListRequest(query: Select2SearchQuery): Serenity.ListRequest;
    protected getServiceCallOptions(query: Select2SearchQuery, results: (result: Select2SearchResult<TItem>) => void): Serenity.ServiceOptions<Serenity.ListResponse<TItem>>;
    protected hasAsyncSource(): boolean;
    protected asyncSearch(query: Select2SearchQuery, results: (result: Select2SearchResult<TItem>) => void): Select2SearchPromise;
}
declare class ServiceLookupEditor extends ServiceLookupEditorBase<ServiceLookupEditorOptions, any> {
    constructor(hidden: JQuery, opt?: ServiceLookupEditorOptions);
}

interface HtmlContentEditorOptions {
    cols?: any;
    rows?: any;
}
interface CKEditorConfig {
}
declare class HtmlContentEditor extends Widget<HtmlContentEditorOptions> implements IStringValue, IReadOnly {
    private _instanceReady;
    constructor(textArea: JQuery, opt?: HtmlContentEditorOptions);
    protected instanceReady(x: any): void;
    protected getLanguage(): string;
    protected getConfig(): CKEditorConfig;
    protected getEditorInstance(): any;
    destroy(): void;
    get_value(): string;
    get value(): string;
    set_value(value: string): void;
    set value(v: string);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    static CKEditorVer: string;
    static CKEditorBasePath: string;
    static getCKEditorBasePath(): string;
    static includeCKEditor(): void;
}
declare class HtmlNoteContentEditor extends HtmlContentEditor {
    constructor(textArea: JQuery, opt?: HtmlContentEditorOptions);
    protected getConfig(): CKEditorConfig;
}
declare class HtmlReportContentEditor extends HtmlContentEditor {
    constructor(textArea: JQuery, opt?: HtmlContentEditorOptions);
    protected getConfig(): CKEditorConfig;
}

declare class MaskedEditor extends Widget<MaskedEditorOptions> {
    constructor(input: JQuery, opt?: MaskedEditorOptions);
    get value(): string;
    protected get_value(): string;
    set value(value: string);
    protected set_value(value: string): void;
}
interface MaskedEditorOptions {
    mask?: string;
    placeholder?: string;
}

interface RecaptchaOptions {
    siteKey?: string;
    language?: string;
}
declare class Recaptcha extends Widget<RecaptchaOptions> implements IStringValue {
    constructor(div: JQuery, opt: RecaptchaOptions);
    get_value(): string;
    set_value(value: string): void;
}

interface FileUploadEditorOptions extends FileUploadConstraints {
    displayFileName?: boolean;
    urlPrefix?: string;
}
interface ImageUploadEditorOptions extends FileUploadEditorOptions {
}
declare class FileUploadEditor extends Widget<FileUploadEditorOptions> implements IReadOnly, IGetEditValue, ISetEditValue, IValidateRequired {
    constructor(div: JQuery, opt: FileUploadEditorOptions);
    protected getUploadInputOptions(): UploadInputOptions;
    protected addFileButtonText(): string;
    protected getToolButtons(): ToolButton[];
    protected populate(): void;
    protected updateInterface(): void;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    get_required(): boolean;
    set_required(value: boolean): void;
    get_value(): UploadedFile;
    get value(): UploadedFile;
    set_value(value: UploadedFile): void;
    set value(v: UploadedFile);
    getEditValue(property: Serenity.PropertyItem, target: any): void;
    setEditValue(source: any, property: Serenity.PropertyItem): void;
    protected entity: UploadedFile;
    protected toolbar: Toolbar;
    protected progress: JQuery;
    protected fileSymbols: JQuery;
    protected uploadInput: JQuery;
    protected hiddenInput: JQuery;
}
declare class ImageUploadEditor extends FileUploadEditor {
    constructor(div: JQuery, opt: ImageUploadEditorOptions);
}
declare class MultipleFileUploadEditor extends Widget<FileUploadEditorOptions> implements IReadOnly, IGetEditValue, ISetEditValue, IValidateRequired {
    private entities;
    private toolbar;
    private fileSymbols;
    private uploadInput;
    protected hiddenInput: JQuery;
    constructor(div: JQuery, opt: ImageUploadEditorOptions);
    protected addFileButtonText(): string;
    protected getToolButtons(): ToolButton[];
    protected populate(): void;
    protected updateInterface(): void;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    get_required(): boolean;
    set_required(value: boolean): void;
    get_value(): UploadedFile[];
    get value(): UploadedFile[];
    set_value(value: UploadedFile[]): void;
    set value(v: UploadedFile[]);
    getEditValue(property: Serenity.PropertyItem, target: any): void;
    setEditValue(source: any, property: Serenity.PropertyItem): void;
    jsonEncodeValue: boolean;
}
declare class MultipleImageUploadEditor extends MultipleFileUploadEditor {
    constructor(div: JQuery, opt: ImageUploadEditorOptions);
}

interface QuickFilterArgs<TWidget> {
    field?: string;
    widget?: TWidget;
    request?: Serenity.ListRequest;
    equalityFilter?: any;
    value?: any;
    active?: boolean;
    handled?: boolean;
}
interface QuickFilter<TWidget extends Widget<TOptions>, TOptions> {
    field?: string;
    type?: new (element: JQuery, options: TOptions) => TWidget;
    handler?: (h: QuickFilterArgs<TWidget>) => void;
    title?: string;
    options?: TOptions;
    element?: (e: JQuery) => void;
    init?: (w: TWidget) => void;
    separator?: boolean;
    cssClass?: string;
    loadState?: (w: TWidget, state: any) => void;
    saveState?: (w: TWidget) => any;
    displayText?: (w: TWidget, label: string) => string;
}

interface QuickFilterBarOptions {
    filters: QuickFilter<Widget<any>, any>[];
    getTitle?: (filter: QuickFilter<Widget<any>, any>) => string;
    idPrefix?: string;
}
declare class QuickFilterBar extends Widget<QuickFilterBarOptions> {
    constructor(container: JQuery, options?: QuickFilterBarOptions);
    addSeparator(): void;
    add<TWidget extends Widget<any>, TOptions>(opt: QuickFilter<TWidget, TOptions>): TWidget;
    addDateRange(field: string, title?: string): DateEditor;
    static dateRange(field: string, title?: string): QuickFilter<DateEditor, DateTimeEditorOptions>;
    addDateTimeRange(field: string, title?: string): DateTimeEditor;
    static dateTimeRange(field: string, title?: string): QuickFilter<DateTimeEditor, DateTimeEditorOptions>;
    addBoolean(field: string, title?: string, yes?: string, no?: string): SelectEditor;
    static boolean(field: string, title?: string, yes?: string, no?: string): QuickFilter<SelectEditor, SelectEditorOptions>;
    onChange: (e: JQueryEventObject) => void;
    private submitHandlers;
    destroy(): void;
    onSubmit(request: Serenity.ListRequest): void;
    protected add_submitHandlers(action: (request: Serenity.ListRequest) => void): void;
    protected remove_submitHandlers(action: (request: Serenity.ListRequest) => void): void;
    protected clear_submitHandlers(): void;
    find<TWidget>(type: {
        new (...args: any[]): TWidget;
    }, field: string): TWidget;
    tryFind<TWidget>(type: {
        new (...args: any[]): TWidget;
    }, field: string): TWidget;
}

interface QuickSearchField {
    name: string;
    title: string;
}
interface QuickSearchInputOptions {
    typeDelay?: number;
    loadingParentClass?: string;
    filteredParentClass?: string;
    onSearch?: (p1: string, p2: string, p3: (p1: boolean) => void) => void;
    fields?: QuickSearchField[];
}
declare class QuickSearchInput extends Widget<QuickSearchInputOptions> {
    private lastValue;
    private field;
    private fieldChanged;
    private timer;
    constructor(input: JQuery, opt: QuickSearchInputOptions);
    protected checkIfValueChanged(): void;
    get_value(): string;
    get_field(): QuickSearchField;
    set_field(value: QuickSearchField): void;
    protected updateInputPlaceHolder(): void;
    restoreState(value: string, field: QuickSearchField): void;
    protected searchNow(value: string): void;
}

declare namespace DialogExtensions {
    function dialogResizable(dialog: JQuery, w?: any, h?: any, mw?: any, mh?: any): JQuery;
    function dialogMaximizable(dialog: JQuery): JQuery;
    function dialogFlexify(dialog: JQuery): JQuery;
}

interface DialogButton {
    text?: string;
    hint?: string;
    icon?: string;
    click?: (e: JQueryEventObject) => void;
    cssClass?: string;
    htmlEncode?: boolean;
    result?: string;
}

declare class TemplatedDialog<TOptions> extends TemplatedWidget<TOptions> {
    protected tabs: JQuery;
    protected toolbar: Toolbar;
    protected validator: JQueryValidation.Validator;
    constructor(options?: TOptions);
    private get isMarkedAsPanel();
    private get isResponsive();
    private static getCssSize;
    private static applyCssSizes;
    destroy(): void;
    protected initDialog(): void;
    protected getModalOptions(): ModalOptions;
    protected initModal(): void;
    protected initToolbar(): void;
    protected getToolbarButtons(): ToolButton[];
    protected getValidatorOptions(): JQueryValidation.ValidationOptions;
    protected initValidator(): void;
    protected resetValidation(): void;
    protected validateForm(): boolean;
    dialogOpen(asPanel?: boolean): void;
    private useBSModal;
    static bootstrapModal: boolean;
    static openPanel(element: JQuery, uniqueName: string): void;
    static closePanel(element: JQuery, e?: JQueryEventObject): void;
    protected onDialogOpen(): void;
    protected arrange(): void;
    protected onDialogClose(): void;
    protected addCssClass(): void;
    protected getDialogButtons(): DialogButton[];
    protected getDialogOptions(): JQueryUI.DialogOptions;
    protected getDialogTitle(): string;
    dialogClose(): void;
    get dialogTitle(): string;
    private setupPanelTitle;
    set dialogTitle(value: string);
    set_dialogTitle(value: string): void;
    protected initTabs(): void;
    protected handleResponsive(): void;
}
interface ModalOptions {
    backdrop?: boolean | 'static';
    keyboard?: boolean;
    size?: 'lg' | 'sm';
    modalClass?: string;
}

declare class PropertyDialog<TItem, TOptions> extends TemplatedDialog<TOptions> {
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

declare class EntityDialog<TItem, TOptions> extends TemplatedDialog<TOptions> implements IEditDialog, IReadOnly {
    protected entity: TItem;
    protected entityId: any;
    protected propertyGrid: PropertyGrid;
    protected toolbar: Toolbar;
    protected saveAndCloseButton: JQuery;
    protected applyChangesButton: JQuery;
    protected deleteButton: JQuery;
    protected undeleteButton: JQuery;
    protected cloneButton: JQuery;
    protected editButton: JQuery;
    protected localizationGrid: PropertyGrid;
    protected localizationButton: JQuery;
    protected localizationPendingValue: any;
    protected localizationLastValue: any;
    static defaultLanguageList: () => string[][];
    constructor(opt?: TOptions);
    destroy(): void;
    protected get_entity(): TItem;
    protected set_entity(entity: any): void;
    protected get_entityId(): any;
    protected set_entityId(value: any): void;
    protected getEntityNameFieldValue(): any;
    protected getEntityTitle(): string;
    protected updateTitle(): void;
    protected isCloneMode(): boolean;
    protected isEditMode(): boolean;
    protected isDeleted(): boolean;
    protected isNew(): boolean;
    protected isNewOrDeleted(): boolean;
    protected getDeleteOptions(callback: (response: Serenity.DeleteResponse) => void): Serenity.ServiceOptions<Serenity.DeleteResponse>;
    protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    protected doDelete(callback: (response: Serenity.DeleteResponse) => void): void;
    protected onDeleteSuccess(response: Serenity.DeleteResponse): void;
    protected attrs<TAttr>(attrType: {
        new (...args: any[]): TAttr;
    }): TAttr[];
    private entityType;
    protected getEntityType(): string;
    private formKey;
    protected getFormKey(): string;
    private localTextDbPrefix;
    protected getLocalTextDbPrefix(): string;
    protected getLocalTextPrefix(): string;
    private entitySingular;
    protected getEntitySingular(): string;
    private nameProperty;
    protected getNameProperty(): string;
    private idProperty;
    protected getIdProperty(): string;
    protected isActiveProperty: string;
    protected getIsActiveProperty(): string;
    protected getIsDeletedProperty(): string;
    protected service: string;
    protected getService(): string;
    load(entityOrId: any, done: () => void, fail: (ex: Exception) => void): void;
    loadNewAndOpenDialog(asPanel?: boolean): void;
    loadEntityAndOpenDialog(entity: TItem, asPanel?: boolean): void;
    protected loadResponse(data: any): void;
    protected loadEntity(entity: TItem): void;
    protected beforeLoadEntity(entity: TItem): void;
    protected afterLoadEntity(): void;
    loadByIdAndOpenDialog(entityId: any, asPanel?: boolean): void;
    protected onLoadingData(data: Serenity.RetrieveResponse<TItem>): void;
    protected getLoadByIdOptions(id: any, callback: (response: Serenity.RetrieveResponse<TItem>) => void): Serenity.ServiceOptions<Serenity.RetrieveResponse<TItem>>;
    protected getLoadByIdRequest(id: any): Serenity.RetrieveRequest;
    protected reloadById(): void;
    loadById(id: any, callback?: (response: Serenity.RetrieveResponse<TItem>) => void, fail?: () => void): void;
    protected loadByIdHandler(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<TItem>>, callback: (response: Serenity.RetrieveResponse<TItem>) => void, fail: () => void): void;
    protected initLocalizationGrid(): void;
    protected initLocalizationGridCommon(pgOptions: PropertyGridOptions): void;
    protected isLocalizationMode(): boolean;
    protected isLocalizationModeAndChanged(): boolean;
    protected localizationButtonClick(): void;
    protected getLanguages(): any[];
    private getLangs;
    protected loadLocalization(): void;
    protected setLocalizationGridCurrentValues(): void;
    protected getLocalizationGridValue(): any;
    protected getPendingLocalizations(): any;
    protected initPropertyGrid(): void;
    protected getPropertyItems(): Serenity.PropertyItem[];
    protected getPropertyGridOptions(): PropertyGridOptions;
    protected validateBeforeSave(): boolean;
    protected getSaveOptions(callback: (response: Serenity.SaveResponse) => void): Serenity.ServiceOptions<Serenity.SaveResponse>;
    protected getSaveEntity(): TItem;
    protected getSaveRequest(): Serenity.SaveRequest<TItem>;
    protected onSaveSuccess(response: Serenity.SaveResponse): void;
    protected save_submitHandler(callback: (response: Serenity.SaveResponse) => void): void;
    protected save(callback?: (response: Serenity.SaveResponse) => void): void | boolean;
    protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
    protected initToolbar(): void;
    protected showSaveSuccessMessage(response: Serenity.SaveResponse): void;
    protected getToolbarButtons(): ToolButton[];
    protected getCloningEntity(): TItem;
    protected updateInterface(): void;
    protected getUndeleteOptions(callback?: (response: Serenity.UndeleteResponse) => void): Serenity.ServiceOptions<Serenity.UndeleteResponse>;
    protected undeleteHandler(options: Serenity.ServiceOptions<Serenity.UndeleteResponse>, callback: (response: Serenity.UndeleteResponse) => void): void;
    protected undelete(callback?: (response: Serenity.UndeleteResponse) => void): void;
    private _readonly;
    get readOnly(): boolean;
    set readOnly(value: boolean);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    protected getInsertPermission(): string;
    protected getUpdatePermission(): string;
    protected getDeletePermission(): string;
    protected hasDeletePermission(): boolean;
    protected hasInsertPermission(): boolean;
    protected hasUpdatePermission(): boolean;
    protected hasSavePermission(): boolean;
    protected editClicked: boolean;
    protected isViewMode(): boolean;
    protected useViewMode(): boolean;
}

interface FilterOperator {
    key?: string;
    title?: string;
    format?: string;
}
declare namespace FilterOperators {
    const isTrue = "true";
    const isFalse = "false";
    const contains = "contains";
    const startsWith = "startswith";
    const EQ = "eq";
    const NE = "ne";
    const GT = "gt";
    const GE = "ge";
    const LT = "lt";
    const LE = "le";
    const BW = "bw";
    const IN = "in";
    const isNull = "isnull";
    const isNotNull = "isnotnull";
    const toCriteriaOperator: {
        [key: string]: string;
    };
}

interface FilterLine {
    field?: string;
    operator?: string;
    isOr?: boolean;
    leftParen?: boolean;
    rightParen?: boolean;
    validationError?: string;
    criteria?: any[];
    displayText?: string;
    state?: any;
}

declare class FilterStore {
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

interface IFiltering {
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
declare class IFiltering {
}
interface CriteriaWithText {
    criteria?: any[];
    displayText?: string;
}
interface IQuickFiltering {
    initQuickFilter(filter: QuickFilter<Widget<any>, any>): void;
}
declare class IQuickFiltering {
}
declare abstract class BaseFiltering implements IFiltering, IQuickFiltering {
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
declare abstract class BaseEditorFiltering<TEditor extends Widget<any>> extends BaseFiltering {
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
declare class DateFiltering extends BaseEditorFiltering<DateEditor> {
    constructor();
    getOperators(): FilterOperator[];
}
declare class BooleanFiltering extends BaseFiltering {
    getOperators(): FilterOperator[];
}
declare class DateTimeFiltering extends BaseEditorFiltering<DateEditor> {
    constructor();
    getOperators(): FilterOperator[];
    getCriteria(): CriteriaWithText;
}
declare class DecimalFiltering extends BaseEditorFiltering<DecimalEditor> {
    constructor();
    getOperators(): FilterOperator[];
}
declare class EditorFiltering extends BaseEditorFiltering<Widget<any>> {
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
declare class EnumFiltering extends BaseEditorFiltering<EnumEditor> {
    constructor();
    getOperators(): FilterOperator[];
}
declare class IntegerFiltering extends BaseEditorFiltering<IntegerEditor> {
    constructor();
    getOperators(): FilterOperator[];
}
declare class LookupFiltering extends BaseEditorFiltering<LookupEditor> {
    constructor();
    getOperators(): FilterOperator[];
    protected useEditor(): boolean;
    protected useIdField(): boolean;
    getEditorText(): string;
}
declare class ServiceLookupFiltering extends BaseEditorFiltering<ServiceLookupEditor> {
    constructor();
    getOperators(): FilterOperator[];
    protected useEditor(): boolean;
    protected useIdField(): boolean;
    getEditorText(): string;
}
declare class StringFiltering extends BaseFiltering {
    getOperators(): FilterOperator[];
    validateEditorValue(value: string): string;
}
declare namespace FilteringTypeRegistry {
    function get(key: string): Function;
}

declare class FilterWidgetBase<TOptions> extends TemplatedWidget<TOptions> {
    private store;
    private onFilterStoreChanged;
    constructor(div: JQuery, opt?: TOptions);
    destroy(): void;
    protected filterStoreChanged(): void;
    get_store(): FilterStore;
    set_store(value: FilterStore): void;
}

declare class FilterPanel extends FilterWidgetBase<any> {
    private rowsDiv;
    constructor(div: JQuery);
    private showInitialLine;
    get_showInitialLine(): boolean;
    set_showInitialLine(value: boolean): void;
    protected filterStoreChanged(): void;
    updateRowsFromStore(): void;
    private showSearchButton;
    get_showSearchButton(): boolean;
    set_showSearchButton(value: boolean): void;
    private updateStoreOnReset;
    get_updateStoreOnReset(): boolean;
    set_updateStoreOnReset(value: boolean): void;
    protected getTemplate(): string;
    protected initButtons(): void;
    protected searchButtonClick(e: JQueryEventObject): void;
    get_hasErrors(): boolean;
    search(): void;
    protected addButtonClick(e: JQueryEventObject): void;
    protected resetButtonClick(e: JQueryEventObject): void;
    protected findEmptyRow(): JQuery;
    protected addEmptyRow(popupField: boolean): JQuery;
    protected onRowFieldChange(e: JQueryEventObject): void;
    protected rowFieldChange(row: JQuery): void;
    protected removeFiltering(row: JQuery): void;
    protected populateOperatorList(row: JQuery): void;
    protected getFieldFor(row: JQuery): Serenity.PropertyItem;
    protected getFilteringFor(row: JQuery): IFiltering;
    protected onRowOperatorChange(e: JQueryEventObject): void;
    protected rowOperatorChange(row: JQuery): void;
    protected deleteRowClick(e: JQueryEventObject): void;
    protected updateButtons(): void;
    protected andOrClick(e: JQueryEventObject): void;
    protected leftRightParenClick(e: JQueryEventObject): void;
    protected updateParens(): void;
}

declare class FilterDialog extends TemplatedDialog<any> {
    private filterPanel;
    constructor();
    get_filterPanel(): FilterPanel;
    protected getTemplate(): string;
    protected getDialogButtons(): {
        text: string;
        click: () => void;
    }[];
}

declare class FilterDisplayBar extends FilterWidgetBase<any> {
    constructor(div: JQuery);
    protected filterStoreChanged(): void;
    protected getTemplate(): string;
}

declare class SlickPager extends Widget<Slick.PagerOptions> {
    constructor(div: JQuery, o: Slick.PagerOptions);
    _changePage(ctype: string): boolean;
    _updatePager(): void;
}

interface IDataGrid {
    getElement(): JQuery;
    getGrid(): Slick.Grid;
    getView(): Slick.RemoteView<any>;
    getFilterStore(): FilterStore;
}
declare global {
    namespace Slick {
        interface Column {
            sourceItem?: Serenity.PropertyItem;
        }
    }
}

interface GridRowSelectionMixinOptions {
    selectable?: (item: any) => boolean;
}
declare class GridRowSelectionMixin {
    private idField;
    private include;
    private grid;
    private options;
    constructor(grid: IDataGrid, options?: GridRowSelectionMixinOptions);
    updateSelectAll(): void;
    clear(): void;
    resetCheckedAndRefresh(): void;
    selectKeys(keys: string[]): void;
    getSelectedKeys(): string[];
    getSelectedAsInt32(): number[];
    getSelectedAsInt64(): number[];
    setSelectedKeys(keys: string[]): void;
    private isSelectable;
    static createSelectColumn(getMixin: () => GridRowSelectionMixin): Slick.Column;
}
interface GridRadioSelectionMixinOptions {
    selectable?: (item: any) => boolean;
}
declare class GridRadioSelectionMixin {
    private idField;
    private include;
    private grid;
    private options;
    constructor(grid: IDataGrid, options?: GridRadioSelectionMixinOptions);
    private isSelectable;
    clear(): void;
    resetCheckedAndRefresh(): void;
    getSelectedKey(): string;
    getSelectedAsInt32(): number;
    getSelectedAsInt64(): number;
    setSelectedKey(key: string): void;
    static createSelectColumn(getMixin: () => GridRadioSelectionMixin): Slick.Column;
}
declare namespace GridSelectAllButtonHelper {
    function update(grid: IDataGrid, getSelected: (p1: any) => boolean): void;
    function define(getGrid: () => IDataGrid, getId: (p1: any) => any, getSelected: (p1: any) => boolean, setSelected: (p1: any, p2: boolean) => void, text?: string, onClick?: () => void): ToolButton;
}
declare namespace GridUtils {
    function addToggleButton(toolDiv: JQuery, cssClass: string, callback: (p1: boolean) => void, hint: string, initial?: boolean): void;
    function addIncludeDeletedToggle(toolDiv: JQuery, view: Slick.RemoteView<any>, hint?: string, initial?: boolean): void;
    function addQuickSearchInput(toolDiv: JQuery, view: Slick.RemoteView<any>, fields?: QuickSearchField[], onChange?: () => void): void;
    function addQuickSearchInputCustom(container: JQuery, onSearch: (p1: string, p2: string, done: (p3: boolean) => void) => void, fields?: QuickSearchField[]): QuickSearchInput;
    function makeOrderable(grid: Slick.Grid, handleMove: (p1: any, p2: number) => void): void;
    function makeOrderableWithUpdateRequest(grid: IDataGrid, getId: (p1: any) => number, getDisplayOrder: (p1: any) => any, service: string, getUpdateRequest: (p1: number, p2: number) => Serenity.SaveRequest<any>): void;
}
declare namespace PropertyItemSlickConverter {
    function toSlickColumns(items: Serenity.PropertyItem[]): Slick.Column[];
    function toSlickColumn(item: Serenity.PropertyItem): Slick.Column;
}
declare namespace SlickFormatting {
    function getEnumText(enumKey: string, name: string): string;
    function treeToggle<TItem>(getView: () => Slick.RemoteView<TItem>, getId: (x: TItem) => any, formatter: Slick.Format): Slick.Format;
    function date(format?: string): Slick.Format;
    function dateTime(format?: string): Slick.Format;
    function checkBox(): Slick.Format;
    function number(format: string): Slick.Format;
    function getItemType(link: JQuery): string;
    function getItemId(link: JQuery): string;
    function itemLinkText(itemType: string, id: any, text: any, extraClass: string, encode: boolean): string;
    function itemLink(itemType: string, idField: string, getText: Slick.Format, cssClass?: Slick.Format, encode?: boolean): Slick.Format;
}
declare namespace SlickHelper {
    function setDefaults(columns: Slick.Column[], localTextPrefix?: string): any;
    function convertToFormatter(format: Slick.Format): Slick.ColumnFormatter;
}
declare namespace SlickTreeHelper {
    function filterCustom<TItem>(item: TItem, getParent: (x: TItem) => any): boolean;
    function filterById<TItem>(item: TItem, view: Slick.RemoteView<TItem>, getParentId: (x: TItem) => any): boolean;
    function setCollapsed<TItem>(items: TItem[], collapsed: boolean): void;
    function setCollapsedFlag<TItem>(item: TItem, collapsed: boolean): void;
    function setIndents<TItem>(items: TItem[], getId: (x: TItem) => any, getParentId: (x: TItem) => any, setCollapsed?: boolean): void;
    function toggleClick<TItem>(e: JQueryEventObject, row: number, cell: number, view: Slick.RemoteView<TItem>, getId: (x: TItem) => any): void;
}

interface IInitializeColumn {
    initializeColumn(column: Slick.Column): void;
}
declare class IInitializeColumn {
}
declare class BooleanFormatter implements Slick.Formatter {
    format(ctx: Slick.FormatterContext): string;
    falseText: string;
    trueText: string;
}
declare class CheckboxFormatter implements Slick.Formatter {
    format(ctx: Slick.FormatterContext): string;
}
declare class DateFormatter implements Slick.Formatter {
    constructor();
    static format(value: any, format?: string): any;
    displayFormat: string;
    format(ctx: Slick.FormatterContext): string;
}
declare class DateTimeFormatter extends DateFormatter {
    constructor();
}
declare class EnumFormatter implements Slick.Formatter {
    format(ctx: Slick.FormatterContext): string;
    enumKey: string;
    static format(enumType: any, value: any): string;
    static getText(enumKey: string, name: string): string;
    static getName(enumType: any, value: any): string;
}
declare class FileDownloadFormatter implements Slick.Formatter, IInitializeColumn {
    format(ctx: Slick.FormatterContext): string;
    static dbFileUrl(filename: string): string;
    initializeColumn(column: Slick.Column): void;
    displayFormat: string;
    originalNameProperty: string;
}
declare class MinuteFormatter implements Slick.Formatter {
    format(ctx: Slick.FormatterContext): string;
    static format(value: number): string;
}
declare class NumberFormatter {
    format(ctx: Slick.FormatterContext): string;
    static format(value: any, format?: string): string;
    displayFormat: string;
}
declare class UrlFormatter implements Slick.Formatter, IInitializeColumn {
    format(ctx: Slick.FormatterContext): string;
    initializeColumn(column: Slick.Column): void;
    displayProperty: string;
    displayFormat: string;
    urlProperty: string;
    urlFormat: string;
    target: string;
}
declare namespace FormatterTypeRegistry {
    function get(key: string): Function;
    function reset(): void;
}

interface SettingStorage {
    getItem(key: string): string;
    setItem(key: string, value: string): void;
}
interface PersistedGridColumn {
    id: string;
    width?: number;
    sort?: number;
    visible?: boolean;
}
interface PersistedGridSettings {
    columns?: PersistedGridColumn[];
    filterItems?: FilterLine[];
    quickFilters?: {
        [key: string]: any;
    };
    quickFilterText?: string;
    quickSearchField?: QuickSearchField;
    quickSearchText?: string;
    includeDeleted?: boolean;
}
interface GridPersistanceFlags {
    columnWidths?: boolean;
    columnVisibility?: boolean;
    sortColumns?: boolean;
    filterItems?: boolean;
    quickFilters?: boolean;
    quickFilterText?: boolean;
    quickSearch?: boolean;
    includeDeleted?: boolean;
}
declare class DataGrid<TItem, TOptions> extends Widget<TOptions> implements IDataGrid, IReadOnly {
    protected titleDiv: JQuery;
    protected toolbar: Toolbar;
    protected filterBar: FilterDisplayBar;
    protected quickFiltersDiv: JQuery;
    protected quickFiltersBar: QuickFilterBar;
    protected slickContainer: JQuery;
    protected allColumns: Slick.Column[];
    protected initialSettings: PersistedGridSettings;
    protected restoringSettings: number;
    private idProperty;
    private isActiveProperty;
    private localTextDbPrefix;
    private isDisabled;
    private rows;
    private slickGridOnSort;
    private slickGridOnClick;
    view: Slick.RemoteView<TItem>;
    slickGrid: Slick.Grid;
    openDialogsAsPanel: boolean;
    static defaultRowHeight: number;
    static defaultHeaderHeight: number;
    static defaultPersistanceStorage: SettingStorage;
    private layoutTimer;
    constructor(container: JQuery, options?: TOptions);
    protected useLayoutTimer(): boolean;
    protected attrs<TAttr>(attrType: {
        new (...args: any[]): TAttr;
    }): TAttr[];
    protected layout(): void;
    protected getInitialTitle(): string;
    protected createToolbarExtensions(): void;
    protected ensureQuickFilterBar(): QuickFilterBar;
    protected createQuickFilters(filters?: QuickFilter<Widget<any>, any>[]): void;
    protected getQuickFilters(): QuickFilter<Widget<any>, any>[];
    static propertyItemToQuickFilter(item: Serenity.PropertyItem): any;
    protected findQuickFilter<TWidget>(type: {
        new (...args: any[]): TWidget;
    }, field: string): TWidget;
    protected tryFindQuickFilter<TWidget>(type: {
        new (...args: any[]): TWidget;
    }, field: string): TWidget;
    protected createIncludeDeletedButton(): void;
    protected getQuickSearchFields(): QuickSearchField[];
    protected createQuickSearchInput(): void;
    destroy(): void;
    protected getItemCssClass(item: TItem, index: number): string;
    protected getItemMetadata(item: TItem, index: number): any;
    protected postProcessColumns(columns: Slick.Column[]): Slick.Column[];
    protected initialPopulate(): void;
    protected canFilterColumn(column: Slick.Column): boolean;
    protected initializeFilterBar(): void;
    protected createSlickGrid(): Slick.Grid;
    protected setInitialSortOrder(): void;
    itemAt(row: number): TItem;
    rowCount(): number;
    getItems(): TItem[];
    setItems(value: TItem[]): void;
    protected bindToSlickEvents(): void;
    protected getAddButtonCaption(): string;
    protected getButtons(): ToolButton[];
    protected editItem(entityOrId: any): void;
    protected editItemOfType(itemType: string, entityOrId: any): void;
    protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    protected viewDataChanged(e: any, rows: TItem[]): void;
    protected bindToViewEvents(): void;
    protected onViewProcessData(response: Serenity.ListResponse<TItem>): Serenity.ListResponse<TItem>;
    protected onViewFilter(item: TItem): boolean;
    protected getIncludeColumns(include: {
        [key: string]: boolean;
    }): void;
    protected setCriteriaParameter(): void;
    protected setEquality(field: string, value: any): void;
    protected setIncludeColumnsParameter(): void;
    protected onViewSubmit(): boolean;
    protected markupReady(): void;
    protected createSlickContainer(): JQuery;
    protected createView(): Slick.RemoteView<TItem>;
    protected getDefaultSortBy(): any[];
    protected usePager(): boolean;
    protected enableFiltering(): boolean;
    protected populateWhenVisible(): boolean;
    protected createFilterBar(): void;
    protected getPagerOptions(): Slick.PagerOptions;
    protected createPager(): void;
    protected getViewOptions(): Slick.RemoteViewOptions;
    protected createToolbar(buttons: ToolButton[]): void;
    getTitle(): string;
    setTitle(value: string): void;
    protected getItemType(): string;
    protected itemLink(itemType?: string, idField?: string, text?: (ctx: Slick.FormatterContext) => string, cssClass?: (ctx: Slick.FormatterContext) => string, encode?: boolean): Slick.Format;
    protected getColumnsKey(): string;
    protected getPropertyItems(): Serenity.PropertyItem[];
    protected getColumns(): Slick.Column[];
    protected propertyItemsToSlickColumns(propertyItems: Serenity.PropertyItem[]): Slick.Column[];
    protected getSlickOptions(): Slick.GridOptions;
    protected populateLock(): void;
    protected populateUnlock(): void;
    protected getGridCanLoad(): boolean;
    refresh(): void;
    protected refreshIfNeeded(): void;
    protected internalRefresh(): void;
    setIsDisabled(value: boolean): void;
    private _readonly;
    get readOnly(): boolean;
    set readOnly(value: boolean);
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    protected updateInterface(): void;
    protected getLocalTextDbPrefix(): string;
    protected getLocalTextPrefix(): string;
    protected getIdProperty(): string;
    protected getIsDeletedProperty(): string;
    protected getIsActiveProperty(): string;
    protected updateDisabledState(): void;
    protected resizeCanvas(): void;
    protected subDialogDataChange(): void;
    protected addFilterSeparator(): void;
    protected determineText(getKey: (prefix: string) => string): string;
    protected addQuickFilter<TWidget extends Widget<any>, TOptions>(opt: QuickFilter<TWidget, TOptions>): TWidget;
    protected addDateRangeFilter(field: string, title?: string): DateEditor;
    protected dateRangeQuickFilter(field: string, title?: string): QuickFilter<DateEditor, DateTimeEditorOptions>;
    protected addDateTimeRangeFilter(field: string, title?: string): DateTimeEditor;
    protected dateTimeRangeQuickFilter(field: string, title?: string): QuickFilter<DateTimeEditor, DateTimeEditorOptions>;
    protected addBooleanFilter(field: string, title?: string, yes?: string, no?: string): SelectEditor;
    protected booleanQuickFilter(field: string, title?: string, yes?: string, no?: string): QuickFilter<SelectEditor, SelectEditorOptions>;
    protected invokeSubmitHandlers(): void;
    protected quickFilterChange(e: JQueryEventObject): void;
    protected getPersistanceStorage(): SettingStorage;
    protected getPersistanceKey(): string;
    protected gridPersistanceFlags(): GridPersistanceFlags;
    protected canShowColumn(column: Slick.Column): boolean;
    protected getPersistedSettings(): PersistedGridSettings;
    protected restoreSettings(settings?: PersistedGridSettings, flags?: GridPersistanceFlags): void;
    protected persistSettings(flags?: GridPersistanceFlags): void;
    protected getCurrentSettings(flags?: GridPersistanceFlags): PersistedGridSettings;
    getElement(): JQuery;
    getGrid(): Slick.Grid;
    getView(): Slick.RemoteView<TItem>;
    getFilterStore(): FilterStore;
}

declare class ColumnPickerDialog extends TemplatedDialog<any> {
    private ulVisible;
    private ulHidden;
    private colById;
    allColumns: Slick.Column[];
    visibleColumns: string[];
    defaultColumns: string[];
    done: () => void;
    constructor();
    static createToolButton(grid: IDataGrid): ToolButton;
    protected getDialogButtons(): {
        text: string;
        click: () => void;
    }[];
    protected getDialogOptions(): JQueryUI.DialogOptions;
    private getTitle;
    private allowHide;
    private createLI;
    private updateListStates;
    protected setupColumns(): void;
    protected onDialogOpen(): void;
    protected getTemplate(): string;
}

declare class EntityGrid<TItem, TOptions> extends DataGrid<TItem, TOptions> {
    constructor(container: JQuery, options?: TOptions);
    protected usePager(): boolean;
    protected createToolbarExtensions(): void;
    protected getInitialTitle(): string;
    protected getLocalTextPrefix(): string;
    private entityType;
    protected getEntityType(): string;
    private displayName;
    protected getDisplayName(): string;
    private itemName;
    protected getItemName(): string;
    protected getAddButtonCaption(): string;
    protected getButtons(): ToolButton[];
    protected newRefreshButton(noText?: boolean): ToolButton;
    protected addButtonClick(): void;
    protected editItem(entityOrId: any): void;
    protected editItemOfType(itemType: string, entityOrId: any): void;
    private service;
    protected getService(): string;
    protected getViewOptions(): Slick.RemoteViewOptions;
    protected getItemType(): string;
    protected routeDialog(itemType: string, dialog: Widget<any>): void;
    protected getInsertPermission(): string;
    protected hasInsertPermission(): boolean;
    protected transferDialogReadOnly(dialog: Widget<any>): void;
    protected initDialog(dialog: Widget<any>): void;
    protected initEntityDialog(itemType: string, dialog: Widget<any>): void;
    protected createEntityDialog(itemType: string, callback?: (dlg: Widget<any>) => void): Widget<any>;
    protected getDialogOptions(): JQueryUI.DialogOptions;
    protected getDialogOptionsFor(itemType: string): JQueryUI.DialogOptions;
    protected getDialogTypeFor(itemType: string): {
        new (...args: any[]): Widget<any>;
    };
    private dialogType;
    protected getDialogType(): {
        new (...args: any[]): Widget<any>;
    };
}

/**
 * A mixin that can be applied to a DataGrid for tree functionality
 */
declare class TreeGridMixin<TItem> {
    private options;
    private dataGrid;
    private getId;
    constructor(options: TreeGridMixinOptions<TItem>);
    /**
     * Expands / collapses all rows in a grid automatically
     */
    toggleAll(): void;
    collapseAll(): void;
    expandAll(): void;
    /**
     * Reorders a set of items so that parents comes before their children.
     * This method is required for proper tree ordering, as it is not so easy to perform with SQL.
     * @param items list of items to be ordered
     * @param getId a delegate to get ID of a record (must return same ID with grid identity field)
     * @param getParentId a delegate to get parent ID of a record
     */
    static applyTreeOrdering<TItem>(items: TItem[], getId: (item: TItem) => any, getParentId: (item: TItem) => any): TItem[];
}
interface TreeGridMixinOptions<TItem> {
    grid: DataGrid<TItem, any>;
    getParentId: (item: TItem) => any;
    toggleField: string;
    initialCollapse?: () => boolean;
}

interface CheckTreeItem<TSource> {
    isSelected?: boolean;
    hideCheckBox?: boolean;
    isAllDescendantsSelected?: boolean;
    id?: string;
    text?: string;
    parentId?: string;
    children?: CheckTreeItem<TSource>[];
    source?: TSource;
}
declare class CheckTreeEditor<TItem extends CheckTreeItem<any>, TOptions> extends DataGrid<TItem, TOptions> implements IGetEditValue, ISetEditValue, IReadOnly {
    private byId;
    constructor(div: JQuery, opt?: TOptions);
    protected getIdProperty(): string;
    protected getTreeItems(): TItem[];
    protected updateItems(): void;
    getEditValue(property: Serenity.PropertyItem, target: any): void;
    setEditValue(source: any, property: Serenity.PropertyItem): void;
    protected getButtons(): ToolButton[];
    protected itemSelectedChanged(item: TItem): void;
    protected getSelectAllText(): string;
    protected isThreeStateHierarchy(): boolean;
    protected createSlickGrid(): Slick.Grid;
    protected onViewFilter(item: TItem): boolean;
    protected getInitialCollapse(): boolean;
    protected onViewProcessData(response: Serenity.ListResponse<TItem>): Serenity.ListResponse<TItem>;
    protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    protected updateSelectAll(): void;
    protected updateFlags(): void;
    protected getDescendantsSelected(item: TItem): boolean;
    protected setAllSubTreeSelected(item: TItem, selected: boolean): boolean;
    protected allItemsSelected(): boolean;
    protected allDescendantsSelected(item: TItem): boolean;
    protected getDelimited(): boolean;
    protected anyDescendantsSelected(item: TItem): boolean;
    protected getColumns(): Slick.Column[];
    protected getItemText(ctx: Slick.FormatterContext): string;
    protected getSlickOptions(): Slick.GridOptions;
    protected sortItems(): void;
    protected moveSelectedUp(): boolean;
    private _readOnly;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    private get_value;
    get value(): string[];
    private set_value;
    set value(v: string[]);
}
interface CheckLookupEditorOptions {
    lookupKey?: string;
    checkedOnTop?: boolean;
    showSelectAll?: boolean;
    hideSearch?: boolean;
    delimited?: boolean;
    cascadeFrom?: string;
    cascadeField?: string;
    cascadeValue?: any;
    filterField?: string;
    filterValue?: any;
}
declare class CheckLookupEditor<TItem = any> extends CheckTreeEditor<CheckTreeItem<TItem>, CheckLookupEditorOptions> {
    private searchText;
    private enableUpdateItems;
    constructor(div: JQuery, options: CheckLookupEditorOptions);
    protected updateItems(): void;
    protected getLookupKey(): string;
    protected getButtons(): ToolButton[];
    protected createToolbarExtensions(): void;
    protected getSelectAllText(): string;
    protected cascadeItems(items: TItem[]): TItem[];
    protected filterItems(items: TItem[]): TItem[];
    protected getLookupItems(lookup: Q.Lookup<TItem>): TItem[];
    protected getTreeItems(): CheckTreeItem<TItem>[];
    protected onViewFilter(item: CheckTreeItem<TItem>): boolean;
    protected moveSelectedUp(): boolean;
    protected get_cascadeFrom(): string;
    get cascadeFrom(): string;
    protected getCascadeFromValue(parent: Widget<any>): any;
    protected cascadeLink: CascadedWidgetLink<Widget<any>>;
    protected setCascadeFrom(value: string): void;
    protected set_cascadeFrom(value: string): void;
    set cascadeFrom(value: string);
    protected get_cascadeField(): string;
    get cascadeField(): string;
    protected set_cascadeField(value: string): void;
    set cascadeField(value: string);
    protected get_cascadeValue(): any;
    get cascadeValue(): any;
    protected set_cascadeValue(value: any): void;
    set cascadeValue(value: any);
    protected get_filterField(): string;
    get filterField(): string;
    protected set_filterField(value: string): void;
    set filterField(value: string);
    protected get_filterValue(): any;
    get filterValue(): any;
    protected set_filterValue(value: any): void;
    set filterValue(value: any);
}

declare namespace Reporting {
    interface ReportDialogOptions {
        reportKey?: string;
    }
    class ReportDialog extends TemplatedDialog<ReportDialogOptions> {
        constructor(opt: ReportDialogOptions);
        protected propertyGrid: PropertyGrid;
        protected propertyItems: Serenity.PropertyItem[];
        protected reportKey: string;
        protected createPropertyGrid(): void;
        loadReport(reportKey: string): void;
        executeReport(targetFrame: string, exportType: string): void;
        protected getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportExecuteRequest extends Serenity.ServiceRequest {
        ExportType?: string;
        ReportKey?: string;
        DesignId?: string;
        Parameters?: any;
    }
    class ReportPage extends Widget<any> {
        constructor(div: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: JQueryEventObject): void;
        protected reportLinkClick(e: JQueryEventObject): void;
    }
    interface ReportRetrieveRequest extends Serenity.ServiceRequest {
        ReportKey?: string;
    }
    interface ReportRetrieveResponse extends Serenity.ServiceResponse {
        ReportKey?: string;
        Properties?: Serenity.PropertyItem[];
        Title?: string;
        InitialSettings?: any;
        IsDataOnlyReport?: boolean;
    }
}

declare class AsyncLookupEditor extends LookupEditorBase<LookupEditorOptions, any> {
    constructor(hidden: JQuery, opt: LookupEditorOptions);
    getLookupKey(): string;
}

interface ScriptContext {
}
declare class ScriptContext {
}

declare class IAsyncInit {
}

declare namespace WX {
    function getWidget<TWidget>(element: JQuery, type: any): TWidget;
    var getWidgetName: typeof Widget.getWidgetName;
    function hasOriginalEvent(e: any): boolean;
    function change(widget: any, handler: any): void;
    function changeSelect2(widget: any, handler: any): void;
    function getGridField(widget: Widget<any>): JQuery;
}

declare class Flexify extends Widget<FlexifyOptions> {
    private xDifference;
    private yDifference;
    constructor(container: JQuery, options: FlexifyOptions);
    storeInitialSize(): void;
    private getXFactor;
    private getYFactor;
    private resizeElements;
    private resizeElement;
}
interface FlexifyOptions {
    getXFactor?: (p1: JQuery) => any;
    getYFactor?: (p1: JQuery) => any;
    designWidth?: any;
    designHeight?: any;
}

interface GoogleMapOptions {
    latitude?: any;
    longitude?: any;
    zoom?: any;
    mapTypeId?: any;
    markerTitle?: string;
    markerLatitude?: any;
    markerLongitude?: any;
}
declare class GoogleMap extends Widget<GoogleMapOptions> {
    private map;
    constructor(container: JQuery, opt: GoogleMapOptions);
    get_map(): any;
}

declare class Select2AjaxEditor<TOptions, TItem> extends Widget<TOptions> implements IStringValue {
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

export { AnyWidgetClass, AsyncLookupEditor, BaseEditorFiltering, BaseFiltering, BooleanEditor, BooleanFiltering, BooleanFormatter, CKEditorConfig, CaptureOperationType, CascadedWidgetLink, CategoryAttribute, CheckLookupEditor, CheckLookupEditorOptions, CheckTreeEditor, CheckTreeItem, CheckboxFormatter, ColumnPickerDialog, ColumnsKeyAttribute, CreateWidgetParams, Criteria, CriteriaWithText, CssClassAttribute, DataChangeInfo, DataGrid, DateEditor, DateFiltering, DateFormatter, DateTimeEditor, DateTimeEditorOptions, DateTimeFiltering, DateTimeFormatter, DateYearEditor, DateYearEditorOptions, DecimalEditor, DecimalEditorOptions, DecimalFiltering, Decorators, DefaultValueAttribute, DialogExtensions, DialogTypeAttribute, DialogTypeRegistry, DisplayNameAttribute, EditorAttribute, EditorFiltering, EditorOptionAttribute, EditorTypeAttribute, EditorTypeAttributeBase, EditorTypeRegistry, EditorUtils, ElementAttribute, EmailAddressEditor, EmailEditor, EmailEditorOptions, EntityDialog, EntityGrid, EntityTypeAttribute, EnumEditor, EnumEditorOptions, EnumFiltering, EnumFormatter, EnumKeyAttribute, EnumTypeRegistry, FileDownloadFormatter, FileUploadConstraints, FileUploadEditor, FileUploadEditorOptions, FilterDialog, FilterDisplayBar, FilterLine, FilterOperator, FilterOperators, FilterPanel, FilterStore, FilterWidgetBase, FilterableAttribute, FilteringTypeRegistry, Flexify, FlexifyAttribute, FlexifyOptions, FormKeyAttribute, FormatterTypeRegistry, GeneratedCodeAttribute, GoogleMap, GoogleMapOptions, GridPersistanceFlags, GridRadioSelectionMixin, GridRadioSelectionMixinOptions, GridRowSelectionMixin, GridRowSelectionMixinOptions, GridSelectAllButtonHelper, GridUtils, HiddenAttribute, HintAttribute, HtmlContentEditor, HtmlContentEditorOptions, HtmlNoteContentEditor, HtmlReportContentEditor, IAsyncInit, IBooleanValue, IDataGrid, IDialog, IDoubleValue, IEditDialog, IFiltering, IGetEditValue, IInitializeColumn, IQuickFiltering, IReadOnly, ISetEditValue, ISlickFormatter, IStringValue, IValidateRequired, IdPropertyAttribute, ImageUploadEditor, ImageUploadEditorOptions, InsertableAttribute, IntegerEditor, IntegerEditorOptions, IntegerFiltering, IsActivePropertyAttribute, ItemNameAttribute, LazyLoadHelper, LocalTextPrefixAttribute, LookupEditor, LookupEditorBase, LookupEditorOptions, LookupFiltering, MaskedEditor, MaskedEditorOptions, MaxLengthAttribute, MaximizableAttribute, MinuteFormatter, ModalOptions, MultipleFileUploadEditor, MultipleImageUploadEditor, NamePropertyAttribute, NumberFormatter, OneWayAttribute, OptionAttribute, OptionsTypeAttribute, PanelAttribute, PasswordEditor, PersistedGridColumn, PersistedGridSettings, PlaceholderAttribute, PopupMenuButton, PopupMenuButtonOptions, PopupToolButton, PopupToolButtonOptions, PrefixedContext, PropertyDialog, PropertyGrid, PropertyGridMode, PropertyGridOptions, PropertyItemSlickConverter, PropertyPanel, QuickFilter, QuickFilterArgs, QuickFilterBar, QuickFilterBarOptions, QuickSearchField, QuickSearchInput, QuickSearchInputOptions, RadioButtonEditor, RadioButtonEditorOptions, ReadOnlyAttribute, Recaptcha, RecaptchaOptions, ReflectionOptionsSetter, ReflectionUtils, Reporting, RequiredAttribute, ResizableAttribute, ResponsiveAttribute, ScriptContext, Select2AjaxEditor, Select2CommonOptions, Select2Editor, Select2EditorOptions, Select2FilterOptions, Select2InplaceAddOptions, Select2SearchPromise, Select2SearchQuery, Select2SearchResult, SelectEditor, SelectEditorOptions, ServiceAttribute, ServiceLookupEditor, ServiceLookupEditorBase, ServiceLookupEditorOptions, ServiceLookupFiltering, SettingStorage, SlickFormatting, SlickHelper, SlickPager, SlickTreeHelper, StringEditor, StringFiltering, SubDialogHelper, TabsExtensions, TemplatedDialog, TemplatedPanel, TemplatedWidget, TextAreaEditor, TextAreaEditorOptions, TimeEditor, TimeEditorOptions, ToolButton, Toolbar, ToolbarOptions, TreeGridMixin, TreeGridMixinOptions, URLEditor, UpdatableAttribute, UploadHelper, UploadInputOptions, UploadResponse, UploadedFile, UrlFormatter, VX, ValidationHelper, WX, Widget, WidgetClass, WidgetComponentProps, WidgetDialogClass, datePickerIconSvg, reactPatch };
