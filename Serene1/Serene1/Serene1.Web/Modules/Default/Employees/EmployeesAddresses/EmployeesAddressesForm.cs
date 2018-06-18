
namespace Serene1.Default.Employees.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Employees.EmployeesAddresses")]
    [BasedOnRow(typeof(Entities.EmployeesAddressesRow), CheckNames = true)]
    public class EmployeesAddressesForm
    {
        public Int32 EmployeeId { get; set; }
        public Int32 AddressId { get; set; }
        public Int16 AddressTypeId { get; set; }
        public Int32 TenantId { get; set; }
        public Int16 IsActive { get; set; }
    }
}