import { StringEditor, ServiceLookupEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface PersonPhoneForm {
    PhoneNumber: StringEditor;
    PhoneNumberTypeId: ServiceLookupEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class PersonPhoneForm extends PrefixedContext {
    static readonly formKey = 'Company.PersonPhone';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonPhoneForm.init)  {
            PersonPhoneForm.init = true;

            var w0 = StringEditor;
            var w1 = ServiceLookupEditor;
            var w2 = IntegerEditor;

            initFormType(PersonPhoneForm, [
                'PhoneNumber', w0,
                'PhoneNumberTypeId', w1,
                'IsActive', w2,
                'TenantId', w2
            ]);
        }
    }
}