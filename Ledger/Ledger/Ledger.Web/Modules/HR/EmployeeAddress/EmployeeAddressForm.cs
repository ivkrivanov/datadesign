
namespace Ledger.HR.Forms
{
    using System;
    using Serenity.ComponentModel;

    [FormScript("HR.EmployeeAddress")]
    [BasedOnRow(typeof(Entities.EmployeeAddressRow))]
    public class EmployeeAddressForm
    {
        [LookupEditor("Infra.Addresses")]
        public Int32 AddressId { get; set; }
        public String AddressType { get; set; }

        public AddressTypeId AddressTypeId { get; set; }
    }
}