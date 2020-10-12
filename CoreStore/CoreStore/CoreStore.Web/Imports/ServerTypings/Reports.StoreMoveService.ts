namespace CoreStore.Reports {
    export namespace StoreMoveService {
        export const baseUrl = 'Reports/StoreMove';

        export declare function List(request: StoreMoveListRequest, onSuccess?: (response: Serenity.ListResponse<Store.StoreMoveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Reports/StoreMove/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>StoreMoveService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
