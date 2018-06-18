
namespace Serene1.Default {
    export class AddressesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Addresses';
    }

    export interface AddressesForm {
        Address: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    [,
        ['Address', () => Serenity.StringEditor],
        ['ZipCode', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['State', () => Serenity.StringEditor],
        ['Country', () => Serenity.StringEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['IsActive', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AddressesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}