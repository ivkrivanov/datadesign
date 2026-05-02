import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { BusinessEntityContactRow } from "./BusinessEntityContactRow";

export namespace BusinessEntityContactService {
    export const baseUrl = 'Company/BusinessEntityContact';

    export declare function Create(request: SaveRequest<BusinessEntityContactRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<BusinessEntityContactRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<BusinessEntityContactRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<BusinessEntityContactRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<BusinessEntityContactRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<BusinessEntityContactRow>>;

    export const Methods = {
        Create: "Company/BusinessEntityContact/Create",
        Update: "Company/BusinessEntityContact/Update",
        Delete: "Company/BusinessEntityContact/Delete",
        Retrieve: "Company/BusinessEntityContact/Retrieve",
        List: "Company/BusinessEntityContact/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>BusinessEntityContactService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}