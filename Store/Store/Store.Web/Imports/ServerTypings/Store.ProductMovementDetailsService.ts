namespace Store.Store {
    export namespace ProductMovementDetailsService {
        export const baseUrl = 'Store/ProductMovementDetails';

        export declare function Create(request: Serenity.SaveRequest<ProductMovementDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProductMovementDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Store/ProductMovementDetails/Create",
            Update = "Store/ProductMovementDetails/Update",
            Delete = "Store/ProductMovementDetails/Delete",
            Retrieve = "Store/ProductMovementDetails/Retrieve",
            List = "Store/ProductMovementDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProductMovementDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

