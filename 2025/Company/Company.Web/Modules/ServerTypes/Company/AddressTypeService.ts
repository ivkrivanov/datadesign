import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from '@serenity-is/corelib';
import { AddressTypeRow } from './AddressTypeRow';

export namespace AddressTypeService {
    export const baseUrl = 'Company/AddressType';

    export declare function Create(request: SaveRequest<AddressTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<AddressTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<AddressTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<AddressTypeRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<AddressTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<AddressTypeRow>>;

    export const Methods = {
        Create: "Company/AddressType/Create",
        Update: "Company/AddressType/Update",
        Delete: "Company/AddressType/Delete",
        Retrieve: "Company/AddressType/Retrieve",
        List: "Company/AddressType/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>AddressTypeService)[x] = function (r, s, o) { 
            return serviceRequest(baseUrl + '/' + x, r, s, o); 
        };
    });
}