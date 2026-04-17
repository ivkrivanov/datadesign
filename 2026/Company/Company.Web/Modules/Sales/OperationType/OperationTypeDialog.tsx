import { EntityDialog } from '@serenity-is/corelib';
import { OperationTypeForm, OperationTypeRow, OperationTypeService } from '../../ServerTypes/Sales';

export class OperationTypeDialog extends EntityDialog<OperationTypeRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getFormKey() { return OperationTypeForm.formKey; }
    protected override getRowDefinition() { return OperationTypeRow; }
    protected override getService() { return OperationTypeService.baseUrl; }

    protected form = new OperationTypeForm(this.idPrefix);
}