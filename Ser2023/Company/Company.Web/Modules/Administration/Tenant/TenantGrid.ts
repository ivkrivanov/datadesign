
import { TenantDialog } from "./TenantDialog";
import { TenantColumns, TenantRow, TenantService } from "@/ServerTypes/Administration";
import { Decorators, EntityGrid } from "@serenity-is/corelib"

@Decorators.registerClass('Company.Administration.TenantGrid')

export class TenantGrid extends EntityGrid<TenantRow, any> {
    protected useAsync() { return true; }
    protected getColumnsKey() { return TenantColumns.columnsKey; }
    protected getDialogType() { return TenantDialog; }
    protected getIdProperty() { return TenantRow.idProperty; }
    protected getLocalTextPrefix() { return TenantRow.localTextPrefix; }
    protected getService() { return TenantService.baseUrl; }

    constructor(container: JQuery) {
            super(container);
    }
    protected afterInit() {
        super.afterInit();
    }

    protected getDefaultSortBy() {
        return [TenantRow.Fields.TenantName];
    }
}
