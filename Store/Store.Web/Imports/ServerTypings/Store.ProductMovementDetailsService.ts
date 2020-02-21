namespace Store.Store {
    export namespace ProductMovementDetailsService {
        export const baseUrl = 'Store/ProductMovementDetails';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Store/ProductMovementDetails/Retrieve",
            List = "Store/ProductMovementDetails/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProductMovementDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

