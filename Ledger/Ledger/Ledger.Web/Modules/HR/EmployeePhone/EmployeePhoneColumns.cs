
namespace Ledger.HR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HR.EmployeePhone")]
    [BasedOnRow(typeof(Entities.EmployeePhoneRow))]
    public class EmployeePhoneColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmployeePhoneId { get; set; }
        public Int32 EmployeeId { get; set; }
        public Int32 PhoneId { get; set; }
        [EditLink]
        public String PhoneType { get; set; }
        public Int32 TenantId { get; set; }
        public Int16 IsActive { get; set; }
    }
}