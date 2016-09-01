namespace Ledger.Infra {
    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.Category';

    }

    export interface CategoryForm {
        CategoryCode: Serenity.StringEditor;
        CategoryType: Serenity.IntegerEditor;
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Picture: Serenity.ImageUploadEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['CategoryCode', () => Serenity.StringEditor], ['CategoryType', () => Serenity.IntegerEditor], ['CategoryName', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['Picture', () => Serenity.ImageUploadEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(CategoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

