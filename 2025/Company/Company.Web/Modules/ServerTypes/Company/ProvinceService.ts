import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { ProvinceRow } from "./ProvinceRow";

export namespace ProvinceService {
    export const baseUrl = 'Company/Province';

    export declare function Create(request: SaveRequest<ProvinceRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ProvinceRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ProvinceRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ProvinceRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ProvinceRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ProvinceRow>>;

    export const Methods = {
        Create: "Company/Province/Create",
        Update: "Company/Province/Update",
        Delete: "Company/Province/Delete",
        Retrieve: "Company/Province/Retrieve",
        List: "Company/Province/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>ProvinceService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}