
namespace CoreStore.Store {
    export class ProductLogForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductLog';
    }

    export interface ProductLogForm {
        OperationType: Serenity.IntegerEditor;
        ChangingUserId: Serenity.IntegerEditor;
        ValidFrom: Serenity.DateEditor;
        ValidUntil: Serenity.DateEditor;
        ProductId: Serenity.IntegerEditor;
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.StringEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierId: Serenity.IntegerEditor;
        CategoryId: Serenity.IntegerEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }

    [,
        ['OperationType', () => Serenity.IntegerEditor],
        ['ChangingUserId', () => Serenity.IntegerEditor],
        ['ValidFrom', () => Serenity.DateEditor],
        ['ValidUntil', () => Serenity.DateEditor],
        ['ProductId', () => Serenity.IntegerEditor],
        ['ProductName', () => Serenity.StringEditor],
        ['ProductImage', () => Serenity.StringEditor],
        ['Discontinued', () => Serenity.BooleanEditor],
        ['SupplierId', () => Serenity.IntegerEditor],
        ['CategoryId', () => Serenity.IntegerEditor],
        ['QuantityPerUnit', () => Serenity.StringEditor],
        ['UnitPrice', () => Serenity.DecimalEditor],
        ['UnitsInStock', () => Serenity.IntegerEditor],
        ['UnitsOnOrder', () => Serenity.IntegerEditor],
        ['ReorderLevel', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ProductLogForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}