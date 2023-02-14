export declare type Grouping<TItem> = {
    [key: string]: TItem[];
};
/**
 * Tests if any of array elements matches given predicate
 */
export declare function any<TItem>(array: TItem[], predicate: (x: TItem) => boolean): boolean;
/**
 * Counts number of array elements that matches a given predicate
 */
export declare function count<TItem>(array: TItem[], predicate: (x: TItem) => boolean): number;
/**
 * Gets first element in an array that matches given predicate.
 * Throws an error if no match is found.
 */
export declare function first<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;
/**
 * Gets index of first element in an array that matches given predicate
 */
export declare function indexOf<TItem>(array: TItem[], predicate: (x: TItem) => boolean): number;
/**
 * Inserts an item to the array at specified index
 */
export declare function insert(obj: any, index: number, item: any): void;
/**
 * Determines if the object is an array
 */
export declare function isArray(obj: any): boolean;
/**
* Gets first element in an array that matches given predicate.
* Throws an error if no matches is found, or there are multiple matches.
*/
export declare function single<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;
/**
 * Maps an array into a dictionary with keys determined by specified getKey() callback,
 * and values that are arrays containing elements for a particular key.
 */
export declare function toGrouping<TItem>(items: TItem[], getKey: (x: TItem) => any): Grouping<TItem>;
export declare type Group<TItem> = {
    order: number;
    key: string;
    items: TItem[];
    start: number;
};
export declare type Groups<TItem> = {
    byKey: {
        [key: string]: Group<TItem>;
    };
    inOrder: Group<TItem>[];
};
/**
 * Groups an array with keys determined by specified getKey() callback.
 * Resulting object contains group objects in order and a dictionary to access by key.
 */
export declare function groupBy<TItem>(items: TItem[], getKey: (x: TItem) => any): Groups<TItem>;
/**
 * Gets first element in an array that matches given predicate.
 * Returns null if no match is found.
 */
export declare function tryFirst<TItem>(array: TItem[], predicate: (x: TItem) => boolean): TItem;
