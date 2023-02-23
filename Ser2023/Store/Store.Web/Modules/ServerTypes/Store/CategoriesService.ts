import { SaveRequest, SaveResponse, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListResponse } from "@serenity-is/corelib";
import { CategoriesRow } from "./CategoriesRow";
import { ServiceOptions, serviceRequest } from "@serenity-is/corelib/q";
import { CategoriesListRequest } from "./CategoriesListRequest";

export namespace CategoriesService {
    export const baseUrl = 'Store/Categories';

    export declare function Create(request: SaveRequest<CategoriesRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<CategoriesRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<CategoriesRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: CategoriesListRequest, onSuccess?: (response: ListResponse<CategoriesRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "Store/Categories/Create",
        Update: "Store/Categories/Update",
        Delete: "Store/Categories/Delete",
        Retrieve: "Store/Categories/Retrieve",
        List: "Store/Categories/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>CategoriesService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
