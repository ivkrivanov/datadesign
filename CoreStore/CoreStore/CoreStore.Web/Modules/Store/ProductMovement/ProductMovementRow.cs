
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductMovement]")]
    [DisplayName("Product Movement"), InstanceName("Product Movement")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class ProductMovementRow : LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Product Move Id"), Column("ProductMoveID"), Identity]
        public Int32? ProductMoveId
        {
            get { return Fields.ProductMoveId[this]; }
            set { Fields.ProductMoveId[this] = value; }
        }

        [DisplayName("Shop"), Column("ShopID"), Size(14), NotNull, ForeignKey("[dbo].[Shops]", "ShopID"), LeftJoin("jShop"), QuickSearch, TextualField("ShopShopName")]
        public String ShopId
        {
            get { return Fields.ShopId[this]; }
            set { Fields.ShopId[this] = value; }
        }

        [DisplayName("Counterparty"), Column("CounterpartyID"), Size(14), NotNull, ForeignKey("[dbo].[Counterparties]", "CounterpartyID"), LeftJoin("jCounterparty"), TextualField("CounterpartyCompanyName")]
        public String CounterpartyId
        {
            get { return Fields.CounterpartyId[this]; }
            set { Fields.CounterpartyId[this] = value; }
        }

        [DisplayName("Employee"), Column("EmployeeID"), ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin("jEmployee"), TextualField("EmployeeLastName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Shipper"), Column("ShipperID"), ForeignKey("[dbo].[Shippers]", "ShipperID"), LeftJoin("jShipper"), TextualField("ShipperCompanyName")]
        public Int32? ShipperId
        {
            get { return Fields.ShipperId[this]; }
            set { Fields.ShipperId[this] = value; }
        }

        [DisplayName("Operation Type"), Column("OperationTypeID"), NotNull, ForeignKey("[dbo].[OperationType]", "OperationTypeID"), LeftJoin("jOperationType"), TextualField("OperationTypeOperation")]
        public Int32? OperationTypeId
        {
            get { return Fields.OperationTypeId[this]; }
            set { Fields.OperationTypeId[this] = value; }
        }

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

        [DisplayName("Is Active"), NotNull]
        public Int32? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Shop Id"), Expression("jShop.[ID]")]
        public Int32? ShopId1
        {
            get { return Fields.ShopId1[this]; }
            set { Fields.ShopId1[this] = value; }
        }

        [DisplayName("Shop Shop Name"), Expression("jShop.[ShopName]")]
        public String ShopShopName
        {
            get { return Fields.ShopShopName[this]; }
            set { Fields.ShopShopName[this] = value; }
        }

        [DisplayName("Shop Contact Name"), Expression("jShop.[ContactName]")]
        public String ShopContactName
        {
            get { return Fields.ShopContactName[this]; }
            set { Fields.ShopContactName[this] = value; }
        }

        [DisplayName("Shop Contact Title"), Expression("jShop.[ContactTitle]")]
        public String ShopContactTitle
        {
            get { return Fields.ShopContactTitle[this]; }
            set { Fields.ShopContactTitle[this] = value; }
        }

        [DisplayName("Shop Address"), Expression("jShop.[Address]")]
        public String ShopAddress
        {
            get { return Fields.ShopAddress[this]; }
            set { Fields.ShopAddress[this] = value; }
        }

        [DisplayName("Shop City"), Expression("jShop.[City]")]
        public String ShopCity
        {
            get { return Fields.ShopCity[this]; }
            set { Fields.ShopCity[this] = value; }
        }

        [DisplayName("Shop Region"), Expression("jShop.[Region]")]
        public String ShopRegion
        {
            get { return Fields.ShopRegion[this]; }
            set { Fields.ShopRegion[this] = value; }
        }

        [DisplayName("Shop Postal Code"), Expression("jShop.[PostalCode]")]
        public String ShopPostalCode
        {
            get { return Fields.ShopPostalCode[this]; }
            set { Fields.ShopPostalCode[this] = value; }
        }

        [DisplayName("Shop Country"), Expression("jShop.[Country]")]
        public String ShopCountry
        {
            get { return Fields.ShopCountry[this]; }
            set { Fields.ShopCountry[this] = value; }
        }

        [DisplayName("Shop Phone"), Expression("jShop.[Phone]")]
        public String ShopPhone
        {
            get { return Fields.ShopPhone[this]; }
            set { Fields.ShopPhone[this] = value; }
        }

        [DisplayName("Shop Is Active"), Expression("jShop.[IsActive]")]
        public Int32? ShopIsActive
        {
            get { return Fields.ShopIsActive[this]; }
            set { Fields.ShopIsActive[this] = value; }
        }

        [DisplayName("Shop Tenant Id"), Expression("jShop.[TenantId]")]
        public Int32? ShopTenantId
        {
            get { return Fields.ShopTenantId[this]; }
            set { Fields.ShopTenantId[this] = value; }
        }

        [DisplayName("Counterparty Id"), Expression("jCounterparty.[ID]")]
        public Int32? CounterpartyId1
        {
            get { return Fields.CounterpartyId1[this]; }
            set { Fields.CounterpartyId1[this] = value; }
        }

        [DisplayName("Counterparty Company Name"), Expression("jCounterparty.[CompanyName]")]
        public String CounterpartyCompanyName
        {
            get { return Fields.CounterpartyCompanyName[this]; }
            set { Fields.CounterpartyCompanyName[this] = value; }
        }

        [DisplayName("Counterparty Contact Name"), Expression("jCounterparty.[ContactName]")]
        public String CounterpartyContactName
        {
            get { return Fields.CounterpartyContactName[this]; }
            set { Fields.CounterpartyContactName[this] = value; }
        }

        [DisplayName("Counterparty Contact Title"), Expression("jCounterparty.[ContactTitle]")]
        public String CounterpartyContactTitle
        {
            get { return Fields.CounterpartyContactTitle[this]; }
            set { Fields.CounterpartyContactTitle[this] = value; }
        }

        [DisplayName("Counterparty Address"), Expression("jCounterparty.[Address]")]
        public String CounterpartyAddress
        {
            get { return Fields.CounterpartyAddress[this]; }
            set { Fields.CounterpartyAddress[this] = value; }
        }

        [DisplayName("Counterparty City"), Expression("jCounterparty.[City]")]
        public String CounterpartyCity
        {
            get { return Fields.CounterpartyCity[this]; }
            set { Fields.CounterpartyCity[this] = value; }
        }

        [DisplayName("Counterparty Region"), Expression("jCounterparty.[Region]")]
        public String CounterpartyRegion
        {
            get { return Fields.CounterpartyRegion[this]; }
            set { Fields.CounterpartyRegion[this] = value; }
        }

        [DisplayName("Counterparty Postal Code"), Expression("jCounterparty.[PostalCode]")]
        public String CounterpartyPostalCode
        {
            get { return Fields.CounterpartyPostalCode[this]; }
            set { Fields.CounterpartyPostalCode[this] = value; }
        }

        [DisplayName("Counterparty Country"), Expression("jCounterparty.[Country]")]
        public String CounterpartyCountry
        {
            get { return Fields.CounterpartyCountry[this]; }
            set { Fields.CounterpartyCountry[this] = value; }
        }

        [DisplayName("Counterparty Phone"), Expression("jCounterparty.[Phone]")]
        public String CounterpartyPhone
        {
            get { return Fields.CounterpartyPhone[this]; }
            set { Fields.CounterpartyPhone[this] = value; }
        }

        [DisplayName("Counterparty Is Active"), Expression("jCounterparty.[IsActive]")]
        public Int32? CounterpartyIsActive
        {
            get { return Fields.CounterpartyIsActive[this]; }
            set { Fields.CounterpartyIsActive[this] = value; }
        }

        [DisplayName("Counterparty Tenant Id"), Expression("jCounterparty.[TenantId]")]
        public Int32? CounterpartyTenantId
        {
            get { return Fields.CounterpartyTenantId[this]; }
            set { Fields.CounterpartyTenantId[this] = value; }
        }

        [DisplayName("Employee Last Name"), Expression("jEmployee.[LastName]")]
        public String EmployeeLastName
        {
            get { return Fields.EmployeeLastName[this]; }
            set { Fields.EmployeeLastName[this] = value; }
        }

        [DisplayName("Employee First Name"), Expression("jEmployee.[FirstName]")]
        public String EmployeeFirstName
        {
            get { return Fields.EmployeeFirstName[this]; }
            set { Fields.EmployeeFirstName[this] = value; }
        }

        [DisplayName("Employee Title"), Expression("jEmployee.[Title]")]
        public String EmployeeTitle
        {
            get { return Fields.EmployeeTitle[this]; }
            set { Fields.EmployeeTitle[this] = value; }
        }

        [DisplayName("Employee Title Of Courtesy"), Expression("jEmployee.[TitleOfCourtesy]")]
        public String EmployeeTitleOfCourtesy
        {
            get { return Fields.EmployeeTitleOfCourtesy[this]; }
            set { Fields.EmployeeTitleOfCourtesy[this] = value; }
        }

        [DisplayName("Employee Birth Date"), Expression("jEmployee.[BirthDate]")]
        public DateTime? EmployeeBirthDate
        {
            get { return Fields.EmployeeBirthDate[this]; }
            set { Fields.EmployeeBirthDate[this] = value; }
        }

        [DisplayName("Employee Hire Date"), Expression("jEmployee.[HireDate]")]
        public DateTime? EmployeeHireDate
        {
            get { return Fields.EmployeeHireDate[this]; }
            set { Fields.EmployeeHireDate[this] = value; }
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public String EmployeeAddress
        {
            get { return Fields.EmployeeAddress[this]; }
            set { Fields.EmployeeAddress[this] = value; }
        }

        [DisplayName("Employee City"), Expression("jEmployee.[City]")]
        public String EmployeeCity
        {
            get { return Fields.EmployeeCity[this]; }
            set { Fields.EmployeeCity[this] = value; }
        }

        [DisplayName("Employee Region"), Expression("jEmployee.[Region]")]
        public String EmployeeRegion
        {
            get { return Fields.EmployeeRegion[this]; }
            set { Fields.EmployeeRegion[this] = value; }
        }

        [DisplayName("Employee Postal Code"), Expression("jEmployee.[PostalCode]")]
        public String EmployeePostalCode
        {
            get { return Fields.EmployeePostalCode[this]; }
            set { Fields.EmployeePostalCode[this] = value; }
        }

        [DisplayName("Employee Country"), Expression("jEmployee.[Country]")]
        public String EmployeeCountry
        {
            get { return Fields.EmployeeCountry[this]; }
            set { Fields.EmployeeCountry[this] = value; }
        }

        [DisplayName("Employee Home Phone"), Expression("jEmployee.[HomePhone]")]
        public String EmployeeHomePhone
        {
            get { return Fields.EmployeeHomePhone[this]; }
            set { Fields.EmployeeHomePhone[this] = value; }
        }

        [DisplayName("Employee Extension"), Expression("jEmployee.[Extension]")]
        public String EmployeeExtension
        {
            get { return Fields.EmployeeExtension[this]; }
            set { Fields.EmployeeExtension[this] = value; }
        }

        [DisplayName("Employee Photo"), Expression("jEmployee.[Photo]")]
        public Stream EmployeePhoto
        {
            get { return Fields.EmployeePhoto[this]; }
            set { Fields.EmployeePhoto[this] = value; }
        }

        [DisplayName("Employee Notes"), Expression("jEmployee.[Notes]")]
        public String EmployeeNotes
        {
            get { return Fields.EmployeeNotes[this]; }
            set { Fields.EmployeeNotes[this] = value; }
        }

        [DisplayName("Employee Reports To"), Expression("jEmployee.[ReportsTo]")]
        public Int32? EmployeeReportsTo
        {
            get { return Fields.EmployeeReportsTo[this]; }
            set { Fields.EmployeeReportsTo[this] = value; }
        }

        [DisplayName("Employee Photo Path"), Expression("jEmployee.[PhotoPath]")]
        public String EmployeePhotoPath
        {
            get { return Fields.EmployeePhotoPath[this]; }
            set { Fields.EmployeePhotoPath[this] = value; }
        }

        [DisplayName("Employee Is Active"), Expression("jEmployee.[IsActive]")]
        public Int32? EmployeeIsActive
        {
            get { return Fields.EmployeeIsActive[this]; }
            set { Fields.EmployeeIsActive[this] = value; }
        }

        [DisplayName("Employee Tenant Id"), Expression("jEmployee.[TenantId]")]
        public Int32? EmployeeTenantId
        {
            get { return Fields.EmployeeTenantId[this]; }
            set { Fields.EmployeeTenantId[this] = value; }
        }

        [DisplayName("Shipper Company Name"), Expression("jShipper.[CompanyName]")]
        public String ShipperCompanyName
        {
            get { return Fields.ShipperCompanyName[this]; }
            set { Fields.ShipperCompanyName[this] = value; }
        }

        [DisplayName("Shipper Phone"), Expression("jShipper.[Phone]")]
        public String ShipperPhone
        {
            get { return Fields.ShipperPhone[this]; }
            set { Fields.ShipperPhone[this] = value; }
        }

        [DisplayName("Shipper Is Active"), Expression("jShipper.[IsActive]")]
        public Int32? ShipperIsActive
        {
            get { return Fields.ShipperIsActive[this]; }
            set { Fields.ShipperIsActive[this] = value; }
        }

        [DisplayName("Shipper Tenant Id"), Expression("jShipper.[TenantId]")]
        public Int32? ShipperTenantId
        {
            get { return Fields.ShipperTenantId[this]; }
            set { Fields.ShipperTenantId[this] = value; }
        }

        [DisplayName("Operation Type Op Code"), Expression("jOperationType.[OpCode]")]
        public Int16? OperationTypeOpCode
        {
            get { return Fields.OperationTypeOpCode[this]; }
            set { Fields.OperationTypeOpCode[this] = value; }
        }

        [DisplayName("Operation Type Operation"), Expression("jOperationType.[Operation]")]
        public String OperationTypeOperation
        {
            get { return Fields.OperationTypeOperation[this]; }
            set { Fields.OperationTypeOperation[this] = value; }
        }

        [DisplayName("Operation Type Is Active"), Expression("jOperationType.[IsActive]")]
        public Int32? OperationTypeIsActive
        {
            get { return Fields.OperationTypeIsActive[this]; }
            set { Fields.OperationTypeIsActive[this] = value; }
        }

        [DisplayName("Operation Type Tenant Id"), Expression("jOperationType.[TenantId]")]
        public Int32? OperationTypeTenantId
        {
            get { return Fields.OperationTypeTenantId[this]; }
            set { Fields.OperationTypeTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductMoveId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShopId; }
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
            public Int32Field IsActive;
            public Int32Field TenantId;

            public Int32Field ShopId1;
            public StringField ShopShopName;
            public StringField ShopContactName;
            public StringField ShopContactTitle;
            public StringField ShopAddress;
            public StringField ShopCity;
            public StringField ShopRegion;
            public StringField ShopPostalCode;
            public StringField ShopCountry;
            public StringField ShopPhone;
            public Int32Field ShopIsActive;
            public Int32Field ShopTenantId;

            public Int32Field CounterpartyId1;
            public StringField CounterpartyCompanyName;
            public StringField CounterpartyContactName;
            public StringField CounterpartyContactTitle;
            public StringField CounterpartyAddress;
            public StringField CounterpartyCity;
            public StringField CounterpartyRegion;
            public StringField CounterpartyPostalCode;
            public StringField CounterpartyCountry;
            public StringField CounterpartyPhone;
            public Int32Field CounterpartyIsActive;
            public Int32Field CounterpartyTenantId;

            public StringField EmployeeLastName;
            public StringField EmployeeFirstName;
            public StringField EmployeeTitle;
            public StringField EmployeeTitleOfCourtesy;
            public DateTimeField EmployeeBirthDate;
            public DateTimeField EmployeeHireDate;
            public StringField EmployeeAddress;
            public StringField EmployeeCity;
            public StringField EmployeeRegion;
            public StringField EmployeePostalCode;
            public StringField EmployeeCountry;
            public StringField EmployeeHomePhone;
            public StringField EmployeeExtension;
            public StreamField EmployeePhoto;
            public StringField EmployeeNotes;
            public Int32Field EmployeeReportsTo;
            public StringField EmployeePhotoPath;
            public Int32Field EmployeeIsActive;
            public Int32Field EmployeeTenantId;

            public StringField ShipperCompanyName;
            public StringField ShipperPhone;
            public Int32Field ShipperIsActive;
            public Int32Field ShipperTenantId;

            public Int16Field OperationTypeOpCode;
            public StringField OperationTypeOperation;
            public Int32Field OperationTypeIsActive;
            public Int32Field OperationTypeTenantId;
        }
    }
}
