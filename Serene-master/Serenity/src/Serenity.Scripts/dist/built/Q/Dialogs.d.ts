/// <reference types="jquery" />
/// <reference types="jqueryui" />
export interface DialogButton {
    text?: string;
    hint?: string;
    icon?: string;
    click?: (e: JQueryEventObject) => void;
    cssClass?: string;
    htmlEncode?: boolean;
    result?: string;
}
export interface CommonDialogOptions {
    onOpen?: () => void;
    onClose?: (result: string) => void;
    title?: string;
    htmlEncode?: boolean;
    preWrap?: boolean;
    dialogClass?: string;
    buttons?: DialogButton[];
    modalClass?: string;
    bootstrap?: boolean;
    result?: string;
}
export interface AlertOptions extends CommonDialogOptions {
    okButton?: string | boolean;
}
export declare function isBS3(): boolean;
export declare function bsModalMarkup(title: string, body: string, modalClass?: string): string;
export declare function dialogButtonToBS(x: DialogButton): string;
export declare function dialogButtonToUI(x: DialogButton): JQueryUI.DialogButtonOptions;
export declare function alert(message: string, options?: AlertOptions): void;
export interface ConfirmOptions extends CommonDialogOptions {
    yesButton?: string | boolean;
    noButton?: string | boolean;
    cancelButton?: string | boolean;
    onCancel?: () => void;
    onNo?: () => void;
}
export declare function confirm(message: string, onYes: () => void, options?: ConfirmOptions): void;
export interface IFrameDialogOptions {
    html?: string;
}
export declare function iframeDialog(options: IFrameDialogOptions): void;
export declare function information(message: string, onOk: () => void, options?: ConfirmOptions): void;
export declare function warning(message: string, options?: AlertOptions): void;
export declare function closePanel(element: JQuery, e?: JQueryEventObject): void;
