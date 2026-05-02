using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("OrderDetail")]
[DisplayName("Order Detail"), InstanceName("Order Detail")]
[ReadPermission(PermissionKeys.Order.View)]
[ModifyPermission(PermissionKeys.Order.Modify)]
[DeletePermission(PermissionKeys.Order.Delete)]
[DataAuditLog]
public sealed class OrderDetailRow : LoggingRow<OrderDetailRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    const string jOrder = nameof(jOrder);
    const string jProduct = nameof(jProduct);
    //const string jCounterparties = nameof(jCounterparties);
    //const string jEmployees = nameof(jEmployees);
    //const string jShippers = nameof(jShippers);
    //const string jOperations = nameof(jOperations);
    //const string jDocuments = nameof(jDocuments);

    [DisplayName("Detail Id"), Column("DetailID"), Identity, IdProperty]
    public int? DetailId { get => fields.DetailId[this]; set => fields.DetailId[this] = value; }

    #region Order

    [DisplayName("Order"), Column("OrderID"), PrimaryKey, NotNull, ForeignKey(typeof(OrderRow)), LeftJoin(jOrder)]
    public int? OrderId { get => fields.OrderId[this]; set => fields.OrderId[this] = value; }

    [DisplayName("Order Shop Id"), Origin(jOrder, nameof(OrderRow.ShopId))] // Expression($"{jOrder}.[ShopID]")]
    public int? OrderShopId { get => fields.OrderShopId[this]; set => fields.OrderShopId[this] = value; }

    [DisplayName("OrderCounterpartyId"), Origin(jOrder, nameof(OrderRow.CounterpartyId))]
    public int? OrderCounterpartyId { get => fields.OrderCounterpartyId[this]; set => fields.OrderCounterpartyId[this] = value; }

    [Origin(jOrder, nameof(OrderRow.EmployeeId))]
    public int? OrderEmployeeId { get => fields.OrderEmployeeId[this]; set => fields.OrderEmployeeId[this] = value; }

    [Origin(jOrder, nameof(OrderRow.ShipperId))]
    public int? OrderShipperId { get => fields.OrderShipperId[this]; set => fields.OrderShipperId[this] = value; }

    [Origin(jOrder, nameof(OrderRow.OperationTypeId))]
    public int? OrderOperationTypeId { get => fields.OrderOperationTypeId[this]; set => fields.OrderOperationTypeId[this] = value; }

    [Origin(jOrder, nameof(OrderRow.OpCode))]
    public short? OrderOperationTypeOpCode { get => fields.OrderOperationTypeOpCode[this]; set => fields.OrderOperationTypeOpCode[this] = value; }

    [Origin(jOrder, nameof(OrderRow.OrderDate))]
    public DateTime? OrderDate { get => fields.OrderDate[this]; set => fields.OrderDate[this] = value; }

    [Origin(jOrder, nameof(OrderRow.RequiredDate))]
    public DateTime? RequiredDate { get => fields.RequiredDate[this]; set => fields.RequiredDate[this] = value; }

    [Origin(jOrder, nameof(OrderRow.ShippedDate))]
    public DateTime? ShippedDate { get => fields.ShippedDate[this]; set => fields.ShippedDate[this] = value; }

    #endregion Order

    #region Product
    [DisplayName("Product"), Column("ProductID"), PrimaryKey, NotNull]
    [ForeignKey(typeof(ProductsRow), "ProductID"), LeftJoin(jProduct), TextualField(nameof(ProductCode))]
    [LookupEditor(typeof(ProductsRow), InplaceAdd = true)]
    public int? ProductId { get => fields.ProductId[this]; set => fields.ProductId[this] = value; }

    [DisplayName("ProductName"), Column("Name"), Origin(jProduct, nameof(ProductsRow.ProductName)), LookupInclude]
    public String ProductName { get => Fields.ProductName[this]; set => Fields.ProductName[this] = value; }

    [Origin(jOrder, nameof(OrderRow.CounterpartyId))]
    public int? ProductCounterpartiesId { get => fields.ProductCounterpartiesId[this]; set => fields.ProductCounterpartiesId[this] = value; }

    [Origin(jProduct, nameof(ProductsRow.CategoryId))]
    public int? ProductCategoryId { get => fields.ProductCounterpartiesId[this]; set => fields.ProductCounterpartiesId[this] = value; }

    [Origin(jProduct, nameof(ProductsRow.QuantityPerUnit))]
    public string ProductQuantityPerUnit { get => fields.ProductQuantityPerUnit[this]; set => fields.ProductQuantityPerUnit[this] = value; }

    [Origin(jProduct, nameof(ProductsRow.UnitPrice))]
    public Decimal? ProductUnitPrice { get => fields.ProductUnitPrice[this]; set => fields.ProductUnitPrice[this] = value; }

    [Origin(jProduct, nameof(ProductsRow.SalePrice))]
    public Decimal? ProductSalePrice { get => fields.ProductSalePrice[this]; set => fields.ProductSalePrice[this] = value; }

    [Origin(jProduct, nameof(ProductsRow.UnitsInStock))]
    public short? UnitsInStock { get => fields.UnitsInStock[this]; set => fields.UnitsInStock[this] = value; }

    [Origin(jProduct, nameof(ProductsRow.UnitsOnOrder))]
    public short? UnitsOnOrder { get => fields.UnitsOnOrder[this]; set => fields.UnitsOnOrder[this] = value; }

    [Origin(jProduct, nameof(ProductsRow.ReorderLevel))]
    public short? ReorderLevel { get => fields.ReorderLevel[this]; set => fields.ReorderLevel[this] = value; }

    [Origin(jProduct, nameof(ProductsRow.Discontinued))]
    public Boolean? Discontinued { get => fields.Discontinued[this]; set => fields.Discontinued[this] = value; }

    #endregion Product

    [DisplayName("Quantity"), NotNull]
    public float? Quantity { get => fields.Quantity[this]; set => fields.Quantity[this] = value; }

    [DisplayName("Single Price"), Size(15), Scale(4), NotNull]
    public decimal? SinglePrice { get => fields.SinglePrice[this]; set => fields.SinglePrice[this] = value; }

    [DisplayName("Sale Price"), Size(15), Scale(4), NotNull]
    public decimal? SalePrice { get => fields.SalePrice[this]; set => fields.SalePrice[this] = value; }

    [DisplayName("Discount"), Size(15), Scale(4), NotNull]
    public decimal? Discount { get => fields.Discount[this]; set => fields.Discount[this] = value; }

    [DisplayName("Product Code"), Expression($"{jProduct}.[ProductCode]")]
    public string ProductCode { get => fields.ProductCode[this]; set => fields.ProductCode[this] = value; }

    [DisplayName("Line Total"), Expression("(T0.[SinglePrice] * T0.[Quantity] - T0.[Discount])")]
    [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
    public decimal? LineTotal { get => fields.LineTotal[this]; set => fields.LineTotal[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => Fields.TenantId[this]; set => Fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => Fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => Fields.IsActive[this]; set => Fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => Fields.IsActive; }

    #endregion Tenant & Activ


    public class RowFields : LoggingRowFields
    {
        public Int32Field DetailId;
        public Int32Field OrderId;
        public Int32Field ProductId;
        public DecimalField SinglePrice;
        public DecimalField SalePrice;
        public SingleField Quantity;
        public DecimalField Discount;


        public Int32Field OrderShopId;
        public Int32Field OrderCounterpartyId;
        public Int32Field OrderEmployeeId;
        public Int32Field OrderShipperId;
        public Int32Field OrderOperationTypeId;
        public Int16Field OrderOperationTypeOpCode;
        public DateTimeField OrderDate;
        public DateTimeField RequiredDate;
        public DateTimeField ShippedDate;

        public StringField ProductCode;
        public StringField ProductName;
        public Int32Field ProductCounterpartiesId;
        public Int32Field ProductCategoryId;
        public StringField ProductQuantityPerUnit;
        public DecimalField ProductUnitPrice;
        public DecimalField ProductSalePrice;
        public Int16Field UnitsInStock;
        public Int16Field UnitsOnOrder;
        public Int16Field ReorderLevel;
        public BooleanField Discontinued;

        public DecimalField LineTotal;

        public Int16Field IsActive;
        public Int32Field TenantId;
    }
}