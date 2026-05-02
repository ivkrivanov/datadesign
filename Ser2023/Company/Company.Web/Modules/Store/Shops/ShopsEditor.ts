import { Decorators, LookupEditorBase, LookupEditorOptions, EntityDialog } from '@serenity-is/corelib';
import { ShopsRow } from '@/ServerTypes/Store';

@Decorators.registerEditor('Company.Store.ShopsEditor')
export class ShopsEditor<P extends LookupEditorOptions = LookupEditorOptions> extends LookupEditorBase<P, ShopsRow> {

    constructor(hidden: JQuery) {
        super(hidden);
    }

    protected getLookupKey() {
        return ShopsRow.lookupKey;
    }

    protected getItemText(item, lookup) {
        return super.getItemText(item, lookup);
    }
}
