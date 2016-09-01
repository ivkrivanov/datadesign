
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CategoryEditorDialog extends Common.GridEditorDialog<CategoryRow> {
        protected getFormKey() { return CategoryForm.formKey; }
                protected getLocalTextPrefix() { return CategoryRow.localTextPrefix; }
        protected getNameProperty() { return CategoryRow.nameProperty; }
        protected form = new CategoryForm(this.idPrefix);
    }
}