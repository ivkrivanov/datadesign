import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { MeasuresForm, MeasuresRow, MeasuresService } from '../../ServerTypes/Store';

@Decorators.registerClass('Store.Store.MeasuresDialog')
export class MeasuresDialog extends EntityDialog<MeasuresRow, any> {
    protected getFormKey() { return MeasuresForm.formKey; }
    protected getIdProperty() { return MeasuresRow.idProperty; }
    protected getLocalTextPrefix() { return MeasuresRow.localTextPrefix; }
    protected getNameProperty() { return MeasuresRow.nameProperty; }
    protected getService() { return MeasuresService.baseUrl; }
    protected getDeletePermission() { return MeasuresRow.deletePermission; }
    protected getInsertPermission() { return MeasuresRow.insertPermission; }
    protected getUpdatePermission() { return MeasuresRow.updatePermission; }

    protected form = new MeasuresForm(this.idPrefix);
}