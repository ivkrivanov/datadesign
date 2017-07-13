namespace Store.Infra {
    export class SupportTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.SupportType';

    }

    export interface SupportTypeForm {
        EnumValue: Serenity.StringEditor;
        EnumName: Serenity.StringEditor;
    }

    [['EnumValue', () => Serenity.StringEditor], ['EnumName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SupportTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

