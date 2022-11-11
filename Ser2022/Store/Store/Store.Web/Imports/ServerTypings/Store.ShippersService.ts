namespace Store.Store {
    export namespace ShippersService {
        export const baseUrl = 'Store/Shippers';

        export declare function Create(request: Serenity.SaveRequest<ShippersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ShippersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShippersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShippersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Store/Shippers/Create",
            Update = "Store/Shippers/Update",
            Delete = "Store/Shippers/Delete",
            Undelete = "Store/Shippers/Undelete",
            Retrieve = "Store/Shippers/Retrieve",
            List = "Store/Shippers/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Undelete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ShippersService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
