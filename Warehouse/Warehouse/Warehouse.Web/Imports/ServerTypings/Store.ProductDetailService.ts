namespace Warehouse.Store {
    export namespace ProductDetailService {
        export const baseUrl = 'Store/ProductDetail';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Store/ProductDetail/Retrieve",
            List = "Store/ProductDetail/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProductDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

