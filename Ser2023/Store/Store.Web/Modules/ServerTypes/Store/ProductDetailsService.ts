import { RetrieveRequest, RetrieveResponse, ListRequest, ListResponse } from "@serenity-is/corelib";
import { ProductDetailsRow } from "./ProductDetailsRow";
import { ServiceOptions, serviceRequest } from "@serenity-is/corelib/q";

export namespace ProductDetailsService {
    export const baseUrl = 'Store/ProductDetails';

    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ProductDetailsRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ProductDetailsRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Retrieve: "Store/ProductDetails/Retrieve",
        List: "Store/ProductDetails/List"
    } as const;

    [
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>ProductDetailsService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
