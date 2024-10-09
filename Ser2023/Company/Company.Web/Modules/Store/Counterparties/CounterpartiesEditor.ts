
import { Decorators, LookupEditorBase, LookupEditorOptions } from "@serenity-is/corelib";
import { CounterpartiesRow } from "../../ServerTypes/Store";

@Decorators.registerEditor('Company.Store.CounterpartyEditor')
export class CounterpartiesEditor extends LookupEditorBase<LookupEditorOptions, CounterpartiesRow> {

    constructor(hidden: JQuery) {
        super(hidden)
    }

    protected getLookupKey() {
        return CounterpartiesRow.lookupKey;
    }

    protected getItemText(item, lookup) {
        return super.getItemText(item, lookup) + ' [' + item.CounterpartyId + ']';
    }
}
