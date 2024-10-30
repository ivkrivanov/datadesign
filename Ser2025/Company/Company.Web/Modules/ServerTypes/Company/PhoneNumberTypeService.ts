import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from '@serenity-is/corelib';
import { PhoneNumberTypeRow } from './PhoneNumberTypeRow';

export namespace PhoneNumberTypeService {
    export const baseUrl = 'Company/PhoneNumberType';

    export declare function Create(request: SaveRequest<PhoneNumberTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<PhoneNumberTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<PhoneNumberTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<PhoneNumberTypeRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<PhoneNumberTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<PhoneNumberTypeRow>>;

    export const Methods = {
        Create: "Company/PhoneNumberType/Create",
        Update: "Company/PhoneNumberType/Update",
        Delete: "Company/PhoneNumberType/Delete",
        Retrieve: "Company/PhoneNumberType/Retrieve",
        List: "Company/PhoneNumberType/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>PhoneNumberTypeService)[x] = function (r, s, o) { 
            return serviceRequest(baseUrl + '/' + x, r, s, o); 
        };
    });
}