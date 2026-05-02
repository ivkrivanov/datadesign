import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { CountryForm, CountryRow, CountryService } from '@/ServerTypes/Company';

@Decorators.registerClass('Company.Company.CountryDialog')
export class CountryDialog extends EntityDialog<CountryRow, any> {
    protected getFormKey() { return CountryForm.formKey; }
    protected getRowDefinition() { return CountryRow; }
    protected getIdProperty() { return CountryRow.idProperty; }

    protected getLocalTextPrefix() { return CountryRow.localTextPrefix; }
    protected getNameProperty() { return CountryRow.nameProperty; }
    protected getDeletePermission() { return CountryRow.deletePermission; }
    protected getInsertPermission() { return CountryRow.insertPermission; }
    protected getUpdatePermission() { return CountryRow.updatePermission; }
    protected getService() { return CountryService.baseUrl; }

    protected form = new CountryForm(this.idPrefix);
}