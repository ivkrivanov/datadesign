namespace Store.Store {
    export interface WaresForm {
        CategoryID: Serenity.LookupEditor;
        WaresCode: Serenity.StringEditor;
        WaresBarcode: Serenity.StringEditor;
        WaresLabel: Serenity.StringEditor;
        WaresName: Serenity.StringEditor;
        MeasureID: Serenity.LookupEditor;
        WaresImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        CounterpartyID: CounterpartyEditor;
        QuantityPerUnit: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
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
                var w3 = s.BooleanEditor;
                var w4 = CounterpartyEditor;
                var w5 = s.IntegerEditor;
                var w6 = s.DecimalEditor;

                Q.initFormType(WaresForm, [
                    'CategoryID', w0,
                    'WaresCode', w1,
                    'WaresBarcode', w1,
                    'WaresLabel', w1,
                    'WaresName', w1,
                    'MeasureID', w0,
                    'WaresImage', w2,
                    'Discontinued', w3,
                    'CounterpartyID', w4,
                    'QuantityPerUnit', w5,
                    'UnitPrice', w6,
                    'AccountID', w5
                ]);
            }
        }
    }
}

