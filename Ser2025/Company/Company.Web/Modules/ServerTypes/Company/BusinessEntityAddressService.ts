import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from '@serenity-is/corelib';
import { BusinessEntityAddressRow } from './BusinessEntityAddressRow';

export namespace BusinessEntityAddressService {
    export const baseUrl = 'Company/BusinessEntityAddress';

    export declare function Create(request: SaveRequest<BusinessEntityAddressRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<BusinessEntityAddressRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<BusinessEntityAddressRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<BusinessEntityAddressRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<BusinessEntityAddressRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<BusinessEntityAddressRow>>;

    export const Methods = {
        Create: "Company/BusinessEntityAddress/Create",
        Update: "Company/BusinessEntityAddress/Update",
        Delete: "Company/BusinessEntityAddress/Delete",
        Retrieve: "Company/BusinessEntityAddress/Retrieve",
        List: "Company/BusinessEntityAddress/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>BusinessEntityAddressService)[x] = function (r, s, o) { 
            return serviceRequest(baseUrl + '/' + x, r, s, o); 
        };
    });
}