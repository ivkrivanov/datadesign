
namespace CoreStore.Store {
    export class CategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Categories';
    }

    export interface CategoriesForm {
        CategoryTypeId: Serenity.IntegerEditor;
        CategoryCode: Serenity.StringEditor;
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Picture: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    [,
        ['CategoryTypeId', () => Serenity.IntegerEditor],
        ['CategoryCode', () => Serenity.StringEditor],
        ['CategoryName', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['Picture', () => Serenity.StringEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['IsActive', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CategoriesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}