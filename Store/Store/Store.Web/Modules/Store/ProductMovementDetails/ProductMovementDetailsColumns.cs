
namespace Store.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.ProductMovementDetails")]
    [BasedOnRow(typeof(Entities.ProductMovementDetailsRow), CheckNames = true)]
    public class ProductMovementDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String ProductMoveShopID { get; set; }
        public String ProductProductName { get; set; }
        public Single Quantity { get; set; }
        public Decimal SalePrice { get; set; }
        public Single Discount { get; set; }
        public Int32 DetailID { get; set; }
    }
}