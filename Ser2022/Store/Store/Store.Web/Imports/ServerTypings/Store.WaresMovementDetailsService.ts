namespace Store.Store {
    export namespace WaresMovementDetailsService {
        export const baseUrl = 'Store/WaresMovementDetails';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WaresMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Store/WaresMovementDetails/Retrieve",
            List = "Store/WaresMovementDetails/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WaresMovementDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
