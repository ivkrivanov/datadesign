export interface NumberFormat {
    decimalSeparator: string;
    groupSeparator?: string;
    decimalDigits?: number;
    positiveSign?: string;
    negativeSign?: string;
    nanSymbol?: string;
    percentSymbol?: string;
    currencySymbol?: string;
}
export interface DateFormat {
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
export interface Locale extends NumberFormat, DateFormat {
    stringCompare?: (a: string, b: string) => number;
    toUpper?: (a: string) => string;
}
export declare let Invariant: Locale;
export declare function compareStringFactory(order: string): ((a: string, b: string) => number);
export declare let Culture: Locale;
export declare function turkishLocaleToUpper(a: string): string;
export declare let turkishLocaleCompare: (a: string, b: string) => number;
export declare function format(format: string, ...prm: any[]): string;
export declare function localeFormat(format: string, l: Locale, ...prm: any[]): string;
export declare let round: (n: number, d?: number, rounding?: boolean) => number;
export declare let trunc: (n: number) => number;
export declare function formatNumber(num: number, format?: string, decOrLoc?: string | NumberFormat, grp?: string): string;
export declare function parseInteger(s: string): number;
export declare function parseDecimal(s: string): number;
export declare function toId(id: any): any;
export declare function formatDate(d: Date | string, format?: string, locale?: Locale): string;
export declare function formatDayHourAndMin(n: number): string;
export declare function formatISODateTimeUTC(d: Date): string;
export declare function parseISODateTime(s: string): Date;
export declare function parseHourAndMin(value: string): number;
export declare function parseDayHourAndMin(s: string): number;
export declare function parseDate(s: string, dateOrder?: string): any;
export declare function splitDateString(s: string): string[];
