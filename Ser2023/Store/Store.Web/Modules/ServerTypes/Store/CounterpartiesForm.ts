import { StringEditor, LookupEditor, DateEditor, EmailEditor, BooleanEditor, PrefixedContext } from "@serenity-is/corelib";
import { PhoneEditor } from "@/Store/Shared/PhoneEditor";
import { NotesEditor } from "@/Store/Notes/NotesEditor";
import { initFormType } from "@serenity-is/corelib/q";

export interface CounterpartiesForm {
    CounterpartyId: StringEditor;
    CompanyName: StringEditor;
    ContactName: StringEditor;
    ContactTitle: StringEditor;
    Representatives: LookupEditor;
    Address: StringEditor;
    Country: LookupEditor;
    City: LookupEditor;
    Region: StringEditor;
    PostalCode: StringEditor;
    Phone: PhoneEditor;
    NotesList: NotesEditor;
    LastContactDate: DateEditor;
    LastContactedBy: LookupEditor;
    Email: EmailEditor;
    SendBulletin: BooleanEditor;
}

export class CounterpartiesForm extends PrefixedContext {
    static formKey = 'Store.Counterparties';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CounterpartiesForm.init)  {
            CounterpartiesForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;
            var w2 = PhoneEditor;
            var w3 = NotesEditor;
            var w4 = DateEditor;
            var w5 = EmailEditor;
            var w6 = BooleanEditor;

            initFormType(CounterpartiesForm, [
                'CounterpartyId', w0,
                'CompanyName', w0,
                'ContactName', w0,
                'ContactTitle', w0,
                'Representatives', w1,
                'Address', w0,
                'Country', w1,
                'City', w1,
                'Region', w0,
                'PostalCode', w0,
                'Phone', w2,
                'NotesList', w3,
                'LastContactDate', w4,
                'LastContactedBy', w1,
                'Email', w5,
                'SendBulletin', w6
            ]);
        }
    }
}
