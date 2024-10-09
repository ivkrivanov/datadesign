import { Decorators, LookupEditorBase, LookupEditorOptions, EntityDialog } from '@serenity-is/corelib';
import { OperationTypeRow } from '@/ServerTypes/Store';

@Decorators.registerEditor('Company.Store.OperationTypeEditor')
export class OperationTypeEditor<P extends LookupEditorOptions = LookupEditorOptions> extends LookupEditorBase<P, OperationTypeRow> {

    constructor(hidden: JQuery) {
        super(hidden);
    }

    protected getLookupKey() {
        return OperationTypeRow.lookupKey;
    }

    protected getItemText(item, lookup) {
        return super.getItemText(item, lookup);
    }
}
