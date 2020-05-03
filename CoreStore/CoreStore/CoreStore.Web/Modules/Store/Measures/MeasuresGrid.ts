
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class MeasuresGrid extends Serenity.EntityGrid<MeasuresRow, any> {
        protected getColumnsKey() { return 'Store.Measures'; }
        protected getDialogType() { return MeasuresDialog; }
        protected getIdProperty() { return MeasuresRow.idProperty; }
        protected getInsertPermission() { return MeasuresRow.insertPermission; }
        protected getLocalTextPrefix() { return MeasuresRow.localTextPrefix; }
        protected getService() { return MeasuresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}