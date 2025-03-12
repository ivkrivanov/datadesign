import { BusinessEntityAddressForm, BusinessEntityAddressRow, BusinessEntityAddressService } from '@/ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.BusinessEntityAddressDialog')
export class BusinessEntityAddressDialog extends EntityDialog<BusinessEntityAddressRow, any> {
    protected getFormKey() { return BusinessEntityAddressForm.formKey; }
    protected getRowDefinition() { return BusinessEntityAddressRow; }
    protected getService() { return BusinessEntityAddressService.baseUrl; }

    protected form = new BusinessEntityAddressForm(this.idPrefix);
}