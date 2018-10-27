
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmplAddressTypeGrid extends Serenity.EntityGrid<EmplAddressTypeRow, any> {
        protected getColumnsKey() { return 'HR.EmplAddressType'; }
        protected getDialogType() { return EmplAddressTypeDialog; }
        protected getIdProperty() { return EmplAddressTypeRow.idProperty; }
        protected getLocalTextPrefix() { return EmplAddressTypeRow.localTextPrefix; }
        protected getService() { return EmplAddressTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}