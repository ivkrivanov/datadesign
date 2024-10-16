﻿
namespace Store.Administration {

    @Serenity.Decorators.registerClass()
    export class TenantDialog extends Serenity.EntityDialog<TenantRow, any> {
        protected getFormKey() { return TenantForm.formKey; }
        protected getIdProperty() { return TenantRow.idProperty; }
        protected getLocalTextPrefix() { return TenantRow.localTextPrefix; }
        protected getNameProperty() { return TenantRow.nameProperty; }
        protected getService() { return TenantService.baseUrl; }

        protected form = new TenantForm(this.idPrefix);

    }
}