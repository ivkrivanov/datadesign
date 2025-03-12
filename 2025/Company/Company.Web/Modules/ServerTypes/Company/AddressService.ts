import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from '@serenity-is/corelib';
import { AddressRow } from './AddressRow';

export namespace AddressService {
    export const baseUrl = 'Company/Address';

    export declare function Create(request: SaveRequest<AddressRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<AddressRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<AddressRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<AddressRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<AddressRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<AddressRow>>;

    export const Methods = {
        Create: "Company/Address/Create",
        Update: "Company/Address/Update",
        Delete: "Company/Address/Delete",
        Retrieve: "Company/Address/Retrieve",
        List: "Company/Address/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>AddressService)[x] = function (r, s, o) { 
            return serviceRequest(baseUrl + '/' + x, r, s, o); 
        };
    });
}