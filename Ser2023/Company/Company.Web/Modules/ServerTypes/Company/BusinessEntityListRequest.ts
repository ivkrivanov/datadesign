import { ListRequest } from "@serenity-is/corelib/q";

export interface BusinessEntityListRequest extends ListRequest {
    AddressId?: number;
    AddressTypeId?: number;
}