import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListResponse, serviceRequest } from "@serenity-is/corelib/q";
import { OrderRow } from "./OrderRow";
import { OrderListRequest } from "./OrderListRequest";

export namespace OrderService {
    export const baseUrl = 'Store/Order';

    export declare function Create(request: SaveRequest<OrderRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<OrderRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OrderRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: OrderListRequest, onSuccess?: (response: ListResponse<OrderRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "Store/Order/Create",
        Update: "Store/Order/Update",
        Delete: "Store/Order/Delete",
        Retrieve: "Store/Order/Retrieve",
        List: "Store/Order/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>OrderService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}