export declare function text(key: string): string;
export declare function dbText(prefix: string): ((key: string) => string);
export declare function prefixedText(prefix: string): (text: string, key: string | ((p?: string) => string)) => string;
export declare function tryGetText(key: string): string;
export declare function dbTryText(prefix: string): ((key: string) => string);
export declare function proxyTexts(o: Object, p: string, t: Object): Object;
export declare class LT {
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
