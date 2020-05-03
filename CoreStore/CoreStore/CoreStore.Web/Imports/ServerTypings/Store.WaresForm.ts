namespace CoreStore.Store {
    export interface WaresForm {
        CategoryId: Serenity.LookupEditor;
        WaresCode: Serenity.StringEditor;
        WaresBarcode: Serenity.StringEditor;
        WaresLabel: Serenity.StringEditor;
        WaresName: Serenity.StringEditor;
        MeasureId: Serenity.LookupEditor;
        WaresImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        CounterpartyId: CounterpartiesEditor;
        QuantityPerUnit: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        AccountId: Serenity.IntegerEditor;
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
                var w4 = CounterpartiesEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.IntegerEditor;

                Q.initFormType(WaresForm, [
                    'CategoryId', w0,
                    'WaresCode', w1,
                    'WaresBarcode', w1,
                    'WaresLabel', w1,
                    'WaresName', w1,
                    'MeasureId', w0,
                    'WaresImage', w2,
                    'Discontinued', w3,
                    'CounterpartyId', w4,
                    'QuantityPerUnit', w5,
                    'UnitPrice', w5,
                    'AccountId', w6
                ]);
            }
        }
    }
}
