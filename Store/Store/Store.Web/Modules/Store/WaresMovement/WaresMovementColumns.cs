
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.WaresMovement")]
    [BasedOnRow(typeof(Entities.WaresMovementRow), CheckNames = true)]
    public class WaresMovementColumns
    {
        [EditLink, QuickFilter(CssClass = "hidden-xs"), SortOrder(1), Width(160)]
        public String OperationTypeOpCode { get; set; }

        [EditLink, AlignRight, SortOrder(1, descending: false), Width(50)]
        public Int32 WaresMoveID { get; set; }

        [Width(200),EditLink]
        public String ShopShopName { get; set; }

        [EditLink, Width(80), QuickFilter]
        public String CounterpartyID { get; set; }
        [Width(200)]
        public String CounterpartyCompanyName { get; set; }
        
        [EditLink, QuickFilter(CssClass = "hidden-xs")]
        public DateTime OrderDate { get; set; }
        public DateTime? RequiredDate { get; set; }
        public DateTime ShippedDate { get; set; }

        [Width(200), EmployeeFormatter(GenderProperty = "EmployeeGender"), QuickFilter(CssClass = "hidden-xs")]
        public String EmployeeFullName { get; set; }

        [FilterOnly, QuickFilter]
        public ShippingState ShippingState { get; set; }

        [Width(200), ShipperFormatter, QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("multiple", true)]
        public String ShipperCompanyName { get; set; }
    }
}