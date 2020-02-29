﻿namespace Store.Store {
    export namespace WaresMovementService {
        export const baseUrl = 'Store/WaresMovement';

        export declare function Create(request: Serenity.SaveRequest<WaresMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<WaresMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: WaresMovementListRequest, onSuccess?: (response: Serenity.ListResponse<WaresMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Store/WaresMovement/Create",
            Update = "Store/WaresMovement/Update",
            Delete = "Store/WaresMovement/Delete",
            Retrieve = "Store/WaresMovement/Retrieve",
            List = "Store/WaresMovement/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WaresMovementService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
