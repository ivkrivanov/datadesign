import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { OperationTypeForm, OperationTypeRow, OperationTypeService } from '../../ServerTypes/Store';

@Decorators.registerClass('Store.Store.OperationTypeDialog')
export class OperationTypeDialog extends EntityDialog<OperationTypeRow, any> {
    protected getFormKey() { return OperationTypeForm.formKey; }
    protected getIdProperty() { return OperationTypeRow.idProperty; }
    protected getLocalTextPrefix() { return OperationTypeRow.localTextPrefix; }
    protected getNameProperty() { return OperationTypeRow.nameProperty; }
    protected getService() { return OperationTypeService.baseUrl; }
    protected getDeletePermission() { return OperationTypeRow.deletePermission; }
    protected getInsertPermission() { return OperationTypeRow.insertPermission; }
    protected getUpdatePermission() { return OperationTypeRow.updatePermission; }

    protected form = new OperationTypeForm(this.idPrefix);
}