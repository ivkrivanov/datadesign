namespace Store.Store {
    export interface StoreForm {
        Position: Serenity.StringEditor;
        WaresMode: Serenity.BooleanEditor;
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

    export class StoreForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Store';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StoreForm.init)  {
                StoreForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(StoreForm, [
                    'Position', w0,
                    'WaresMode', w1,
                    'ShopId', w2,
                    'WaresId', w2,
                    'Key', w0,
                    'Date', w3,
                    'OperationId', w2,
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
                    'Mistake', w1
                ]);
            }
        }
    }
}

