namespace Warehouse.Store {
    export namespace ItemService {
        export const baseUrl = 'Store/Item';

        export declare function Create(request: Serenity.SaveWithLocalizationRequest<ItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveWithLocalizationRequest<ItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<ItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: ItemListRequest, onSuccess?: (response: Serenity.ListResponse<ItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Store/Item/Create",
            Update = "Store/Item/Update",
            Delete = "Store/Item/Delete",
            Retrieve = "Store/Item/Retrieve",
            RetrieveLocalization = "Store/Item/RetrieveLocalization",
            List = "Store/Item/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'RetrieveLocalization', 
            'List'
        ].forEach(x => {
            (<any>ItemService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

