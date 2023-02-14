export {};
export declare namespace TabsExtensions {
    function setDisabled(tabs: JQuery, tabKey: string, isDisabled: boolean): void;
    function toggle(tabs: JQuery, tabKey: string, visible: boolean): void;
    function activeTabKey(tabs: JQuery): string;
    function indexByKey(tabs: JQuery): any;
    function selectTab(tabs: JQuery, tabKey: string): void;
}
