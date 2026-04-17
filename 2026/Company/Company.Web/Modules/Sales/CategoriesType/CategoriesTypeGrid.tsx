import { EntityGrid } from '@serenity-is/corelib';
import { CategoriesTypeColumns, CategoriesTypeRow, CategoriesTypeService } from '../../ServerTypes/Sales';
import { CategoriesTypeDialog } from './CategoriesTypeDialog';

export class CategoriesTypeGrid<p = {}> extends EntityGrid<CategoriesTypeRow, p> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getColumnsKey() { return CategoriesTypeColumns.columnsKey; }
    protected override getDialogType() { return CategoriesTypeDialog; }
    protected override getRowDefinition() { return CategoriesTypeRow; }
    protected override getService() { return CategoriesTypeService.baseUrl; }
}