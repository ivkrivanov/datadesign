import { IntegerEditor, StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface OperationTypeForm {
    OpCode: IntegerEditor;
    Operation: StringEditor;
}

export class OperationTypeForm extends PrefixedContext {
    static formKey = 'Store.OperationType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OperationTypeForm.init)  {
            OperationTypeForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(OperationTypeForm, [
                'OpCode', w0,
                'Operation', w1
            ]);
        }
    }
}
