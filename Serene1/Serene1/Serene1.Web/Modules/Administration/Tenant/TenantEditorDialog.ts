
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Serene1.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TenantEditorDialog extends Common.GridEditorDialog<TenantRow> {
        protected getFormKey() { return TenantForm.formKey; }
                protected getLocalTextPrefix() { return TenantRow.localTextPrefix; }
        protected getNameProperty() { return TenantRow.nameProperty; }
        protected form = new TenantForm(this.idPrefix);
    }
}