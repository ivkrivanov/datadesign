using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store.Forms;

[FormScript("Store.WaresMovement")]
[BasedOnRow(typeof(WaresOrderRow), CheckNames = true)]
public class WaresOrderForm
{
    [Tab("General")]
    [Category("Order")]
    [HalfWidth]
    public int? OperationTypeId { get; set; }
    [DefaultValue("now")]
    [HalfWidth]
    public DateTime OrderDate { get; set; }
    [HalfWidth]
    public String ShopId { get; set; }
    [HalfWidth]
    public String CounterpartyId{ get; set; }
    [HalfWidth]
    public Int32 EmployeeId { get; set; }
    [HalfWidth]
    public DateTime RequiredDate { get; set; }
    [HalfWidth]
    public Int32 ShipperId { get; set; }
    [HalfWidth]
    public DateTime ShippedDate { get; set; }
    [OneThirdWidth]
    public Int32 DocumentTypeId { get; set; }
    [OneThirdWidth]
    public String DocumentNumber { get; set; }
    [OneThirdWidth]
    public DateTime DocumentDate { get; set; }
    [OneThirdWidth]
    public Decimal Total { get; set; }

    [Category("WaresMovementDetailsRow")]
    [WaresOrderDetailEditor]
    public List<WaresOrderDetailRow> DetailList { get; set; }
}