import { PersonColumns, PersonRow } from "../../ServerTypes/Company";
import { Decorators, } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { PersonDialog } from "./PersonDialog";
import { toId } from "@serenity-is/corelib/q";

@Decorators.registerEditor('Company.Company.PersonEditor')
export class PersonEditor<P = {}> extends GridEditorBase<PersonRow, P> {
    protected getColumnsKey() { return PersonColumns.columnsKey; }
    protected getDialogType() { return PersonDialog; }
    protected getLocalTextPrefix() { return PersonRow.localTextPrefix; }

    valicateEntity(row, id) {
        row.BusinessEntityId = toId(row.BusinessEntityId);

        return true;
    }
}