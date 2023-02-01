namespace Store.Store {
    export namespace WarehouseService {
        export const baseUrl = 'Store/Warehouse';

        export declare function Create(request: Serenity.SaveRequest<WarehouseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<WarehouseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WarehouseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WarehouseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Warehouse(request: WarehouseRequest, onSuccess?: (response: WarehouseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Store/Warehouse/Create",
            Update = "Store/Warehouse/Update",
            Delete = "Store/Warehouse/Delete",
            Retrieve = "Store/Warehouse/Retrieve",
            List = "Store/Warehouse/List",
            Warehouse = "Store/Warehouse/Warehouse"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Warehouse'
        ].forEach(x => {
            (<any>WarehouseService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
