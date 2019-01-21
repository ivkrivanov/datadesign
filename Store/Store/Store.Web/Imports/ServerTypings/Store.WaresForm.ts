namespace Store.Store {
    export interface WaresForm {
        CategoryID: Serenity.LookupEditor;
        WaresCode: Serenity.StringEditor;
        WaresBarcode: Serenity.StringEditor;
        WaresLabel: Serenity.StringEditor;
        WaresName: Serenity.StringEditor;
        WaresImage: Serenity.ImageUploadEditor;
        CounterpartyID: CounterpartyEditor;
        MeasureID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
        AccountID: Serenity.IntegerEditor;
    }

    export class WaresForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Wares';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WaresForm.init)  {
                WaresForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = CounterpartyEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.BooleanEditor;

                Q.initFormType(WaresForm, [
                    'CategoryID', w0,
                    'WaresCode', w1,
                    'WaresBarcode', w1,
                    'WaresLabel', w1,
                    'WaresName', w1,
                    'WaresImage', w2,
                    'CounterpartyID', w3,
                    'MeasureID', w0,
                    'QuantityPerUnit', w4,
                    'UnitPrice', w5,
                    'Discontinued', w6,
                    'AccountID', w4
                ]);
            }
        }
    }
}

