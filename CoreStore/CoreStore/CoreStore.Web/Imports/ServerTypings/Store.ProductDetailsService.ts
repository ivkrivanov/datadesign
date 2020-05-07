namespace CoreStore.Store {
    export namespace ProductDetailsService {
        export const baseUrl = 'Store/ProductDetails';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Store/ProductDetails/Retrieve",
            List = "Store/ProductDetails/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProductDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
