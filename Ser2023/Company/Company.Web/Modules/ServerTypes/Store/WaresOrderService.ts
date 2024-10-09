import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListResponse, serviceRequest } from "@serenity-is/corelib/q";
import { WaresOrderRow } from "./WaresOrderRow";
import { WaresOrderListRequest } from "./WaresOrderListRequest";

export namespace WaresOrderService {
    export const baseUrl = 'Store/WaresMovement';

    export declare function Create(request: SaveRequest<WaresOrderRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<WaresOrderRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<WaresOrderRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: WaresOrderListRequest, onSuccess?: (response: ListResponse<WaresOrderRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "Store/WaresMovement/Create",
        Update: "Store/WaresMovement/Update",
        Delete: "Store/WaresMovement/Delete",
        Retrieve: "Store/WaresMovement/Retrieve",
        List: "Store/WaresMovement/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>WaresOrderService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}