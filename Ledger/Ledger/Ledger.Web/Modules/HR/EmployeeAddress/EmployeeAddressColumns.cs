
namespace Ledger.HR.Columns
{
    using System;
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [ColumnsScript("HR.EmployeeAddress")]
    [BasedOnRow(typeof(Entities.EmployeeAddressRow))]
    public class EmployeeAddressColumns
    {
        //[EditLink(ItemType = "Infra.Addresses"), Width(220), QuickFilter]
        [EditLink, DisplayName("Address"), Width(220)]
        public string StreetAddress { get; set; }

        [EditLink, Width(150)]
        public String AddressType { get; set; }

        [Width(150)]
        public Int16 AddressTypeId { get; set; }
    }
}