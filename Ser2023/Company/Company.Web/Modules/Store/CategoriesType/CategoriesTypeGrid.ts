
import { Decorators, EntityGrid } from "@serenity-is/corelib";
import { CategoriesTypeColumns, CategoriesTypeRow, CategoriesTypeService } from "../../ServerTypes/Store";
import { CategoriesTypeDialog } from "./CategoriesTypeDialog";

@Decorators.registerClass('Company.Store.CategoriesTypeGrid')
export class CategoriesTypeGrid extends EntityGrid<CategoriesTypeRow, any> {
    protected getColumnsKey() { return CategoriesTypeColumns.columnsKey; }
    protected getDialogType() { return CategoriesTypeDialog; }
    protected getIdProperty() { return CategoriesTypeRow.idProperty; }
    protected getInsertPermission() { return CategoriesTypeRow.insertPermission; }
    protected getLocalTextPrefix() { return CategoriesTypeRow.localTextPrefix; }
    protected getService() { return CategoriesTypeService.baseUrl; }
}
