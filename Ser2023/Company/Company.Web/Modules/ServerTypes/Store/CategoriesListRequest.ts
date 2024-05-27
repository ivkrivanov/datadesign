import { ListRequest } from "@serenity-is/corelib/q";

export interface CategoriesListRequest extends ListRequest {
    CategoryName?: string;
}