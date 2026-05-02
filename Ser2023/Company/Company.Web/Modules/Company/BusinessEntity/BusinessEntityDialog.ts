import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { BusinessEntityForm, BusinessEntityRow, BusinessEntityService } from '../../ServerTypes/Company';

@Decorators.registerClass('Company.Company.BusinessEntityDialog')
export class BusinessEntityDialog extends EntityDialog<BusinessEntityRow, any> {
    protected getFormKey() { return BusinessEntityForm.formKey; }
    protected getRowDefinition() { return BusinessEntityRow; }
    protected getService() { return BusinessEntityService.baseUrl; }

    protected form = new BusinessEntityForm(this.idPrefix);
}