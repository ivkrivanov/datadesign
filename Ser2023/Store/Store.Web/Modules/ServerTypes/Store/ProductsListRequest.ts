import { ListRequest } from "@serenity-is/corelib";

export interface ProductsListRequest extends ListRequest {
    WaresId?: number;
}
