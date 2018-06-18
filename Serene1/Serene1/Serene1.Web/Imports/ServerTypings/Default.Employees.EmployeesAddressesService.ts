namespace Serene1.Default.Employees {
    export namespace EmployeesAddressesService {
        export const baseUrl = 'Default/Employees/EmployeesAddresses';

        export declare function Create(request: Serenity.SaveRequest<EmployeesAddressesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmployeesAddressesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesAddressesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesAddressesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/Employees/EmployeesAddresses/Create",
            Update = "Default/Employees/EmployeesAddresses/Update",
            Delete = "Default/Employees/EmployeesAddresses/Delete",
            Retrieve = "Default/Employees/EmployeesAddresses/Retrieve",
            List = "Default/Employees/EmployeesAddresses/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeesAddressesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

