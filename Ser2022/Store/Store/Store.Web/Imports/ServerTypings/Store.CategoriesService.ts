namespace Store.Store {
    export namespace CategoriesService {
        export const baseUrl = 'Store/Categories';

        export declare function Create(request: Serenity.SaveWithLocalizationRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveWithLocalizationRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: CategoriesListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: Serenity.Extensions.ExcelImportRequest, onSuccess?: (response: Serenity.Extensions.ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Store/Categories/Create",
            Update = "Store/Categories/Update",
            Delete = "Store/Categories/Delete",
            Retrieve = "Store/Categories/Retrieve",
            List = "Store/Categories/List",
            ExcelImport = "Store/Categories/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>CategoriesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
