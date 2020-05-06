
namespace CoreStore.Store {
    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Products';
    }

    export interface ProductsForm {
        ProductCode: Serenity.StringEditor;
        ProductBarcode: Serenity.StringEditor;
        ProductLabel: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.StringEditor;
        SupplierId: Serenity.IntegerEditor;
        CounterpartyId: Serenity.StringEditor;
        CategoryId: Serenity.IntegerEditor;
        MeasureId: Serenity.IntegerEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
        Discontinued: Serenity.BooleanEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    [,
        ['ProductCode', () => Serenity.StringEditor],
        ['ProductBarcode', () => Serenity.StringEditor],
        ['ProductLabel', () => Serenity.StringEditor],
        ['ProductName', () => Serenity.StringEditor],
        ['ProductImage', () => Serenity.StringEditor],
        ['SupplierId', () => Serenity.IntegerEditor],
        ['CounterpartyId', () => Serenity.StringEditor],
        ['CategoryId', () => Serenity.IntegerEditor],
        ['MeasureId', () => Serenity.IntegerEditor],
        ['QuantityPerUnit', () => Serenity.StringEditor],
        ['UnitPrice', () => Serenity.DecimalEditor],
        ['UnitsInStock', () => Serenity.IntegerEditor],
        ['UnitsOnOrder', () => Serenity.IntegerEditor],
        ['ReorderLevel', () => Serenity.IntegerEditor],
        ['Discontinued', () => Serenity.BooleanEditor],
        ['IsActive', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ProductsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}