import { RetrieveRequest, RetrieveResponse, ServiceOptions, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib/q";
import { WaresOrderDetailRow } from "./WaresOrderDetailRow";

export namespace WaresOrderDetailService {
    export const baseUrl = 'Store/WaresOrderDetail';

    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<WaresOrderDetailRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<WaresOrderDetailRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Retrieve: "Store/WaresOrderDetail/Retrieve",
        List: "Store/WaresOrderDetail/List"
    } as const;

    [
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>WaresOrderDetailService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}