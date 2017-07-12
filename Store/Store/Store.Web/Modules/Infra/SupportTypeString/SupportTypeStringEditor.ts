namespace Store.Infra {

    @Serenity.Decorators.registerClass()
    export class SuportTypeStringEditor extends Common.GridEditorBase<SupportTypeStringRow> {
        protected getColumnsKey() { return 'Infra.SupportTypeString'; }
        protected getDialogType() { return SupportTypeStringEditorDialog; }
        protected getLocalTextPrefix() { return SupportTypeStringRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}