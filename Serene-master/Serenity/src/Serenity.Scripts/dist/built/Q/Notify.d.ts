/// <reference types="toastr" />
export declare let defaultNotifyOptions: ToastrOptions;
export declare function notifyWarning(message: string, title?: string, options?: ToastrOptions): void;
export declare function notifySuccess(message: string, title?: string, options?: ToastrOptions): void;
export declare function notifyInfo(message: string, title?: string, options?: ToastrOptions): void;
export declare function notifyError(message: string, title?: string, options?: ToastrOptions): void;
export declare function positionToastContainer(create: boolean): void;
