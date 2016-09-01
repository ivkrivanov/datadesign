
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.Administration {
    
    @Serenity.Decorators.registerClass()
    export class TenantEditor extends Common.GridEditorBase<TenantRow> {
        protected getColumnsKey() { return 'Administration.Tenant'; }
        protected getDialogType() { return TenantEditorDialog; }
                protected getLocalTextPrefix() { return TenantRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}