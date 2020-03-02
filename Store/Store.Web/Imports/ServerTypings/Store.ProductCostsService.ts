namespace Store.Store {
    export namespace ProductCostsService {
        export const baseUrl = 'Store/ProductCosts';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductCostsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductCostsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Store/ProductCosts/Retrieve",
            List = "Store/ProductCosts/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProductCostsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

