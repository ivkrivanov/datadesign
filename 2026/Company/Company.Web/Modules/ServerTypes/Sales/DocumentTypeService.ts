import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { DocumentTypeRow } from "./DocumentTypeRow";

export namespace DocumentTypeService {
    export const baseUrl = 'Sales/DocumentType';

    export declare function Create(request: SaveRequest<DocumentTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<DocumentTypeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<DocumentTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<DocumentTypeRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<DocumentTypeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<DocumentTypeRow>>;

    export const Methods = {
        Create: "Sales/DocumentType/Create",
        Update: "Sales/DocumentType/Update",
        Delete: "Sales/DocumentType/Delete",
        Retrieve: "Sales/DocumentType/Retrieve",
        List: "Sales/DocumentType/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>DocumentTypeService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}