export {};
export declare class PrefixedContext {
    readonly idPrefix: string;
    constructor(idPrefix: string);
    byId(id: string): JQuery;
    w<TWidget>(id: string, type: {
        new (...args: any[]): TWidget;
    }): TWidget;
}
