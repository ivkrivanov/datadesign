import { TenantRow, TenantForm, TenantService } from "../";
import { Decorators, EntityDialog } from "@serenity-is/corelib"

@Decorators.registerClass('Store.Administration.Tenant')
export class TenantDialog extends EntityDialog<TenantRow, any> {
    protected getFormKey() { return TenantForm.formKey; }
    protected getIdProperty() { return TenantRow.idProperty; }
    protected getLocalTextPrefix() { return TenantRow.localTextPrefix; }
    protected getNameProperty() { return TenantRow.nameProperty; }
    protected getService() { return TenantService.baseUrl; }

    protected form = new TenantForm(this.idPrefix);
}