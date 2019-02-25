namespace Store.Store {
    export namespace WaresExcelImportService {
        export const baseUrl = 'Store/Wares/WaresExcelImport';

        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            ExcelImport = "Store/Wares/WaresExcelImport/ExcelImport"
        }

        [
            'ExcelImport'
        ].forEach(x => {
            (<any>WaresExcelImportService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

