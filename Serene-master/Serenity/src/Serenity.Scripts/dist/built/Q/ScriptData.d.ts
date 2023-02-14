export declare namespace ScriptData {
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
export declare function getRemoteData(key: string): any;
export declare function getRemoteDataAsync(key: string): PromiseLike<any>;
export declare function getLookup<TItem>(key: string): Q.Lookup<TItem>;
export declare function getLookupAsync<TItem>(key: string): PromiseLike<Q.Lookup<TItem>>;
export declare function reloadLookup(key: string): void;
export declare function reloadLookupAsync(key: string): PromiseLike<any>;
export declare function getColumns(key: string): Serenity.PropertyItem[];
export declare function getColumnsAsync(key: string): PromiseLike<Serenity.PropertyItem[]>;
export declare function getForm(key: string): Serenity.PropertyItem[];
export declare function getFormAsync(key: string): PromiseLike<Serenity.PropertyItem[]>;
export declare function getTemplate(key: string): string;
export declare function getTemplateAsync(key: string): PromiseLike<string>;
export declare function canLoadScriptData(name: string): boolean;
