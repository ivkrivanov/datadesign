
namespace CoreStore.Store {
    export class ProductLangForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductLang';
    }

    export interface ProductLangForm {
        ProductId: Serenity.IntegerEditor;
        LanguageId: Serenity.IntegerEditor;
        ProductName: Serenity.StringEditor;
    }

    [,
        ['ProductId', () => Serenity.IntegerEditor],
        ['LanguageId', () => Serenity.IntegerEditor],
        ['ProductName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ProductLangForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}