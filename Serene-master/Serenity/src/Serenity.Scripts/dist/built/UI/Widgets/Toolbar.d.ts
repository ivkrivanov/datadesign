import { Widget } from "./Widget";
export interface ToolButton {
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
export interface PopupMenuButtonOptions {
    menu?: JQuery;
    onPopup?: () => void;
    positionMy?: string;
    positionAt?: string;
}
export declare class PopupMenuButton extends Widget<PopupMenuButtonOptions> {
    constructor(div: JQuery, opt: PopupMenuButtonOptions);
    destroy(): void;
}
export interface PopupToolButtonOptions extends PopupMenuButtonOptions {
}
export declare class PopupToolButton extends PopupMenuButton {
    constructor(div: JQuery, opt: PopupToolButtonOptions);
}
export interface ToolbarOptions {
    buttons?: ToolButton[];
    hotkeyContext?: any;
}
export declare class Toolbar extends Widget<ToolbarOptions> {
    constructor(div: JQuery, options: ToolbarOptions);
    destroy(): void;
    protected mouseTrap: any;
    protected createButton(container: JQuery, b: ToolButton): void;
    findButton(className: string): JQuery;
    updateInterface(): void;
}
