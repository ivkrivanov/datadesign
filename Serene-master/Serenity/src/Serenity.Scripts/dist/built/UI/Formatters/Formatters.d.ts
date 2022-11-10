export interface IInitializeColumn {
    initializeColumn(column: Slick.Column): void;
}
export declare class IInitializeColumn {
}
export declare class BooleanFormatter implements Slick.Formatter {
    format(ctx: Slick.FormatterContext): string;
    falseText: string;
    trueText: string;
}
export declare class CheckboxFormatter implements Slick.Formatter {
    format(ctx: Slick.FormatterContext): string;
}
export declare class DateFormatter implements Slick.Formatter {
    constructor();
    static format(value: any, format?: string): any;
    displayFormat: string;
    format(ctx: Slick.FormatterContext): string;
}
export declare class DateTimeFormatter extends DateFormatter {
    constructor();
}
export declare class EnumFormatter implements Slick.Formatter {
    format(ctx: Slick.FormatterContext): string;
    enumKey: string;
    static format(enumType: any, value: any): string;
    static getText(enumKey: string, name: string): string;
    static getName(enumType: any, value: any): string;
}
export declare class FileDownloadFormatter implements Slick.Formatter, IInitializeColumn {
    format(ctx: Slick.FormatterContext): string;
    static dbFileUrl(filename: string): string;
    initializeColumn(column: Slick.Column): void;
    displayFormat: string;
    originalNameProperty: string;
}
export declare class MinuteFormatter implements Slick.Formatter {
    format(ctx: Slick.FormatterContext): string;
    static format(value: number): string;
}
export declare class NumberFormatter {
    format(ctx: Slick.FormatterContext): string;
    static format(value: any, format?: string): string;
    displayFormat: string;
}
export declare class UrlFormatter implements Slick.Formatter, IInitializeColumn {
    format(ctx: Slick.FormatterContext): string;
    initializeColumn(column: Slick.Column): void;
    displayProperty: string;
    displayFormat: string;
    urlProperty: string;
    urlFormat: string;
    target: string;
}
export declare namespace FormatterTypeRegistry {
    function get(key: string): Function;
    function reset(): void;
}
