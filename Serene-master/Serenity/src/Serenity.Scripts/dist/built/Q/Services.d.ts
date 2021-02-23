/// <reference types="jquery" />
export declare function getCookie(name: string): any;
export declare function serviceCall<TResponse>(options: Serenity.ServiceOptions<TResponse>): JQueryXHR;
export declare function serviceRequest<TResponse>(service: string, request?: any, onSuccess?: (response: TResponse) => void, options?: Serenity.ServiceOptions<TResponse>): JQueryXHR;
export declare function setEquality(request: Serenity.ListRequest, field: string, value: any): void;
export interface PostToServiceOptions {
    url?: string;
    service?: string;
    target?: string;
    request: any;
}
export interface PostToUrlOptions {
    url?: string;
    target?: string;
    params: any;
}
export declare function parseQueryString(s?: string): {};
export declare function postToService(options: PostToServiceOptions): void;
export declare function postToUrl(options: PostToUrlOptions): void;
export declare function resolveUrl(url: string): string;
