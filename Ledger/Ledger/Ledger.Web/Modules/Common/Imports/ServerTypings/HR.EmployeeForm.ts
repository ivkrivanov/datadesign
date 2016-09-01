namespace Ledger.HR {
    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'HR.Employee';

    }

    export interface EmployeeForm {
        FirstName: Serenity.StringEditor;
        MiddleName: Serenity.StringEditor;
        SurName: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        Egn: Serenity.StringEditor;
        HireDate: Serenity.DateEditor;
        LengthOfService: Serenity.DateEditor;
        Photo: Serenity.ImageUploadEditor;
        Salary: Serenity.DecimalEditor;
        AddressList: EmployeeAddressEditor;
        EmailList: EmployeeEmailEditor;
        PhoneList: EmployeePhoneEditor;
        NotesList: Infra.NotesEditor;
    }

    [['FirstName', () => Serenity.StringEditor], ['MiddleName', () => Serenity.StringEditor], ['SurName', () => Serenity.StringEditor], ['Gender', () => Serenity.EnumEditor], ['Egn', () => Serenity.StringEditor], ['HireDate', () => Serenity.DateEditor], ['LengthOfService', () => Serenity.DateEditor], ['Photo', () => Serenity.ImageUploadEditor], ['Salary', () => Serenity.DecimalEditor], ['AddressList', () => EmployeeAddressEditor], ['EmailList', () => EmployeeEmailEditor], ['PhoneList', () => EmployeePhoneEditor], ['NotesList', () => Infra.NotesEditor]].forEach(x => Object.defineProperty(EmployeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

