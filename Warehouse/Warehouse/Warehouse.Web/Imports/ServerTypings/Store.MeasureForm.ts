namespace Warehouse.Store {
    export interface MeasureForm {
        MeasureName: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class MeasureForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Measure';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeasureForm.init)  {
                MeasureForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(MeasureForm, [
                    'MeasureName', w0,
                    'InsertDate', w1,
                    'InsertUserId', w2,
                    'UpdateDate', w1,
                    'UpdateUserId', w2,
                    'IsActive', w2,
                    'TenantId', w2
                ]);
            }
        }
    }
}

