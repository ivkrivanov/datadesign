import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface TenantsForm {
    TenantName: StringEditor;
}

export class TenantsForm extends PrefixedContext {
    static readonly formKey = 'Administration.Tenants';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TenantsForm.init)  {
            TenantsForm.init = true;

            var w0 = StringEditor;

            initFormType(TenantsForm, [
                'TenantName', w0
            ]);
        }
    }
}