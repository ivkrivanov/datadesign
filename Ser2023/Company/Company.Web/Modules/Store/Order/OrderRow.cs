using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using static Company.Store.PermissionKeys;
namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("Order")]
[DisplayName("Order"), InstanceName("Order")]

[ReadPermission(PermissionKeys.Order.View)]
[ModifyPermission(PermissionKeys.Order.Modify)]
[DeletePermission(PermissionKeys.Order.Delete)]
[UpdatableExtension(jDocuments, typeof(OrderDocRow), CascadeDelete = true)]
[UpdatableExtension(jTotal, typeof(OrderTotalRow), CascadeDelete = true)]
[LookupScript(typeof(Lookups.OrderLookup))]
public sealed class OrderRow : LoggingRow<OrderRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jShops = nameof(jShops);
    const string jCounterparties = nameof(jCounterparties);
    const string jEmployees = nameof(jEmployees);
    const string jShippers = nameof(jShippers);
    const string jOperations = nameof(jOperations);
    const string jDocuments = nameof(jDocuments);
    const string jTotal = nameof(jTotal);

    [DisplayName("Order Id"), Column("OrderID"), Identity, IdProperty]
    public int? OrderId { get => fields.OrderId[this]; set => fields.OrderId[this] = value; }

    #region Counterparty

    [DisplayName("Counterparty"), Column("CounterpartyID"), Size(14), NotNull, ForeignKey(typeof(CounterpartiesRow)), LeftJoin(jCounterparties), TextualField(nameof(CompanyName))]
    [QuickSearch, CounterpartiesEditor, LookupInclude, NameProperty]
    public string CounterpartyId { get => fields.CounterpartyId[this]; set => fields.CounterpartyId[this] = value; }

    [DisplayName("CompanyName"), Origin(jCounterparties, nameof(CounterpartiesRow.CompanyName)), QuickSearch]
    [LookupInclude, MinSelectLevel(SelectLevel.List)]
    public String CompanyName { get => fields.CompanyName[this]; set => fields.CompanyName[this] = value; }

    [Origin(jCounterparties, nameof(CounterpartiesRow.ContactName))]
    public String ContactName { get => fields.ContactName[this]; set => Fields.ContactName[this] = value; }

    [Origin(jCounterparties, nameof(CounterpartiesRow.ContactTitle))]
    public String ContactTitle { get => Fields.ContactTitle[this]; set => Fields.ContactTitle[this] = value; }

    [Origin(jCounterparties, nameof(CounterpartiesRow.Address))]
    public String Address { get => Fields.Address[this]; set => Fields.Address[this] = value; }

    [Origin(jCounterparties, nameof(CounterpartiesRow.City))]
    public String City { get => Fields.City[this]; set => Fields.City[this] = value; }

    [Origin(jCounterparties, nameof(CounterpartiesRow.Region))]
    public String Region { get => Fields.Region[this]; set => Fields.Region[this] = value; }

    [Origin(jCounterparties, nameof(CounterpartiesRow.PostalCode))]
    public String PostalCode { get => Fields.PostalCode[this]; set => Fields.PostalCode[this] = value; }

    [Origin(jCounterparties, nameof(CounterpartiesRow.Country))]
    public String Country { get => Fields.Country[this]; set => Fields.Country[this] = value; }

    [Origin(jCounterparties, nameof(CounterpartiesRow.Phone))]
    public String Phone { get => Fields.Phone[this]; set => Fields.Phone[this] = value; }

    #endregion Counterparty

    #region Employee

    [DisplayName("EmployeeId"), Column("EmployeeId"), ForeignKey(typeof(EmployeesRow), nameof(EmployeesRow.EmployeeId)), LeftJoin(jEmployees)] //, TextualField(nameof(FullName))]
    [LookupEditor(typeof(EmployeesRow))]
    public int? EmployeeId { get => fields.EmployeeId[this]; set => fields.EmployeeId[this] = value; }

    [DisplayName("Employee"), Origin(jEmployees, nameof(EmployeesRow.LastName))]
    public string FullName { get => Fields.FullName[this]; set => Fields.FullName[this] = value; }

    [Origin(jEmployees, nameof(EmployeesRow.Gender))]
    public Gender? Gender { get => (Gender?)Fields.Gender[this]; set => Fields.Gender[this] = (Int32?)value; }

    [Origin(jEmployees, nameof(EmployeesRow.ReportsToFullName))]
    public String ReportsToFullName { get => Fields.ReportsToFullName[this]; set => Fields.ReportsToFullName[this] = value; }

    #endregion Employee

    #region Shops

    [DisplayName("Shop"), Size(14), NotNull, ForeignKey(typeof(ShopsRow), nameof(ShopsRow.ShopId)), LeftJoin(jShops)]
    [QuickSearch, LookupEditor(typeof(ShopsRow))] //ShopsEditor] // LookupEditor(typeof(ShopsRow))]
    public String ShopId { get => Fields.ShopId[this]; set => Fields.ShopId[this] = value; }

    [Origin(jShops, nameof(ShopsRow.ShopName))]
    public String ShopName { get => Fields.ShopName[this]; set => Fields.ShopName[this] = value; }

    [Origin(jShops, nameof(ShopsRow.ContactName))]
    public String ShopContactName { get => Fields.ShopContactName[this]; set => Fields.ShopContactName[this] = value; }

    [Origin(jShops, nameof(ShopsRow.ContactTitle))]
    public String ShopContactTitle { get => Fields.ShopContactTitle[this]; set => Fields.ShopContactTitle[this] = value; }

    [Origin(jShops, nameof(ShopsRow.Address))]
    public String ShopAddress { get => Fields.ShopAddress[this]; set => Fields.ShopAddress[this] = value; }

    [Origin(jShops, nameof(ShopsRow.City))]
    public String ShopCity { get => Fields.ShopCity[this]; set => Fields.ShopCity[this] = value; }

    [Origin(jShops, nameof(ShopsRow.Region))]
    public String ShopRegion { get => Fields.ShopRegion[this]; set => Fields.ShopRegion[this] = value; }

    [Origin(jShops, nameof(ShopsRow.PostalCode))]
    public String ShopPostalCode { get => Fields.ShopPostalCode[this]; set => Fields.ShopPostalCode[this] = value; }

    [Origin(jShops, nameof(ShopsRow.Country))]
    public String ShopCountry { get => Fields.ShopCountry[this]; set => Fields.ShopCountry[this] = value; }

    [Origin(jShops, nameof(ShopsRow.Phone))]
    public String ShopPhone { get => Fields.ShopPhone[this]; set => Fields.ShopPhone[this] = value; }

    #endregion Shops

    #region Shipper

    [DisplayName("Ship Via"), ForeignKey(typeof(ShippersRow)), LeftJoin(jShippers), LookupEditor(typeof(ShippersRow))]
    public Int32? ShipperId { get => Fields.ShipperId[this]; set => Fields.ShipperId[this] = value; }

    [Origin(jShippers, nameof(ShippersRow.CompanyName))]
    public String ShipperCompanyName { get => Fields.ShipperCompanyName[this]; set => Fields.ShipperCompanyName[this] = value; }

    [Origin(jShippers, nameof(ShippersRow.Phone))]
    public String ShipperPhone { get => Fields.ShipperPhone[this]; set => Fields.ShipperPhone[this] = value; }

    #endregion Shipper

    #region Operation

    [DisplayName("Operation Type"), NotNull, ForeignKey(typeof(OperationTypeRow)), LeftJoin(jOperations)]
    //[QuickSearch, OperationTypeEditor]
    [LookupEditor(typeof(OperationTypeRow), FilterField = "OpCode", FilterValue = 102)]
    public Int32? OperationTypeId { get => Fields.OperationTypeId[this]; set => Fields.OperationTypeId[this] = value; }

    [Origin(jOperations, nameof(OperationTypeRow.OpCode))]
    public short? OpCode { get => Fields.OpCode[this]; set => Fields.OpCode[this] = value; }

    [DisplayName("Operation"), Origin(jOperations, nameof(OperationTypeRow.Operation))]
    public String Operation { get => Fields.Operation[this]; set => Fields.Operation[this] = value; }

    #endregion Operation

    #region Documents

    [DisplayName("Document"), Column("Document"), ForeignKey(typeof(OrderDocRow), nameof(OrderDocRow.DocumentTypeId)), LeftJoin(jDocuments), TextualField(nameof(DocumentType))]
    [Origin(jDocuments, nameof(OrderDocRow.DocumentTypeId)), LookupEditor(typeof(DocumentTypeRow))]
    public Int32? DocumentTypeId { get => Fields.DocumentTypeId[this]; set => Fields.DocumentTypeId[this] = value; }

    [Origin(jDocuments, nameof(OrderDocRow.DocumentNumber)), DisplayName("Document Number"), Size(10), QuickSearch]
    public String DocumentNumber { get => Fields.DocumentNumber[this]; set => Fields.DocumentNumber[this] = value; }

    [Origin(jDocuments, nameof(OrderDocRow.DocumentDate)), DisplayName("Document Date")]
    public DateTime? DocumentDate { get => Fields.DocumentDate[this]; set => Fields.DocumentDate[this] = value; }

    #endregion Documents

    #region Total

    [ForeignKey(typeof(OrderTotalRow), nameof(OrderTotalRow.OrderId)), LeftJoin(jTotal)]
    [Origin(jTotal)]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? Value { get => Fields.Value[this]; set => Fields.Value[this] = value; }

    [Origin(jTotal)]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? VAT { get => Fields.VAT[this]; set => Fields.VAT[this] = value; }

    [Origin(jTotal)]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? Total { get => Fields.Total[this]; set => Fields.Total[this] = value; }

    #endregion Total

    [DisplayName("Order Date")]
    public DateTime? OrderDate { get => fields.OrderDate[this]; set => fields.OrderDate[this] = value; }

    [DisplayName("Required Date")]
    public DateTime? RequiredDate { get => fields.RequiredDate[this]; set => fields.RequiredDate[this] = value; }

    [DisplayName("Shipped Date")]
    public DateTime? ShippedDate { get => fields.ShippedDate[this]; set => fields.ShippedDate[this] = value; }

    [DisplayName("Shipping State"), Expression("(CASE WHEN T0.[ShippedDate] IS NULL THEN 0 ELSE 1 END)")]
    public ShippingState? ShippingState { get => (ShippingState?)Fields.ShippingState[this]; set => Fields.ShippingState[this] = (Int32?)value; }

    #region Details

    [DisplayName("Details"), MasterDetailRelation(foreignKey: "OrderId"), NotMapped]
    public List<OrderDetailRow> DetailList { get => Fields.DetailList[this]; set => Fields.DetailList[this] = value; }

    #endregion Details

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
        public Int32Field OrderId;
        public StringField ShopId;
        public StringField CounterpartyId;
        public Int32Field EmployeeId;
        public Int32Field ShipperId;
        public Int32Field OperationTypeId;
        public DateTimeField OrderDate;
        public DateTimeField RequiredDate;
        public DateTimeField ShippedDate;

        public Int32Field DocumentTypeId;
        public StringField DocumentNumber;
        public DateTimeField DocumentDate;

        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField ShopName;
        public StringField ShopContactName;
        public StringField ShopContactTitle;
        public StringField ShopAddress;
        public StringField ShopCity;
        public StringField ShopRegion;
        public StringField ShopPostalCode;
        public StringField ShopCountry;
        public StringField ShopPhone;

        public StringField CompanyName;
        public StringField ContactName;
        public StringField ContactTitle;
        public StringField Address;
        public StringField City;
        public StringField Region;
        public StringField PostalCode;
        public StringField Country;
        public StringField Phone;

        public StringField FullName;
        public Int32Field Gender;
        public StringField ReportsToFullName;

        public StringField ShipperCompanyName;
        public StringField ShipperPhone;
        public Int32Field ShippingState;

        public Int16Field OpCode;
        public StringField Operation;

        public DecimalField Value;
        public DecimalField VAT;
        public DecimalField Total;

        public RowListField<OrderDetailRow> DetailList;
    }
}