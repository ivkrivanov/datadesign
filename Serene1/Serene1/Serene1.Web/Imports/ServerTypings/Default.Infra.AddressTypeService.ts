namespace Serene1.Default.Infra {
    export namespace AddressTypeService {
        export const baseUrl = 'Default/Infra/AddressType';

        export declare function Create(request: Serenity.SaveWithLocalizationRequest<AddressTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveWithLocalizationRequest<AddressTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<AddressTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AddressTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AddressTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/Infra/AddressType/Create",
            Update = "Default/Infra/AddressType/Update",
            Delete = "Default/Infra/AddressType/Delete",
            RetrieveLocalization = "Default/Infra/AddressType/RetrieveLocalization",
            Retrieve = "Default/Infra/AddressType/Retrieve",
            List = "Default/Infra/AddressType/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'RetrieveLocalization', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AddressTypeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

