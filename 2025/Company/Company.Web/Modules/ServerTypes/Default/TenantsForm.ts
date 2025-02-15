import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface TenantsForm {
    TenantName: StringEditor;
}

export class TenantsForm extends PrefixedContext {
    static readonly formKey = 'Default.Tenants';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!TenantsForm.init)  {
            TenantsForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(TenantsForm, [
            'TenantName', w1,
            ]);
        }
    }
}