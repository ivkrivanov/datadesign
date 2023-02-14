export declare function addOption(select: JQuery, key: string, text: string): void;
export declare function addEmptyOption(select: JQuery): void;
export declare function clearOptions(select: JQuery): void;
export declare function findElementWithRelativeId(element: JQuery, relativeId: string): JQuery;
/**
 * Html attribute encodes a string (encodes quotes in addition to &, > and <)
 * @param s String to be HTML attribute encoded
 */
export declare function attrEncode(s: any): string;
/**
 * Html encodes a string
 * @param s String to be HTML encoded
 */
export declare function htmlEncode(s: any): string;
export declare function jsRender(markup: string, data?: any): any;
export declare function log(m: any): void;
export declare function newBodyDiv(): JQuery;
export declare function outerHtml(element: JQuery): string;
