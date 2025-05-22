import { CountryForm, CountryRow, CountryService } from '../../ServerTypes/Company';
import { Authorization, Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.CountryDialog')
export class CountryDialog extends EntityDialog<CountryRow, any> {
    protected getFormKey() { return CountryForm.formKey; }
    protected getIdProperty() { return CountryRow.idProperty; }
    protected getRowDefinition() { return CountryRow; }
    protected getIsActiveProperty() { return CountryRow.isActiveProperty; }
    protected getLocalTextPrefix() { return CountryRow.localTextPrefix; }
    protected getNameProperty() { return CountryRow.nameProperty; }
    protected getService() { return CountryService.baseUrl; }

    protected form = new CountryForm(this.idPrefix);

    protected getPropertyItems() {
        var items = super.getPropertyItems();
        if (!Authorization.hasPermission("Administration:Tenants"))
            items = items.filter(x => x.name != CountryRow.Fields.TenantId);

        return items;
    }


}