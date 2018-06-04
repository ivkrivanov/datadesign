
namespace Ledger.HR.Columns
{
    using System;
    using Serenity.ComponentModel;

    [ColumnsScript("HR.EmployeeAddress")]
    [BasedOnRow(typeof(Entities.EmployeeAddressRow))]
    public class EmployeeAddressColumns
    {
        //[EditLink(ItemType = "Infra.Addresses"), Width(220), QuickFilter]
        [EditLink, Width(220)]
        public string StreetAddress { get; set; }
        [EditLink, Width(150)]
        public String AddressType { get; set; }
        [Width(150)]
        public AddressTypeId AddressTypeId { get; set; }
    }
}