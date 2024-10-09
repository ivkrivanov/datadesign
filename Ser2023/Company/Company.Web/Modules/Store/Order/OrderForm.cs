using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store.Forms;

[FormScript("Store.Order")]
[BasedOnRow(typeof(OrderRow), CheckNames = true)]
public class OrderForm
{
    [Tab("General")]
    [Category("Order")]
    [HalfWidth]
    public int OperationTypeId { get; set; }

    [DefaultValue("now")]
    [HalfWidth]
    public DateTime OrderDate { get; set; }
    [HalfWidth]
    public string ShopId { get; set; }
    [HalfWidth]
    public string CounterpartyId { get; set; }
    [HalfWidth]
    public int EmployeeId { get; set; }
    [HalfWidth]
    public DateTime RequiredDate { get; set; }

    [Category("Order Details")]
    [OrderDetailEditor]
    public List<OrderDetailRow> DetailList { get; set; }

    [OneThirdWidth]
    public Decimal Value { get; set; }
    [OneThirdWidth]
    public Decimal VAT { get; set; }
    [OneThirdWidth]
    public Decimal Total { get; set; }

    [Tab("Document")]
    [Category("Document")]
    public Int32 DocumentTypeId { get; set; }
    [OneThirdWidth]
    public String DocumentNumber { get; set; }
    [OneThirdWidth]
    public DateTime DocumentDate { get; set; }

    [Tab("Shipping")]
    [Category("Info")]
    [HalfWidth]
    public int ShipperId { get; set; }
    [HalfWidth]
    public DateTime ShippedDate { get; set; }

}