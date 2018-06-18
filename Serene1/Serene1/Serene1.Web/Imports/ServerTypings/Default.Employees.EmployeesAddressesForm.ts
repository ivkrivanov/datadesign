namespace Serene1.Default.Employees {
    export interface EmployeesAddressesForm {
        EmployeeId: Serenity.IntegerEditor;
        AddressId: Serenity.IntegerEditor;
        AddressTypeId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class EmployeesAddressesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Employees.EmployeesAddresses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeesAddressesForm.init)  {
                EmployeesAddressesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(EmployeesAddressesForm, [
                    'EmployeeId', w0,
                    'AddressId', w0,
                    'AddressTypeId', w0,
                    'TenantId', w0,
                    'IsActive', w0
                ]);
            }
        }
    }
}

