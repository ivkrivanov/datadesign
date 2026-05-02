import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { CurrencyRateRow } from "./CurrencyRateRow";

export namespace CurrencyRateService {
    export const baseUrl = 'Sales/CurrencyRate';

    export declare function Create(request: SaveRequest<CurrencyRateRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<CurrencyRateRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<CurrencyRateRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<CurrencyRateRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<CurrencyRateRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<CurrencyRateRow>>;

    export const Methods = {
        Create: "Sales/CurrencyRate/Create",
        Update: "Sales/CurrencyRate/Update",
        Delete: "Sales/CurrencyRate/Delete",
        Retrieve: "Sales/CurrencyRate/Retrieve",
        List: "Sales/CurrencyRate/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>CurrencyRateService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}