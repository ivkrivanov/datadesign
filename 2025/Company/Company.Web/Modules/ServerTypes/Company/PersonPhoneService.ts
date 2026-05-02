import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { PersonPhoneRow } from "./PersonPhoneRow";

export namespace PersonPhoneService {
    export const baseUrl = 'Company/PersonPhone';

    export declare function Create(request: SaveRequest<PersonPhoneRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<PersonPhoneRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<PersonPhoneRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<PersonPhoneRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<PersonPhoneRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<PersonPhoneRow>>;

    export const Methods = {
        Create: "Company/PersonPhone/Create",
        Update: "Company/PersonPhone/Update",
        Delete: "Company/PersonPhone/Delete",
        Retrieve: "Company/PersonPhone/Retrieve",
        List: "Company/PersonPhone/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>PersonPhoneService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}