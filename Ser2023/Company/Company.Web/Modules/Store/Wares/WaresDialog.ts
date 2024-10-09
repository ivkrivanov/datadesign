import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { WaresForm, WaresRow, WaresService } from '../../ServerTypes/Store';

@Decorators.registerClass('Store.Store.WaresDialog')
export class WaresDialog extends EntityDialog<WaresRow, any> {
    protected getFormKey() { return WaresForm.formKey; }
    protected getIdProperty() { return WaresRow.idProperty; }
    protected getLocalTextPrefix() { return WaresRow.localTextPrefix; }
    protected getNameProperty() { return WaresRow.nameProperty; }
    protected getService() { return WaresService.baseUrl; }
    protected getDeletePermission() { return WaresRow.deletePermission; }
    protected getInsertPermission() { return WaresRow.insertPermission; }
    protected getUpdatePermission() { return WaresRow.updatePermission; }

    protected form = new WaresForm(this.idPrefix);
}