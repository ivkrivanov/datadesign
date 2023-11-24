
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.Shippers")]
    [BasedOnRow(typeof(Entities.ShippersRow), CheckNames = true)]
    public class ShippersColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ShipperId { get; set; }
        [EditLink, Width(300)]
        public String CompanyName { get; set; }
        [Width(150)]
        public String Phone { get; set; }
    }
}