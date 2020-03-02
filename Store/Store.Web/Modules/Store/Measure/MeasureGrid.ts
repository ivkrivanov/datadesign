
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class MeasureGrid extends Serenity.EntityGrid<MeasureRow, any> {
        protected getColumnsKey() { return 'Store.Measure'; }
        protected getDialogType() { return MeasureDialog; }
        protected getIdProperty() { return MeasureRow.idProperty; }
        protected getLocalTextPrefix() { return MeasureRow.localTextPrefix; }
        protected getService() { return MeasureService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}