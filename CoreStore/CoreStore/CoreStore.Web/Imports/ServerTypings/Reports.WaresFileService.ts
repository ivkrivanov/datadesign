namespace CoreStore.Reports {
    export namespace WaresFileService {
        export const baseUrl = 'Reports/WaresFile';

        export declare function List(request: WaresFileListRequest, onSuccess?: (response: Serenity.ListResponse<Store.WaresFileRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Reports/WaresFile/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>WaresFileService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
