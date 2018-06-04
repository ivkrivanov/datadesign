
namespace Ledger.HR.Columns
{
    using System;
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [ColumnsScript("HR.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow))]
    public class EmployeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmployeeId { get; set; }

        [EditLink, DisplayName("Name"), Width(250)]
        public String FullName { get; set; }

        [Width(150)]
        public Int16 Gender { get; set; }

        [EditLink, DisplayName("EGN"), Width(100)]
        public String Egn { get; set; }

        [Width(150)]
        public DateTime HireDate { get; set; }

        [Width(150)]
        public DateTime LengthOfService { get; set; }
        public Double Salary { get; set; }

        //public Int32? TenantId { get; set; }
    }
}