
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class OperationTypeGrid extends Serenity.EntityGrid<OperationTypeRow, any> {
        protected getColumnsKey() { return 'Store.OperationType'; }
        protected getDialogType() { return OperationTypeDialog; }
        protected getIdProperty() { return OperationTypeRow.idProperty; }
        protected getInsertPermission() { return OperationTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return OperationTypeRow.localTextPrefix; }
        protected getService() { return OperationTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}