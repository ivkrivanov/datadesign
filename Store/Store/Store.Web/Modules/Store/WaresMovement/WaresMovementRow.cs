
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresMovement]")]
    [DisplayName("Wares Movement"), InstanceName("Wares Movement")]
    [ReadPermission(StorePermissionKeys.Wares.View)]
    [ModifyPermission(StorePermissionKeys.Wares.Modify)]
    [DeletePermission(StorePermissionKeys.Wares.Delete)]
    [LeftJoin("wmd", "[dbo].[WaresMovement Doc]", "wmd.[WaresMoveID] = t0.[WaresMoveID]", RowType =typeof(WaresMovementDocRow), TitlePrefix = "")]
    [UpdatableExtension("wmd", typeof(WaresMovementDocRow), CascadeDelete = true)]
    [LookupScript(typeof(Lookups.WaresMovementLookup))]
    public sealed class WaresMovementRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Move Id"), NotNull, Identity, QuickSearch]
        public Int32? WaresMoveID
        {
            get { return Fields.WaresMoveID[this]; }
            set { Fields.WaresMoveID[this] = value; }
        }

        #region Counterparty

        [DisplayName("Counterparty"), NotNull, ForeignKey(typeof(CounterpartyRow), "CounterpartyID"), LeftJoin("c")]
        [QuickSearch, CounterpartyEditor, LookupInclude]
        public String CounterpartyID
        {
            get { return Fields.CounterpartyID[this]; }
            set { Fields.CounterpartyID[this] = value; }
        }

        [Origin("c"), DisplayName("Counterparty"), QuickSearch]
        [LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String CounterpartyCompanyName
        {
            get { return Fields.CounterpartyCompanyName[this]; }
            set { Fields.CounterpartyCompanyName[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyContactName
        {
            get { return Fields.CounterpartyContactName[this]; }
            set { Fields.CounterpartyContactName[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyContactTitle
        {
            get { return Fields.CounterpartyContactTitle[this]; }
            set { Fields.CounterpartyContactTitle[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyCity
        {
            get { return Fields.CounterpartyCity[this]; }
            set { Fields.CounterpartyCity[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyRegion
        {
            get { return Fields.CounterpartyRegion[this]; }
            set { Fields.CounterpartyRegion[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyCountry
        {
            get { return Fields.CounterpartyCountry[this]; }
            set { Fields.CounterpartyCountry[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyPhone
        {
            get { return Fields.CounterpartyPhone[this]; }
            set { Fields.CounterpartyPhone[this] = value; }
        }

        #endregion Counterparty

        #region Employee

        [DisplayName("Employee"), ForeignKey(typeof(EmployeeRow)), LeftJoin("e")]
        [LookupEditor(typeof(EmployeeRow)), TextualField("EmployeeFullName")]
        public Int32? EmployeeID
        {
            get { return Fields.EmployeeID[this]; }
            set { Fields.EmployeeID[this] = value; }
        }

        [Origin("e"), DisplayName("Employee")]
        public String EmployeeFullName
        {
            get { return Fields.EmployeeFullName[this]; }
            set { Fields.EmployeeFullName[this] = value; }
        }

        [Origin("e")]
        public Gender? EmployeeGender
        {
            get { return (Gender?)Fields.EmployeeGender[this]; }
            set { Fields.EmployeeGender[this] = (Int32?)value; }
        }

        [Origin("e")]
        public String EmployeeReportsToFullName
        {
            get { return Fields.EmployeeReportsToFullName[this]; }
            set { Fields.EmployeeReportsToFullName[this] = value; }
        }

        #endregion Employee

        #region Shops

        [DisplayName("Shop"), Size(14), NotNull, ForeignKey(typeof(ShopsRow), "ShopID"), LeftJoin("shop")]
        [QuickSearch, ShopsEditor] // LookupEditor(typeof(ShopsRow))]
        public String ShopID
        {
            get { return Fields.ShopID[this]; }
            set { Fields.ShopID[this] = value; }
        }

        [Origin("shop")]
        public String ShopShopName
        {
            get { return Fields.ShopShopName[this]; }
            set { Fields.ShopShopName[this] = value; }
        }

        [Origin("shop")]
        public String ShopContactName
        {
            get { return Fields.ShopContactName[this]; }
            set { Fields.ShopContactName[this] = value; }
        }

        [Origin("shop")]
        public String ShopContactTitle
        {
            get { return Fields.ShopContactTitle[this]; }
            set { Fields.ShopContactTitle[this] = value; }
        }

        [Origin("shop")]
        public String ShopAddress
        {
            get { return Fields.ShopAddress[this]; }
            set { Fields.ShopAddress[this] = value; }
        }

        [Origin("shop")]
        public String ShopCity
        {
            get { return Fields.ShopCity[this]; }
            set { Fields.ShopCity[this] = value; }
        }

        [Origin("shop")]
        public String ShopRegion
        {
            get { return Fields.ShopRegion[this]; }
            set { Fields.ShopRegion[this] = value; }
        }

        [Origin("shop")]
        public String ShopPostalCode
        {
            get { return Fields.ShopPostalCode[this]; }
            set { Fields.ShopPostalCode[this] = value; }
        }

        [Origin("shop")]
        public String ShopCountry
        {
            get { return Fields.ShopCountry[this]; }
            set { Fields.ShopCountry[this] = value; }
        }

        [Origin("shop")]
        public String ShopPhone
        {
            get { return Fields.ShopPhone[this]; }
            set { Fields.ShopPhone[this] = value; }
        }

        #endregion Shops

        #region Shipper

        [DisplayName("Ship Via"), ForeignKey(typeof(ShipperRow)), LeftJoin("via"), LookupEditor(typeof(ShipperRow))]
        public Int32? ShipperID
        {
            get { return Fields.ShipperID[this]; }
            set { Fields.ShipperID[this] = value; }
        }

        [Origin("via")]
        public String ShipperCompanyName
        {
            get { return Fields.ShipperCompanyName[this]; }
            set { Fields.ShipperCompanyName[this] = value; }
        }

        [Origin("via")]
        public String ShipperPhone
        {
            get { return Fields.ShipperPhone[this]; }
            set { Fields.ShipperPhone[this] = value; }
        }

        #endregion Shipper

        #region Operation

        [DisplayName("Operation Type"), NotNull, ForeignKey(typeof(OperationTypeRow)), LeftJoin("o")]
        [QuickSearch, OperationTypeEditor]
        [LookupEditor(typeof(OperationTypeRow), FilterField = "OperationTypeOpCode", FilterValue = 102)]
        public Int32? OperationTypeID
        {
            get { return Fields.OperationTypeID[this]; }
            set { Fields.OperationTypeID[this] = value; }
        }

        [Origin("o")]
        public WaresMovementOperations? OperationTypeOpCode
        {
            get { return (WaresMovementOperations)Fields.OperationTypeOpCode[this]; }
            set { Fields.OperationTypeOpCode[this] = (Int16?)value; }
        }

        [Origin("o")]
        public String OperationTypeOperation
        {
            get { return Fields.OperationTypeOperation[this]; }
            set { Fields.OperationTypeOperation[this] = value; }
        }

        #endregion Operation

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Required Date")]
        public DateTime? RequiredDate
        {
            get { return Fields.RequiredDate[this]; }
            set { Fields.RequiredDate[this] = value; }
        }

        [DisplayName("Shipped Date")]
        public DateTime? ShippedDate
        {
            get { return Fields.ShippedDate[this]; }
            set { Fields.ShippedDate[this] = value; }
        }

        [DisplayName("Shipping State"), Expression("(CASE WHEN T0.[ShippedDate] IS NULL THEN 0 ELSE 1 END)")]
        public ShippingState? ShippingState
        {
            get { return (ShippingState?)Fields.ShippingState[this]; }
            set { Fields.ShippingState[this] = (Int32?)value; }
        }

        [Origin("wmd"), LookupEditor(typeof(DocumentTypeRow))]
        public Int32? DocumentTypeID
        {
            get { return Fields.DocumentTypeID[this]; }
            set { Fields.DocumentTypeID[this] = value; }
        }

        //[DisplayName("Document Number"), Size(10), QuickSearch]
        [Origin("wmd")]
        public String DocumentNumber
        {
            get { return Fields.DocumentNumber[this]; }
            set { Fields.DocumentNumber[this] = value; }
        }

        //[DisplayName("Document Date")]
        [Origin("wmd")]
        public DateTime? DocumentDate
        {
            get { return Fields.DocumentDate[this]; }
            set { Fields.DocumentDate[this] = value; }
        }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "WaresMoveID"), NotMapped]
        public List<WaresMovementDetailsRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Tenant & Activ

        IIdField IIdRow.IdField
        {
            get { return Fields.WaresMoveID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CounterpartyID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresMovementRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field WaresMoveID;
            public StringField ShopID;
            public StringField CounterpartyID;
            public Int32Field EmployeeID;
            public Int32Field ShipperID;
            public Int32Field OperationTypeID;
            public DateTimeField OrderDate;
            public DateTimeField RequiredDate;
            public DateTimeField ShippedDate;

            public Int32Field DocumentTypeID;
            public StringField DocumentNumber;
            public DateTimeField DocumentDate;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField ShopShopName;
            public StringField ShopContactName;
            public StringField ShopContactTitle;
            public StringField ShopAddress;
            public StringField ShopCity;
            public StringField ShopRegion;
            public StringField ShopPostalCode;
            public StringField ShopCountry;
            public StringField ShopPhone;

            public StringField CounterpartyCompanyName;
            public StringField CounterpartyContactName;
            public StringField CounterpartyContactTitle;
            public StringField CounterpartyCity;
            public StringField CounterpartyRegion;
            public StringField CounterpartyCountry;
            public StringField CounterpartyPhone;

            public StringField EmployeeFullName;
            public Int32Field EmployeeGender;
            public StringField EmployeeReportsToFullName;

            public StringField ShipperCompanyName;
            public StringField ShipperPhone;
            public Int32Field ShippingState;

            public Int16Field OperationTypeOpCode;
            public StringField OperationTypeOperation;

            public RowListField<WaresMovementDetailsRow> DetailList;
        }
    }
}
