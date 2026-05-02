import { ListRequest } from "@serenity-is/corelib/q";

export interface WaresOrderListRequest extends ListRequest {
    WaresId?: number;
}