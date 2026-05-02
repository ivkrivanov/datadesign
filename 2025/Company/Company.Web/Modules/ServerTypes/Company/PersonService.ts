import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { GetNextNumberRequest, GetNextNumberResponse } from "@serenity-is/extensions";
import { PersonRow } from "./PersonRow";

export namespace PersonService {
    export const baseUrl = 'Company/Person';

    export declare function Create(request: SaveRequest<PersonRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<PersonRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<PersonRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<PersonRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<PersonRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<PersonRow>>;

    export const Methods = {
        Create: "Company/Person/Create",
        Update: "Company/Person/Update",
        Delete: "Company/Person/Delete",
        GetNextNumber: "Company/Person/GetNextNumber",
        Retrieve: "Company/Person/Retrieve",
        List: "Company/Person/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'GetNextNumber', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>PersonService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}