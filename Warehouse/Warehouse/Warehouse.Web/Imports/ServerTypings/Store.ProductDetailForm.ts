
namespace Warehouse.Store {
    export class ProductDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductDetail';
    }

    export interface ProductDetailForm {
        ProductId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        ProductQuantity: Serenity.DecimalEditor;
        Reduction: Serenity.DecimalEditor;
        PlanPrice: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    [,
        ['ProductId', () => Serenity.IntegerEditor],
        ['Quantity', () => Serenity.DecimalEditor],
        ['ProductQuantity', () => Serenity.DecimalEditor],
        ['Reduction', () => Serenity.DecimalEditor],
        ['PlanPrice', () => Serenity.DecimalEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['IsActive', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ProductDetailForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}