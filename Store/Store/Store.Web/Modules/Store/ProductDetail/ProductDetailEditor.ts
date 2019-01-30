
namespace Store.Store {
    @Serenity.Decorators.registerEditor()
    export class ProductDetailEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Store.WaresRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options)
        }

        protected getLookupKey() {
            return Store.WaresRow.lookupKey;
        }

        protected getItemText(item: Store.WaresRow, lookup: Q.Lookup<WaresRow>) {
            return super.getItemText(item, lookup) +
                ' (' +
                '$' + Q.formatNumber(item.UnitPrice, '#, ##0.00') +
                //', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                //', ' + (item.SupplierCompanyName || 'Unknown') +
                ')';
        }
    }
}