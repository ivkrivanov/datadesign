
namespace CoreStore.Store {

    @Serenity.Decorators.registerEditor()
    export class WaresEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CategoriesRow> {

        constructor(hidden: JQuery) {
            super(hidden)
        }

        protected getLookupKey() {
            return CategoriesRow.lookupKey;
        }

        protected getItems(lookup: Q.Lookup<CategoriesRow>) {
            return super.getItems(lookup).filter(x =>
                x.Type === 100);
        }
    }
}
