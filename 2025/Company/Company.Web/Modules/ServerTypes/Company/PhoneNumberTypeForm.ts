import { StringEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface PhoneNumberTypeForm {
    Name: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class PhoneNumberTypeForm extends PrefixedContext {
    static readonly formKey = 'Company.PhoneNumberType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PhoneNumberTypeForm.init)  {
            PhoneNumberTypeForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;

            initFormType(PhoneNumberTypeForm, [
                'Name', w0,
                'IsActive', w1,
                'TenantId', w1
            ]);
        }
    }
}