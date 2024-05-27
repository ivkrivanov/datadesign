import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { ShopsForm, ShopsRow, ShopsService } from '@/ServerTypes/Store';

@Decorators.registerClass('Store.Store.ShopsDialog')
export class ShopsDialog extends EntityDialog<ShopsRow, any> {
    protected getFormKey() { return ShopsForm.formKey; }
    protected getIdProperty() { return ShopsRow.idProperty; }
    protected getLocalTextPrefix() { return ShopsRow.localTextPrefix; }
    protected getNameProperty() { return ShopsRow.nameProperty; }
    protected getService() { return ShopsService.baseUrl; }
    protected getDeletePermission() { return ShopsRow.deletePermission; }
    protected getInsertPermission() { return ShopsRow.insertPermission; }
    protected getUpdatePermission() { return ShopsRow.updatePermission; }

    protected form = new ShopsForm(this.idPrefix);
}