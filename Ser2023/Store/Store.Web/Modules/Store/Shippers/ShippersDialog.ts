﻿import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { ShippersForm, ShippersRow, ShippersService } from '../../ServerTypes/Store';

@Decorators.registerClass('Store.Store.ShippersDialog')
export class ShippersDialog extends EntityDialog<ShippersRow, any> {
    protected getFormKey() { return ShippersForm.formKey; }
    protected getIdProperty() { return ShippersRow.idProperty; }
    protected getLocalTextPrefix() { return ShippersRow.localTextPrefix; }
    protected getNameProperty() { return ShippersRow.nameProperty; }
    protected getService() { return ShippersService.baseUrl; }
    protected getDeletePermission() { return ShippersRow.deletePermission; }
    protected getInsertPermission() { return ShippersRow.insertPermission; }
    protected getUpdatePermission() { return ShippersRow.updatePermission; }

    protected form = new ShippersForm(this.idPrefix);
}