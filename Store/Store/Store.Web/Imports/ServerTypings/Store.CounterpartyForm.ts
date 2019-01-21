namespace Store.Store {
    export interface CounterpartyForm {
        CounterpartyID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        Phone: PhoneEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }

    export class CounterpartyForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Counterparty';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CounterpartyForm.init)  {
                CounterpartyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = PhoneEditor;
                var w3 = NotesEditor;
                var w4 = s.DateEditor;
                var w5 = s.EmailEditor;
                var w6 = s.BooleanEditor;

                Q.initFormType(CounterpartyForm, [
                    'CounterpartyID', w0,
                    'CompanyName', w0,
                    'ContactName', w0,
                    'ContactTitle', w0,
                    'Representatives', w1,
                    'Address', w0,
                    'City', w1,
                    'Region', w0,
                    'PostalCode', w0,
                    'Country', w1,
                    'Phone', w2,
                    'NoteList', w3,
                    'LastContactDate', w4,
                    'LastContactedBy', w1,
                    'Email', w5,
                    'SendBulletin', w6
                ]);
            }
        }
    }
}

