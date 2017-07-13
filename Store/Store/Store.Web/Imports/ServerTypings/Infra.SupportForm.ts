namespace Store.Infra {
    export class SupportForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.Support';

    }

    export interface SupportForm {
        SupportGuid: Serenity.StringEditor;
        SupportTypeId: Serenity.IntegerEditor;
        SupportCode: Serenity.StringEditor;
        SupportName: Serenity.StringEditor;
        SupportDescription: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['SupportGuid', () => Serenity.StringEditor], ['SupportTypeId', () => Serenity.IntegerEditor], ['SupportCode', () => Serenity.StringEditor], ['SupportName', () => Serenity.StringEditor], ['SupportDescription', () => Serenity.StringEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['TenantId', () => Serenity.IntegerEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SupportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

