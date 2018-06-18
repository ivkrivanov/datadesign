namespace Serene1.Default.Infra {
    export namespace AddressTypeStringService {
        export const baseUrl = 'Default/Infra/AddressTypeString';

        export declare function Create(request: Serenity.SaveRequest<AddressTypeStringRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AddressTypeStringRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AddressTypeStringRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AddressTypeStringRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/Infra/AddressTypeString/Create",
            Update = "Default/Infra/AddressTypeString/Update",
            Delete = "Default/Infra/AddressTypeString/Delete",
            Retrieve = "Default/Infra/AddressTypeString/Retrieve",
            List = "Default/Infra/AddressTypeString/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AddressTypeStringService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

