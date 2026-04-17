import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { AccountTypeRow } from "./AccountTypeRow";

export namespace AccountTypeService {
    export const baseUrl = 'Sales/AccountType';

    export declare function Create(request: SaveRequest<AccountTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<AccountTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<AccountTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<AccountTypeRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<AccountTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<AccountTypeRow>>;

    export const Methods = {
        Create: "Sales/AccountType/Create",
        Update: "Sales/AccountType/Update",
        Delete: "Sales/AccountType/Delete",
        Retrieve: "Sales/AccountType/Retrieve",
        List: "Sales/AccountType/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>AccountTypeService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}