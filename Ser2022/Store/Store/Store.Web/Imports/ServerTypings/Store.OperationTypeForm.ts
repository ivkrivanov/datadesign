namespace Store.Store {
    export interface OperationTypeForm {
        OpCode: Serenity.IntegerEditor;
        Operation: Serenity.StringEditor;
    }

    export class OperationTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Store.OperationType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OperationTypeForm.init)  {
                OperationTypeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(OperationTypeForm, [
                    'OpCode', w0,
                    'Operation', w1
                ]);
            }
        }
    }
}
