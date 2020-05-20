namespace CoreStore.Store {
    export interface WarehouseForm {
        WaresMode: Serenity.BooleanEditor;
        MoveId: Serenity.IntegerEditor;
        ShopId: Serenity.IntegerEditor;
        WaresId: Serenity.IntegerEditor;
        Key: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        OperationId: Serenity.IntegerEditor;
        IncomeQuantity: Serenity.DecimalEditor;
        IncomeSinglePrice: Serenity.DecimalEditor;
        IncomeValue: Serenity.DecimalEditor;
        ExpenceQuantity: Serenity.DecimalEditor;
        ExpenceSinglePrice: Serenity.DecimalEditor;
        ExpenceValue: Serenity.DecimalEditor;
        RestQuantity: Serenity.DecimalEditor;
        RestSinglePrice: Serenity.DecimalEditor;
        RestValue: Serenity.DecimalEditor;
        ReCost: Serenity.DecimalEditor;
        Mistake: Serenity.BooleanEditor;
    }

    export class WarehouseForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Warehouse';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WarehouseForm.init)  {
                WarehouseForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(WarehouseForm, [
                    'WaresMode', w0,
                    'MoveId', w1,
                    'ShopId', w1,
                    'WaresId', w1,
                    'Key', w2,
                    'Date', w3,
                    'OperationId', w1,
                    'IncomeQuantity', w4,
                    'IncomeSinglePrice', w4,
                    'IncomeValue', w4,
                    'ExpenceQuantity', w4,
                    'ExpenceSinglePrice', w4,
                    'ExpenceValue', w4,
                    'RestQuantity', w4,
                    'RestSinglePrice', w4,
                    'RestValue', w4,
                    'ReCost', w4,
                    'Mistake', w0
                ]);
            }
        }
    }
}
