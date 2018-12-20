
namespace Warehouse.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ColumnsScript("Store.ItemCategory")]
    [BasedOnRow(typeof(Entities.ItemCategoryRow), CheckNames = true)]
    public class ItemCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemCategoryID { get; set; }
        [EditLink, Width(100)]
        public String ItemCategoryCode { get; set; }
        [EditLink, Width(250)]
        public String ItemCategoryName { get; set; }
        [Width(450)]
        public String ItemCatDescription { get; set; }
        //public Stream ItemPicture { get; set; }
    }
}