
namespace CoreStore.Store {

    @Serenity.Decorators.registerEditor()
    export class CounterpartiesEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CounterpartiesRow> {

        constructor(hidden: JQuery) {
            super(hidden)
        }

        protected getLookupKey() {
            return CounterpartiesRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' [' + item.CounterpartyId + ']';
        }
    }
}