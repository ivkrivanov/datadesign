import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { AccountsRow } from "./AccountsRow";

export namespace AccountsService {
    export const baseUrl = 'Sales/Accounts';

    export declare function Create(request: SaveRequest<AccountsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<AccountsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<AccountsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<AccountsRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<AccountsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<AccountsRow>>;

    export const Methods = {
        Create: "Sales/Accounts/Create",
        Update: "Sales/Accounts/Update",
        Delete: "Sales/Accounts/Delete",
        Retrieve: "Sales/Accounts/Retrieve",
        List: "Sales/Accounts/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>AccountsService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}