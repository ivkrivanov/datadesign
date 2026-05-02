import { EntityDialog } from '@serenity-is/corelib';
import { CategoriesTypeForm, CategoriesTypeRow, CategoriesTypeService } from '../../ServerTypes/Sales';

export class CategoriesTypeDialog extends EntityDialog<CategoriesTypeRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getFormKey() { return CategoriesTypeForm.formKey; }
    protected override getRowDefinition() { return CategoriesTypeRow; }
    protected override getService() { return CategoriesTypeService.baseUrl; }

    protected form = new CategoriesTypeForm(this.idPrefix);
}