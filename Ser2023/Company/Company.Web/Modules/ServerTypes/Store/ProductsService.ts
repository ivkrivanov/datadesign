import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListResponse, serviceRequest } from "@serenity-is/corelib/q";
import { ProductsRow } from "./ProductsRow";
import { ProductsListRequest } from "./ProductsListRequest";

export namespace ProductsService {
    export const baseUrl = 'Store/Products';

    export declare function Create(request: SaveRequest<ProductsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<ProductsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ProductsRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ProductsListRequest, onSuccess?: (response: ListResponse<ProductsRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "Store/Products/Create",
        Update: "Store/Products/Update",
        Delete: "Store/Products/Delete",
        Retrieve: "Store/Products/Retrieve",
        List: "Store/Products/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>ProductsService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}