namespace Store.Store {
    export namespace ProductMovementService {
        export const baseUrl = 'Store/ProductMovement';

        export declare function Create(request: Serenity.SaveRequest<ProductMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProductMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: ProductMovementListRequest, onSuccess?: (response: Serenity.ListResponse<ProductMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Store/ProductMovement/Create",
            Update = "Store/ProductMovement/Update",
            Delete = "Store/ProductMovement/Delete",
            Retrieve = "Store/ProductMovement/Retrieve",
            List = "Store/ProductMovement/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProductMovementService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

