
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.OperationType")]
    [BasedOnRow(typeof(Entities.OperationTypeRow), CheckNames = true)]
    public class OperationTypeColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 OperationTypeId { get; set; }
        [Width(100), EditLink, SortOrder(1)]
        public Int16 OpCode { get; set; }
        [Width(250), EditLink]
        public String Operation { get; set; }
    }
}