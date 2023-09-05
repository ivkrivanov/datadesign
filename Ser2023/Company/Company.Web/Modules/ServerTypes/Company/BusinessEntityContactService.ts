import { SaveRequest } from "../Services/SaveRequest";
import { BusinessEntityContactRow } from "./BusinessEntityContactRow";
import { SaveResponse } from "../Services/SaveResponse";
import { ServiceOptions, serviceRequest } from "@serenity-is/corelib/q";
import { DeleteRequest } from "../Services/DeleteRequest";
import { DeleteResponse } from "../Services/DeleteResponse";
import { RetrieveRequest } from "../Services/RetrieveRequest";
import { RetrieveResponse } from "../Services/RetrieveResponse";
import { ListRequest } from "../Services/ListRequest";
import { ListResponse } from "../Services/ListResponse";

export namespace BusinessEntityContactService {
    export const baseUrl = 'Company/BusinessEntityContact';

    export declare function Create(request: SaveRequest<BusinessEntityContactRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<BusinessEntityContactRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<BusinessEntityContactRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<BusinessEntityContactRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "Company/BusinessEntityContact/Create",
        Update: "Company/BusinessEntityContact/Update",
        Delete: "Company/BusinessEntityContact/Delete",
        Retrieve: "Company/BusinessEntityContact/Retrieve",
        List: "Company/BusinessEntityContact/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>BusinessEntityContactService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}