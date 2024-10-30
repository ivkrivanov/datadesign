import { CountryForm, CountryRow, CountryService } from '@/ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.CountryDialog')
export class CountryDialog extends EntityDialog<CountryRow, any> {
    protected getFormKey() { return CountryForm.formKey; }
    protected getRowDefinition() { return CountryRow; }
    protected getService() { return CountryService.baseUrl; }

    protected form = new CountryForm(this.idPrefix);
}