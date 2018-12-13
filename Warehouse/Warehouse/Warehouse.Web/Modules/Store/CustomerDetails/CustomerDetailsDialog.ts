
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class CustomerDetailsDialog extends Serenity.EntityDialog<CustomerDetailsRow, any> {
        protected getFormKey() { return CustomerDetailsForm.formKey; }
        protected getIdProperty() { return CustomerDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerDetailsRow.localTextPrefix; }
        protected getNameProperty() { return CustomerDetailsRow.nameProperty; }
        protected getService() { return CustomerDetailsService.baseUrl; }

        protected form = new CustomerDetailsForm(this.idPrefix);

    }
}