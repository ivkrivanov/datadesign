﻿
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductMovement]")]
    [DisplayName("Product Movement"), InstanceName("Product Movement")]
    [ReadPermission(PermissionKeys.Product.View)]
    [ModifyPermission(PermissionKeys.Product.Modify)]
    [DeletePermission(PermissionKeys.Product.Delete)]
    [LeftJoin("pmd", "[dbo].[ProductMovement Doc]", "pmd.[ProductMoveID] = t0.[ProductMoveID]", RowType = typeof(ProductMovementDocRow), TitlePrefix = "")]
    [UpdatableExtension("pmd", typeof(ProductMovementDocRow), CascadeDelete = true)]
    [LeftJoin("pmt", "dbo.ProductMovementTotal", "pmt.[ProductMoveID] = t0.[ProductMoveID]", RowType = typeof(ProductMovementTotalRow), TitlePrefix = "")]
    [LookupScript(typeof(Lookups.ProductMovementLookup))]
    public sealed class ProductMovementRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Move Id"), NotNull, Identity, QuickSearch]
        public Int32? ProductMoveId
        {
            get =>Fields.ProductMoveId[this]; 
            set =>Fields.ProductMoveId[this] = value; 
        }

        #region Counterparty

        [DisplayName("Counterparty"), Size(14), NotNull, ForeignKey(typeof(CounterpartiesRow), "CounterpartyId"), LeftJoin("c")]
        [QuickSearch, CounterpartiesEditor]
        public String CounterpartyId
        {
            get =>Fields.CounterpartyId[this]; 
            set =>Fields.CounterpartyId[this] = value; 
        }
        

        [Origin("c"), DisplayName("Counterparty"), QuickSearch]
        public String CounterpartyCompanyName
        {
            get =>Fields.CounterpartyCompanyName[this]; 
            set =>Fields.CounterpartyCompanyName[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyContactName
        {
            get =>Fields.CounterpartyContactName[this]; 
            set =>Fields.CounterpartyContactName[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyContactTitle
        {
            get =>Fields.CounterpartyContactTitle[this]; 
            set =>Fields.CounterpartyContactTitle[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyCity
        {
            get =>Fields.CounterpartyCity[this]; 
            set =>Fields.CounterpartyCity[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyRegion
        {
            get =>Fields.CounterpartyRegion[this]; 
            set =>Fields.CounterpartyRegion[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyCountry
        {
            get =>Fields.CounterpartyCountry[this]; 
            set =>Fields.CounterpartyCountry[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyPhone
        {
            get =>Fields.CounterpartyPhone[this]; 
            set =>Fields.CounterpartyPhone[this] = value; 
        }

        #endregion Counterparty

        #region Employee

        [DisplayName("Employee"), ForeignKey(typeof(EmployeesRow)), LeftJoin("e")]
        [LookupEditor(typeof(EmployeesRow)), TextualField("EmployeeFullName")]
        public Int32? EmployeeId
        {
            get =>Fields.EmployeeId[this]; 
            set =>Fields.EmployeeId[this] = value; 
        }

        [Origin("e"), DisplayName("Employee")]
        public String EmployeeFullName
        {
            get =>Fields.EmployeeFullName[this]; 
            set =>Fields.EmployeeFullName[this] = value; 
        }

        [Origin("e")]
        public Gender? EmployeeGender
        {
            get =>(Gender?)Fields.EmployeeGender[this]; 
            set =>Fields.EmployeeGender[this] = (Int32?)value; 
        }

        [Origin("e")]
        public String EmployeeReportsToFullName
        {
            get =>Fields.EmployeeReportsToFullName[this]; 
            set =>Fields.EmployeeReportsToFullName[this] = value; 
        }

        #endregion Employee

        #region Shops

        [DisplayName("Shop"), Size(14), NotNull, ForeignKey(typeof(ShopsRow), "ShopId"), LeftJoin("shop")]
        [QuickSearch, ShopsEditor]
        public String ShopId
        {
            get =>Fields.ShopId[this]; 
            set =>Fields.ShopId[this] = value; 
        }

        [Origin("shop")]
        public String ShopShopName
        {
            get =>Fields.ShopShopName[this]; 
            set =>Fields.ShopShopName[this] = value; 
        }

        [Origin("shop")]
        public String ShopContactName
        {
            get =>Fields.ShopContactName[this]; 
            set =>Fields.ShopContactName[this] = value; 
        }

        [Origin("shop")]
        public String ShopContactTitle
        {
            get =>Fields.ShopContactTitle[this]; 
            set =>Fields.ShopContactTitle[this] = value; 
        }

        [Origin("shop")]
        public String ShopAddress
        {
            get =>Fields.ShopAddress[this]; 
            set =>Fields.ShopAddress[this] = value; 
        }

        [Origin("shop")]
        public String ShopCity
        {
            get =>Fields.ShopCity[this]; 
            set =>Fields.ShopCity[this] = value; 
        }

        [Origin("shop")]
        public String ShopRegion
        {
            get =>Fields.ShopRegion[this]; 
            set =>Fields.ShopRegion[this] = value; 
        }

        [Origin("shop")]
        public String ShopPostalCode
        {
            get =>Fields.ShopPostalCode[this]; 
            set =>Fields.ShopPostalCode[this] = value; 
        }

        [Origin("shop")]
        public String ShopCountry
        {
            get =>Fields.ShopCountry[this]; 
            set =>Fields.ShopCountry[this] = value; 
        }

        [Origin("shop")]
        public String ShopPhone
        {
            get =>Fields.ShopPhone[this]; 
            set =>Fields.ShopPhone[this] = value; 
        }

        #endregion Shops

        #region Shipper

        [DisplayName("Ship Via"), ForeignKey(typeof(ShippersRow)), LeftJoin("via"), LookupEditor(typeof(ShippersRow))]
        public Int32? ShipperId
        {
            get =>Fields.ShipperId[this]; 
            set =>Fields.ShipperId[this] = value; 
        }

        [Origin("via")]
        public String ShipperCompanyName
        {
            get =>Fields.ShipperCompanyName[this]; 
            set =>Fields.ShipperCompanyName[this] = value; 
        }

        [Origin("via")]
        public String ShipperPhone
        {
            get =>Fields.ShipperPhone[this]; 
            set =>Fields.ShipperPhone[this] = value; 
        }

        #endregion Shipper

        #region Operation

        [DisplayName("Operation Type"), NotNull, ForeignKey(typeof(OperationTypeRow)), LeftJoin("o")]
        [QuickSearch, OperationTypeEditor]
        [LookupEditor(typeof(OperationTypeRow), FilterField = "OperationTypeOpCode", FilterValue = 102)]
        public Int32? OperationTypeId
        {
            get =>Fields.OperationTypeId[this]; 
            set =>Fields.OperationTypeId[this] = value; 
        }

        [Origin("o")]
        public ProductMovementOperations? OperationTypeOpCode
        {
            get =>(ProductMovementOperations)Fields.OperationTypeOpCode[this]; 
            set =>Fields.OperationTypeOpCode[this] = (Int16?)value; 
        }

        [Origin("o")]
        public String OperationTypeOperation
        {
            get =>Fields.OperationTypeOperation[this]; 
            set =>Fields.OperationTypeOperation[this] = value; 
        }

        #endregion Operation

        #region Total

        [Origin("pmt")]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Value
        {
            get =>Fields.Value[this]; 
            set =>Fields.Value[this] = value; 
        }

        [Origin("pmt")]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? VAT
        {
            get =>Fields.VAT[this]; 
            set =>Fields.VAT[this] = value; 
        }

        [Origin("pmt")]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Total
        {
            get =>Fields.Total[this]; 
            set =>Fields.Total[this] = value; 
        }

        #endregion Total

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get =>Fields.OrderDate[this]; 
            set =>Fields.OrderDate[this] = value; 
        }

        [DisplayName("Required Date")]
        public DateTime? RequiredDate
        {
            get =>Fields.RequiredDate[this]; 
            set =>Fields.RequiredDate[this] = value; 
        }

        [DisplayName("Shipped Date")]
        public DateTime? ShippedDate
        {
            get =>Fields.ShippedDate[this]; 
            set =>Fields.ShippedDate[this] = value; 
        }

        [DisplayName("Shipping State"), Expression("(CASE WHEN T0.[ShippedDate] IS NULL THEN 0 ELSE 1 END)")]
        public ShippingState? ShippingState
        {
            get =>(ShippingState?)Fields.ShippingState[this]; 
            set =>Fields.ShippingState[this] = (Int32?)value; 
        }

        [Origin("pmd"), LookupEditor(typeof(DocumentTypeRow))]
        public Int32? DocumentTypeId
        {
            get =>Fields.DocumentTypeId[this]; 
            set =>Fields.DocumentTypeId[this] = value; 
        }

        //[DisplayName("Document Number"), Size(10), QuickSearch]
        [Origin("pmd")]
        public String DocumentNumber
        {
            get =>Fields.DocumentNumber[this]; 
            set =>Fields.DocumentNumber[this] = value; 
        }

        //[DisplayName("Document Date")]
        [Origin("pmd")]
        public DateTime? DocumentDate
        {
            get =>Fields.DocumentDate[this]; 
            set =>Fields.DocumentDate[this] = value; 
        }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "ProductMoveID"), NotMapped]
        public List<ProductMovementDetailsRow> DetailList
        {
            get =>Fields.DetailList[this]; 
            set =>Fields.DetailList[this] = value; 
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get =>Fields.TenantId[this]; 
            set =>Fields.TenantId[this] = value; 
        }

        public Int32Field TenantIdField
        {
            get =>Fields.TenantId; 
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get =>Fields.IsActive[this]; 
            set =>Fields.IsActive[this] = value; 
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get =>Fields.IsActive; 
        }

        #endregion Tenant & Activ

        IIdField IIdRow.IdField
        {
            get =>Fields.ProductMoveId; 
        }

        StringField INameRow.NameField
        {
            get =>Fields.ShopId; 
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductMovementRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field ProductMoveId;
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

            public DecimalField Value;
            public DecimalField VAT;
            public DecimalField Total;

            public RowListField<ProductMovementDetailsRow> DetailList;
        }
    }
}
