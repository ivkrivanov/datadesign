
namespace Store.Store {

    @Serenity.Decorators.registerEditor()
    export class CounterpartyEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CounterpartyRow> {

        constructor(hidden: JQuery) {
            super(hidden)
        }

        protected getLookupKey() {
            return CounterpartyRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' [' + item.CounterpartyID + ']';
        }
    }
}