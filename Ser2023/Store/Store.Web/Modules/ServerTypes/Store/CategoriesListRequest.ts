import { ListRequest } from "@serenity-is/corelib";

export interface CategoriesListRequest extends ListRequest {
    CategoryCode?: number;
}
