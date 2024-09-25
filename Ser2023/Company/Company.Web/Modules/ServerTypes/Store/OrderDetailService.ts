import { RetrieveRequest, RetrieveResponse, ServiceOptions, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib/q";
import { OrderDetailRow } from "./OrderDetailRow";

export namespace OrderDetailService {
    export const baseUrl = 'Store/OrderDetail';

    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OrderDetailRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<OrderDetailRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Retrieve: "Store/OrderDetail/Retrieve",
        List: "Store/OrderDetail/List"
    } as const;

    [
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>OrderDetailService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}