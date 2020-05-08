namespace CoreStore.Store {

    @Serenity.Decorators.registerEditor()
    export class ShopsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ShopsRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return ShopsRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup);
        }
    }
}