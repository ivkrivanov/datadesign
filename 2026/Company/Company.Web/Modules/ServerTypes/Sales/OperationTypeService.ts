import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { OperationTypeRow } from "./OperationTypeRow";

export namespace OperationTypeService {
    export const baseUrl = 'Sales/OperationType';

    export declare function Create(request: SaveRequest<OperationTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<OperationTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OperationTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<OperationTypeRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<OperationTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<OperationTypeRow>>;

    export const Methods = {
        Create: "Sales/OperationType/Create",
        Update: "Sales/OperationType/Update",
        Delete: "Sales/OperationType/Delete",
        Retrieve: "Sales/OperationType/Retrieve",
        List: "Sales/OperationType/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>OperationTypeService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}