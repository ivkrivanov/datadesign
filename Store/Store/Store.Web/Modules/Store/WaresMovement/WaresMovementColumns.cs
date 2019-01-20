
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.WaresMovement")]
    [BasedOnRow(typeof(Entities.WaresMovementRow), CheckNames = true)]
    public class WaresMovementColumns
    {
        [EditLink, AlignRight, SortOrder(1, descending: true), Width(70)]
        public Int32 WaresMoveID { get; set; }
        [EditLink, Width(200), QuickFilter]
        public String CounterpartyID { get; set; }

        [EditLink, QuickFilter(CssClass = "hidden-xs")]
        public DateTime OrderDate { get; set; }

        [Width(140), EmployeeFormatter(GenderProperty = "EmployeeGender"), QuickFilter(CssClass = "hidden-xs")]
        public String EmployeeFullName { get; set; }
        public DateTime? RequiredDate { get; set; }
        [FilterOnly, QuickFilter]
        public OrderShippingState ShippingState { get; set; }
        public DateTime ShippedDate { get; set; }

        [Width(140), ShipperFormatter, QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("multiple", true)]
        public String ShipperCompanyName { get; set; }


        [EditLink]
        public String ShopShopName { get; set; }
        public String CounterpartyCompanyName { get; set; }

        public String OperationTypeOperation { get; set; }


    }
}