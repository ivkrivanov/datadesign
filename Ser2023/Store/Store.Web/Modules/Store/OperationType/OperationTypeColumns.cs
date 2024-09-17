
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [ColumnsScript("Store.OperationType")]
    [BasedOnRow(typeof(Entities.OperationTypeRow), CheckNames = true)]
    public class OperationTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int OperationTypeId { get; set; }
        public short OpCode { get; set; }
        [EditLink]
        public string Operation { get; set; }
    }
}