import { BusinessEntityContactForm, BusinessEntityContactRow, BusinessEntityContactService } from '../../ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.BusinessEntityContactDialog')
export class BusinessEntityContactDialog extends EntityDialog<BusinessEntityContactRow, any> {
    protected getFormKey() { return BusinessEntityContactForm.formKey; }
    protected getRowDefinition() { return BusinessEntityContactRow; }
    protected getService() { return BusinessEntityContactService.baseUrl; }

    protected form = new BusinessEntityContactForm(this.idPrefix);
}