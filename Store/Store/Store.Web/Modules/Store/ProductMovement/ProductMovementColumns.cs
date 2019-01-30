
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.ProductMovement")]
    [BasedOnRow(typeof(Entities.ProductMovementRow), CheckNames = true)]
    public class ProductMovementColumns
    {
        [EditLink, QuickFilter(CssClass = "hidden-xs"), SortOrder(1), Width(200)]
        public String OperationTypeOpCode { get; set; }
                          
        [EditLink, AlignRight, SortOrder(1, descending: true), Width(70)]
        public Int32 ProductMoveID { get; set; }

        [Width(200), EditLink]
        public String ShopShopName { get; set; }
        [EditLink, Width(100), QuickFilter]
        public String CounterpartyID { get; set; }
        [Width(200)]
        public String CounterpartyCompanyName { get; set; }

        [EditLink, QuickFilter(CssClass = "hidden-xs")]
        public DateTime OrderDate { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ShippedDate { get; set; }

        [Width(200), EmployeeFormatter(GenderProperty = "EmployeeGender"), QuickFilter(CssClass = "hidden-xs")]
        public String EmployeeFullName { get; set; }

        [FilterOnly, QuickFilter]
        public ShippingState ShippingState { get; set; }

        [Width(200), ShipperFormatter, QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("multiple", true)]
        public String ShipperCompanyName { get; set; }


        public String OperationTypeOperation { get; set; }


    }
}