
namespace CoreStore.Store {
    export class CategoriesTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Store.CategoriesType';
    }

    export interface CategoriesTypeForm {
        Type: Serenity.IntegerEditor;
        CategoryType: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    [,
        ['Type', () => Serenity.IntegerEditor],
        ['CategoryType', () => Serenity.StringEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['IsActive', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CategoriesTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}