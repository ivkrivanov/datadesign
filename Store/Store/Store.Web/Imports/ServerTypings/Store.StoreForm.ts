
namespace Store.Store {
    export class StoreForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Store';
    }

    export interface StoreForm {
        Position: Serenity.IntegerEditor;
        WaresMode: Serenity.BooleanEditor;
        ShopId: Serenity.IntegerEditor;
        WaresId: Serenity.IntegerEditor;
        Key: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        OperationId: Serenity.IntegerEditor;
        IncomeQuantity: Serenity.DecimalEditor;
        IncomeSinglePrice: Serenity.DecimalEditor;
        IncomeValue: Serenity.DecimalEditor;
        AIncomeSinglePrice: Serenity.DecimalEditor;
        AIncomeValue: Serenity.DecimalEditor;
        ExpenceQuantity: Serenity.DecimalEditor;
        ExpenceSinglePrice: Serenity.DecimalEditor;
        ExpenceValue: Serenity.DecimalEditor;
        AExpenceSinglePrice: Serenity.DecimalEditor;
        AExpenceValue: Serenity.DecimalEditor;
        RestQuantity: Serenity.DecimalEditor;
        RestSinglePrice: Serenity.DecimalEditor;
        RestValue: Serenity.DecimalEditor;
        ARestQuantity: Serenity.DecimalEditor;
        ARestSinglePrice: Serenity.DecimalEditor;
        ARestValue: Serenity.DecimalEditor;
        ReCost: Serenity.DecimalEditor;
        AReCost: Serenity.DecimalEditor;
        Mistake: Serenity.BooleanEditor;
        AMistake: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    [
        ['Position', () => Serenity.IntegerEditor],
        ['WaresMode', () => Serenity.BooleanEditor],
        ['ShopId', () => Serenity.IntegerEditor],
        ['WaresId', () => Serenity.IntegerEditor],
        ['Key', () => Serenity.StringEditor],
        ['Date', () => Serenity.DateEditor],
        ['OperationId', () => Serenity.IntegerEditor],
        ['IncomeQuantity', () => Serenity.DecimalEditor],
        ['IncomeSinglePrice', () => Serenity.DecimalEditor],
        ['IncomeValue', () => Serenity.DecimalEditor],
        ['AIncomeSinglePrice', () => Serenity.DecimalEditor],
        ['AIncomeValue', () => Serenity.DecimalEditor],
        ['ExpenceQuantity', () => Serenity.DecimalEditor],
        ['ExpenceSinglePrice', () => Serenity.DecimalEditor],
        ['ExpenceValue', () => Serenity.DecimalEditor],
        ['AExpenceSinglePrice', () => Serenity.DecimalEditor],
        ['AExpenceValue', () => Serenity.DecimalEditor],
        ['RestQuantity', () => Serenity.DecimalEditor],
        ['RestSinglePrice', () => Serenity.DecimalEditor],
        ['RestValue', () => Serenity.DecimalEditor],
        ['ARestQuantity', () => Serenity.DecimalEditor],
        ['ARestSinglePrice', () => Serenity.DecimalEditor],
        ['ARestValue', () => Serenity.DecimalEditor],
        ['ReCost', () => Serenity.DecimalEditor],
        ['AReCost', () => Serenity.DecimalEditor],
        ['Mistake', () => Serenity.BooleanEditor],
        ['AMistake', () => Serenity.BooleanEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['IsActive', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(StoreForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}