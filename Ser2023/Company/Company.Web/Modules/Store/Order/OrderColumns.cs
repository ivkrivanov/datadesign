using Serenity.ComponentModel;
using System;

namespace Company.Store.Columns;

[ColumnsScript("Store.Order")]
[BasedOnRow(typeof(OrderRow), CheckNames = true)]
public class OrderColumns
{
    [EditLink, AlignRight, SortOrder(1, descending: false), Width(50)]
    public Int32 OrderId { get; set; }

    //public String OpCode { get; set; }
    [EditLink, QuickFilter(CssClass = "hidden-xs"), SortOrder(1), Width(160)]
    public string Operation { get; set; }

    [EditLink, Width(80), QuickFilter]
    public String CounterpartyId { get; set; }

    [Width(200), QuickFilter]
    public String CompanyName { get; set; }

    [Width(200), EditLink]
    public String ShopName { get; set; }

    public Decimal Value { get; set; }
    [Width(100)]
    public Decimal VAT { get; set; }
    [Width(100)]
    public Decimal Total { get; set; }

    [EditLink, QuickFilter(CssClass = "hidden-xs")]
    public DateTime OrderDate { get; set; }
    public DateTime? RequiredDate { get; set; }
    public DateTime ShippedDate { get; set; }

    [Width(200)] //, EmployeeFormatter(GenderProperty = "EmployeeGender"), QuickFilter(CssClass = "hidden-xs")]
    public String FullName { get; set; }

    [FilterOnly, QuickFilter]
    public ShippingState ShippingState { get; set; }

    [Width(200), ShipperFormatter, QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("multiple", true)]
    public String ShipperCompanyName { get; set; }
}