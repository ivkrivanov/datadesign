import { ListRequest } from "@serenity-is/corelib/q";

export interface ProductsListRequest extends ListRequest {
    WaresId?: number;
}