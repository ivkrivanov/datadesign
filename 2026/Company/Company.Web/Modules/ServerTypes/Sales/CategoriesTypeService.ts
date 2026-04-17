import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { CategoriesTypeRow } from "./CategoriesTypeRow";

export namespace CategoriesTypeService {
    export const baseUrl = 'Sales/CategoriesType';

    export declare function Create(request: SaveRequest<CategoriesTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<CategoriesTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<CategoriesTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<CategoriesTypeRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<CategoriesTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<CategoriesTypeRow>>;

    export const Methods = {
        Create: "Sales/CategoriesType/Create",
        Update: "Sales/CategoriesType/Update",
        Delete: "Sales/CategoriesType/Delete",
        Retrieve: "Sales/CategoriesType/Retrieve",
        List: "Sales/CategoriesType/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>CategoriesTypeService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}