import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { MeasuresRow } from "./MeasuresRow";

export namespace MeasuresService {
    export const baseUrl = 'Sales/Measures';

    export declare function Create(request: SaveRequest<MeasuresRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<MeasuresRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<MeasuresRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<MeasuresRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<MeasuresRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<MeasuresRow>>;

    export const Methods = {
        Create: "Sales/Measures/Create",
        Update: "Sales/Measures/Update",
        Delete: "Sales/Measures/Delete",
        Retrieve: "Sales/Measures/Retrieve",
        List: "Sales/Measures/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>MeasuresService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}