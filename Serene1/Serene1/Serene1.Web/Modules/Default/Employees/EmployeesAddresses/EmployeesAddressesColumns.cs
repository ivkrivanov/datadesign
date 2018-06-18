
namespace Serene1.Default.Employees.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Employees.EmployeesAddresses")]
    [BasedOnRow(typeof(Entities.EmployeesAddressesRow), CheckNames = true)]
    public class EmployeesAddressesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmployeeAddressId { get; set; }
        public Int32 EmployeeId { get; set; }
        public String Address { get; set; }
        public Int16 AddressTypeId { get; set; }
        public Int32 TenantId { get; set; }
        public Int16 IsActive { get; set; }
    }
}