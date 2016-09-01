
namespace Ledger.HR.Columns
{
    using System;
    using Serenity.ComponentModel;

    [ColumnsScript("HR.EmployeeEmail")]
    [BasedOnRow(typeof(Entities.EmployeeEmailRow))]
    public class EmployeeEmailColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 EmployeeEmailId { get; set; }
        //public Int32 EmployeeId { get; set; }
        //public Int32 EmailId { get; set; }

        [EditLink, Width(200)]
        public string EmailAddress { get; set; }
        [EditLink, Width(150)]
        public String EmailType { get; set; }
    }
}