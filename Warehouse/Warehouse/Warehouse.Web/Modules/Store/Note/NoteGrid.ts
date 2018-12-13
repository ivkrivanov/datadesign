
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class NoteGrid extends Serenity.EntityGrid<NoteRow, any> {
        protected getColumnsKey() { return 'Store.Note'; }
        protected getDialogType() { return NoteDialog; }
        protected getIdProperty() { return NoteRow.idProperty; }
        protected getLocalTextPrefix() { return NoteRow.localTextPrefix; }
        protected getService() { return NoteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}