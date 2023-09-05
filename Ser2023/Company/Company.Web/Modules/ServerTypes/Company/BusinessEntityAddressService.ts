import { SaveRequest } from "../Services/SaveRequest";
import { BusinessEntityAddressRow } from "./BusinessEntityAddressRow";
import { SaveResponse } from "../Services/SaveResponse";
import { ServiceOptions, serviceRequest } from "@serenity-is/corelib/q";
import { DeleteRequest } from "../Services/DeleteRequest";
import { DeleteResponse } from "../Services/DeleteResponse";
import { RetrieveRequest } from "../Services/RetrieveRequest";
import { RetrieveResponse } from "../Services/RetrieveResponse";
import { ListRequest } from "../Services/ListRequest";
import { ListResponse } from "../Services/ListResponse";

export namespace BusinessEntityAddressService {
    export const baseUrl = 'Company/BusinessEntityAddress';

    export declare function Create(request: SaveRequest<BusinessEntityAddressRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<BusinessEntityAddressRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<BusinessEntityAddressRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<BusinessEntityAddressRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "Company/BusinessEntityAddress/Create",
        Update: "Company/BusinessEntityAddress/Update",
        Delete: "Company/BusinessEntityAddress/Delete",
        Retrieve: "Company/BusinessEntityAddress/Retrieve",
        List: "Company/BusinessEntityAddress/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>BusinessEntityAddressService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}