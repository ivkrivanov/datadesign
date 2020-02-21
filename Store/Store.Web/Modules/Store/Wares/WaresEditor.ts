
namespace Store.Store {

    @Serenity.Decorators.registerEditor()
    export class WaresEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CategoryRow> {

        //constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
        //    super(container, opt);
        //}

        constructor(hidden: JQuery) {
            super(hidden)
        }

        protected getLookupKey() {
            return CategoryRow.lookupKey;
        }

        protected getItems(lookup: Q.Lookup<CategoryRow>) {
            return super.getItems(lookup).filter(x =>
                x.Type === 100);
        }
    }
}