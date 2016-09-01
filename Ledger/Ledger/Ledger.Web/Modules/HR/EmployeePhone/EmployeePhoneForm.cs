
namespace Ledger.HR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("HR.EmployeePhone")]
    [BasedOnRow(typeof(Entities.EmployeePhoneRow))]
    public class EmployeePhoneForm
    {
        public Int32 EmployeeId { get; set; }
        public Int32 PhoneId { get; set; }
        public String PhoneType { get; set; }
        public Int32 TenantId { get; set; }
        public Int16 IsActive { get; set; }
    }
}