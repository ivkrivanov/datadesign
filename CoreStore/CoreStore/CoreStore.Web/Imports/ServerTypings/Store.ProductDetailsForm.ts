
namespace CoreStore.Store {
    export class ProductDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductDetails';
    }

    export interface ProductDetailsForm {
        ProductId: Serenity.IntegerEditor;
        WaresId: Serenity.IntegerEditor;
        PlanPrice: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        ProductQuantity: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    [
        ['ProductId', () => Serenity.IntegerEditor],
        ['WaresId', () => Serenity.IntegerEditor],
        ['PlanPrice', () => Serenity.DecimalEditor],
        ['Quantity', () => Serenity.DecimalEditor],
        ['ProductQuantity', () => Serenity.DecimalEditor],
        ['Discount', () => Serenity.DecimalEditor],
        ['IsActive', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ProductDetailsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}