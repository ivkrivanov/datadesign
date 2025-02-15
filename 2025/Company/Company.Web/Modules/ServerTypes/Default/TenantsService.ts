import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from '@serenity-is/corelib';
import { TenantsRow } from './TenantsRow';

export namespace TenantsService {
    export const baseUrl = 'Default/Tenants';

    export declare function Create(request: SaveRequest<TenantsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<TenantsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TenantsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<TenantsRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TenantsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<TenantsRow>>;

    export const Methods = {
        Create: "Default/Tenants/Create",
        Update: "Default/Tenants/Update",
        Delete: "Default/Tenants/Delete",
        Retrieve: "Default/Tenants/Retrieve",
        List: "Default/Tenants/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>TenantsService)[x] = function (r, s, o) { 
            return serviceRequest(baseUrl + '/' + x, r, s, o); 
        };
    });
}