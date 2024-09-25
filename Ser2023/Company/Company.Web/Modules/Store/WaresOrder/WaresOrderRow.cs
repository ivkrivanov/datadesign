using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[WaresOrder]")]
[DisplayName("Wares Order"), InstanceName("Wares Order")]
[ReadPermission(PermissionKeys.Wares.View)]
[ModifyPermission(PermissionKeys.Wares.Modify)]
[DeletePermission(PermissionKeys.Wares.Delete)]
[UpdatableExtension(jDocuments, typeof(WaresOrderDocRow), CascadeDelete = true)]
[LookupScript(typeof(Lookups.WaresOrderLookup))]
[DataAuditLog]
public sealed class WaresOrderRow : LoggingRow<WaresOrderRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jCounterparties = nameof(jCounterparties);
    const string jEmployees = nameof(jEmployees);
    const string jShops = nameof(jShops);
    const string jShippers = nameof(jShippers);
    const string jOperations = nameof(jOperations);
    const string jDocuments = nameof(jDocuments);
    const string jTotal = nameof(jTotal);

    [DisplayName("Order Id"), Column("WaresOrderID"), NotNull, Identity, QuickSearch, IdProperty]
    public Int32? WaresOrderId { get => fields.WaresOrderId[this];  set => fields.WaresOrderId[this] = value; }

    #region Counterparty

    [DisplayName("Counterparty"), NotNull, ForeignKey(typeof(CounterpartiesRow)), LeftJoin(jCounterparties)]
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

    [DisplayName("EmployeeId"), ForeignKey(typeof(EmployeesRow), "EmployeeId"), LeftJoin(jEmployees)]
    [LookupEditor(typeof(EmployeesRow)), TextualField("EmployeesFullName")]
    public Int32? EmployeeId { get => Fields.EmployeeId[this]; set => Fields.EmployeeId[this] = value; }

    [DisplayName("EmployeeId"), Origin(jEmployees, nameof(EmployeesRow.LastName))]
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
    [LookupEditor(typeof(OperationTypeRow), FilterField = "OperationTypeOpCode", FilterValue = 102)]
    public Int32? OperationTypeId { get => Fields.OperationTypeId[this]; set => Fields.OperationTypeId[this] = value; }

    [Origin(jOperations, nameof(OperationTypeRow.OpCode))]
    public short? OpCode { get => Fields.OpCode[this]; set => Fields.OpCode[this] = value; }

    [Origin(jOperations, nameof(OperationTypeRow.Operation))]
    public String Operation { get => Fields.Operation[this]; set => Fields.Operation[this] = value; }

    #endregion Operation

    #region Documents

    [ForeignKey(typeof(WaresOrderDocRow), nameof(WaresOrderDocRow.WaresOrderId)), LeftJoin(jDocuments)]

    [Origin(jDocuments, nameof(WaresOrderDocRow.DocumentTypeId)), LookupEditor(typeof(DocumentTypeRow))]
    public Int32? DocumentTypeId { get => Fields.DocumentTypeId[this]; set => Fields.DocumentTypeId[this] = value; }

    [Origin(jDocuments, nameof(WaresOrderDocRow.DocumentNumber)), DisplayName("Document Number"), Size(10), QuickSearch]
    public String DocumentNumber { get => Fields.DocumentNumber[this]; set => Fields.DocumentNumber[this] = value; }

    [Origin(jDocuments, nameof(WaresOrderDocRow.DocumentDate)), DisplayName("Document Date")]
    public DateTime? DocumentDate { get => Fields.DocumentDate[this]; set => Fields.DocumentDate[this] = value; }

    #endregion Documents

    #region Total

    [ForeignKey(typeof(WaresOrderTotalRow), nameof(WaresOrderTotalRow.WaresOrderId)), LeftJoin(jTotal)]
    [Origin(jTotal, nameof(WaresOrderTotalRow.Total))]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? Total { get => Fields.Total[this]; set => Fields.Total[this] = value; }

    #endregion Total

    [DisplayName("Order Date")]
    public DateTime? OrderDate { get => Fields.OrderDate[this]; set => Fields.OrderDate[this] = value; }

    [DisplayName("Required Date")]
    public DateTime? RequiredDate { get => Fields.RequiredDate[this]; set => Fields.RequiredDate[this] = value; }

    [DisplayName("Shipped Date")]
    public DateTime? ShippedDate { get => Fields.ShippedDate[this]; set => Fields.ShippedDate[this] = value; }

    [DisplayName("Shipping State"), Expression("(CASE WHEN T0.[ShippedDate] IS NULL THEN 0 ELSE 1 END)")]
    public ShippingState? ShippingState { get => (ShippingState?)Fields.ShippingState[this]; set => Fields.ShippingState[this] = (Int32?)value; }


    [DisplayName("Details"), MasterDetailRelation(foreignKey: "WaresOrderID"), NotMapped]
    public List<WaresOrderDetailRow> DetailList {  get => Fields.DetailList[this];  set => Fields.DetailList[this] = value; }

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
        public Int32Field WaresOrderId;
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

        public DecimalField Total;

        public RowListField<WaresOrderDetailRow> DetailList;
    }
}
