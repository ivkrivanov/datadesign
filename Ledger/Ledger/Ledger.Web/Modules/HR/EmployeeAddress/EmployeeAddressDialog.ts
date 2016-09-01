
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmployeeAddressDialog extends Serenity.EntityDialog<EmployeeAddressRow, any> {
        protected getFormKey() {
            return EmployeeAddressForm.formKey;
        }

        protected getIdProperty() {
            return EmployeeAddressRow.idProperty;
        }

        protected getLocalTextPrefix() {
            return EmployeeAddressRow.localTextPrefix;
        }

        protected getNameProperty() {
            return EmployeeAddressRow.nameProperty;
        }

        protected getService() {
            return EmployeeAddressService.baseUrl;
        }

        protected form = new EmployeeAddressForm(this.idPrefix);
    }
}