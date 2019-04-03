namespace Store.BasicReports {
    export namespace StoreMoveService {
        export const baseUrl = 'BasicReports/StoreMove';

        export declare function List(request: StoreMoveListRequest, onSuccess?: (response: Serenity.ListResponse<Store.StoreMoveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "BasicReports/StoreMove/List"
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

