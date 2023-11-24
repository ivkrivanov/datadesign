namespace Store.Store {
    export interface CounterpartiesForm {
        CounterpartyId: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: PhoneEditor;
        NotesList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }

    export class CounterpartiesForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Counterparties';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CounterpartiesForm.init)  {
                CounterpartiesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = PhoneEditor;
                var w3 = NotesEditor;
                var w4 = s.DateEditor;
                var w5 = s.EmailEditor;
                var w6 = s.BooleanEditor;

                Q.initFormType(CounterpartiesForm, [
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
}
