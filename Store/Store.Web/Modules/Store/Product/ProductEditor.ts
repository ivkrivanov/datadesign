
namespace Store.Store {

    @Serenity.Decorators.registerEditor()
    export class ProductEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CategoryRow> {

        constructor(hidden: JQuery) {
            super(hidden)
        }

        protected getLookupKey() {
            return CategoryRow.lookupKey;
        }

        protected getItems(lookup: Q.Lookup<CategoryRow>) {
            return super.getItems(lookup).filter(x =>
                x.Type === 200);
        }
    }
}