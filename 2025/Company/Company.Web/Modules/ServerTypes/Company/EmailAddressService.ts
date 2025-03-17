import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { EmailAddressRow } from "./EmailAddressRow";

export namespace EmailAddressService {
    export const baseUrl = 'Company/EmailAddress';

    export declare function Create(request: SaveRequest<EmailAddressRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<EmailAddressRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<EmailAddressRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<EmailAddressRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<EmailAddressRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<EmailAddressRow>>;

    export const Methods = {
        Create: "Company/EmailAddress/Create",
        Update: "Company/EmailAddress/Update",
        Delete: "Company/EmailAddress/Delete",
        Retrieve: "Company/EmailAddress/Retrieve",
        List: "Company/EmailAddress/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>EmailAddressService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}