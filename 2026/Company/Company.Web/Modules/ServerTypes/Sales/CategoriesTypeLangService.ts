import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { CategoriesTypeLangRow } from "./CategoriesTypeLangRow";

export namespace CategoriesTypeLangService {
    export const baseUrl = 'Sales/CategoriesTypeLang';

    export declare function Create(request: SaveRequest<CategoriesTypeLangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<CategoriesTypeLangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<CategoriesTypeLangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<CategoriesTypeLangRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<CategoriesTypeLangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<CategoriesTypeLangRow>>;

    export const Methods = {
        Create: "Sales/CategoriesTypeLang/Create",
        Update: "Sales/CategoriesTypeLang/Update",
        Delete: "Sales/CategoriesTypeLang/Delete",
        Retrieve: "Sales/CategoriesTypeLang/Retrieve",
        List: "Sales/CategoriesTypeLang/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>CategoriesTypeLangService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}