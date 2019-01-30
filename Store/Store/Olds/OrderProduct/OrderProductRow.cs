
namespace Store.Store.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[OrderProducts]")]
    [DisplayName("Order Product"), InstanceName("Order Product")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class OrderProductRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Product Id"), Column("OrderProductID"), Identity]
        public Int32? OrderProductId
        {
            get { return Fields.OrderProductId[this]; }
            set { Fields.OrderProductId[this] = value; }
        }

        [DisplayName("Operation Type"), Column("OperationTypeID"), NotNull, ForeignKey("[dbo].[OperationType]", "OperationTypeID"), LeftJoin("jOperationType"), TextualField("OperationTypeOperation")]
        public Int32? OperationTypeId
        {
            get { return Fields.OperationTypeId[this]; }
            set { Fields.OperationTypeId[this] = value; }
        }

        [DisplayName("Counterparty"), Column("CounterpartyID"), Size(14), ForeignKey("[dbo].[Counterparties]", "CounterpartyID"), LeftJoin("jCounterparty"), QuickSearch, TextualField("CounterpartyCompanyName")]
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

        [DisplayName("Ship Via"), ForeignKey("[dbo].[Shippers]", "ShipperID"), LeftJoin("jShipVia"), TextualField("ShipViaCompanyName")]
        public Int32? ShipVia
        {
            get { return Fields.ShipVia[this]; }
            set { Fields.ShipVia[this] = value; }
        }

        [DisplayName("Freight"), Size(19), Scale(4)]
        public Decimal? Freight
        {
            get { return Fields.Freight[this]; }
            set { Fields.Freight[this] = value; }
        }

        [DisplayName("Ship Name"), Size(40)]
        public String ShipName
        {
            get { return Fields.ShipName[this]; }
            set { Fields.ShipName[this] = value; }
        }

        [DisplayName("Ship Address"), Size(60)]
        public String ShipAddress
        {
            get { return Fields.ShipAddress[this]; }
            set { Fields.ShipAddress[this] = value; }
        }

        [DisplayName("Ship City"), Size(15)]
        public String ShipCity
        {
            get { return Fields.ShipCity[this]; }
            set { Fields.ShipCity[this] = value; }
        }

        [DisplayName("Ship Region"), Size(15)]
        public String ShipRegion
        {
            get { return Fields.ShipRegion[this]; }
            set { Fields.ShipRegion[this] = value; }
        }

        [DisplayName("Ship Postal Code"), Size(10)]
        public String ShipPostalCode
        {
            get { return Fields.ShipPostalCode[this]; }
            set { Fields.ShipPostalCode[this] = value; }
        }

        [DisplayName("Ship Country"), Size(15)]
        public String ShipCountry
        {
            get { return Fields.ShipCountry[this]; }
            set { Fields.ShipCountry[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
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

        [DisplayName("Operation Type Insert Date"), Expression("jOperationType.[InsertDate]")]
        public DateTime? OperationTypeInsertDate
        {
            get { return Fields.OperationTypeInsertDate[this]; }
            set { Fields.OperationTypeInsertDate[this] = value; }
        }

        [DisplayName("Operation Type Insert User Id"), Expression("jOperationType.[InsertUserId]")]
        public Int32? OperationTypeInsertUserId
        {
            get { return Fields.OperationTypeInsertUserId[this]; }
            set { Fields.OperationTypeInsertUserId[this] = value; }
        }

        [DisplayName("Operation Type Update Date"), Expression("jOperationType.[UpdateDate]")]
        public DateTime? OperationTypeUpdateDate
        {
            get { return Fields.OperationTypeUpdateDate[this]; }
            set { Fields.OperationTypeUpdateDate[this] = value; }
        }

        [DisplayName("Operation Type Update User Id"), Expression("jOperationType.[UpdateUserId]")]
        public Int32? OperationTypeUpdateUserId
        {
            get { return Fields.OperationTypeUpdateUserId[this]; }
            set { Fields.OperationTypeUpdateUserId[this] = value; }
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

        [DisplayName("Counterparty Insert Date"), Expression("jCounterparty.[InsertDate]")]
        public DateTime? CounterpartyInsertDate
        {
            get { return Fields.CounterpartyInsertDate[this]; }
            set { Fields.CounterpartyInsertDate[this] = value; }
        }

        [DisplayName("Counterparty Insert User Id"), Expression("jCounterparty.[InsertUserId]")]
        public Int32? CounterpartyInsertUserId
        {
            get { return Fields.CounterpartyInsertUserId[this]; }
            set { Fields.CounterpartyInsertUserId[this] = value; }
        }

        [DisplayName("Counterparty Update Date"), Expression("jCounterparty.[UpdateDate]")]
        public DateTime? CounterpartyUpdateDate
        {
            get { return Fields.CounterpartyUpdateDate[this]; }
            set { Fields.CounterpartyUpdateDate[this] = value; }
        }

        [DisplayName("Counterparty Update User Id"), Expression("jCounterparty.[UpdateUserId]")]
        public Int32? CounterpartyUpdateUserId
        {
            get { return Fields.CounterpartyUpdateUserId[this]; }
            set { Fields.CounterpartyUpdateUserId[this] = value; }
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

        [DisplayName("Employee Insert Date"), Expression("jEmployee.[InsertDate]")]
        public DateTime? EmployeeInsertDate
        {
            get { return Fields.EmployeeInsertDate[this]; }
            set { Fields.EmployeeInsertDate[this] = value; }
        }

        [DisplayName("Employee Insert User Id"), Expression("jEmployee.[InsertUserId]")]
        public Int32? EmployeeInsertUserId
        {
            get { return Fields.EmployeeInsertUserId[this]; }
            set { Fields.EmployeeInsertUserId[this] = value; }
        }

        [DisplayName("Employee Update Date"), Expression("jEmployee.[UpdateDate]")]
        public DateTime? EmployeeUpdateDate
        {
            get { return Fields.EmployeeUpdateDate[this]; }
            set { Fields.EmployeeUpdateDate[this] = value; }
        }

        [DisplayName("Employee Update User Id"), Expression("jEmployee.[UpdateUserId]")]
        public Int32? EmployeeUpdateUserId
        {
            get { return Fields.EmployeeUpdateUserId[this]; }
            set { Fields.EmployeeUpdateUserId[this] = value; }
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

        [DisplayName("Ship Via Company Name"), Expression("jShipVia.[CompanyName]")]
        public String ShipViaCompanyName
        {
            get { return Fields.ShipViaCompanyName[this]; }
            set { Fields.ShipViaCompanyName[this] = value; }
        }

        [DisplayName("Ship Via Phone"), Expression("jShipVia.[Phone]")]
        public String ShipViaPhone
        {
            get { return Fields.ShipViaPhone[this]; }
            set { Fields.ShipViaPhone[this] = value; }
        }

        [DisplayName("Ship Via Insert Date"), Expression("jShipVia.[InsertDate]")]
        public DateTime? ShipViaInsertDate
        {
            get { return Fields.ShipViaInsertDate[this]; }
            set { Fields.ShipViaInsertDate[this] = value; }
        }

        [DisplayName("Ship Via Insert User Id"), Expression("jShipVia.[InsertUserId]")]
        public Int32? ShipViaInsertUserId
        {
            get { return Fields.ShipViaInsertUserId[this]; }
            set { Fields.ShipViaInsertUserId[this] = value; }
        }

        [DisplayName("Ship Via Update Date"), Expression("jShipVia.[UpdateDate]")]
        public DateTime? ShipViaUpdateDate
        {
            get { return Fields.ShipViaUpdateDate[this]; }
            set { Fields.ShipViaUpdateDate[this] = value; }
        }

        [DisplayName("Ship Via Update User Id"), Expression("jShipVia.[UpdateUserId]")]
        public Int32? ShipViaUpdateUserId
        {
            get { return Fields.ShipViaUpdateUserId[this]; }
            set { Fields.ShipViaUpdateUserId[this] = value; }
        }

        [DisplayName("Ship Via Is Active"), Expression("jShipVia.[IsActive]")]
        public Int32? ShipViaIsActive
        {
            get { return Fields.ShipViaIsActive[this]; }
            set { Fields.ShipViaIsActive[this] = value; }
        }

        [DisplayName("Ship Via Tenant Id"), Expression("jShipVia.[TenantId]")]
        public Int32? ShipViaTenantId
        {
            get { return Fields.ShipViaTenantId[this]; }
            set { Fields.ShipViaTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CounterpartyId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderProductRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderProductId;
            public Int32Field OperationTypeId;
            public StringField CounterpartyId;
            public Int32Field EmployeeId;
            public DateTimeField OrderDate;
            public DateTimeField RequiredDate;
            public DateTimeField ShippedDate;
            public Int32Field ShipVia;
            public DecimalField Freight;
            public StringField ShipName;
            public StringField ShipAddress;
            public StringField ShipCity;
            public StringField ShipRegion;
            public StringField ShipPostalCode;
            public StringField ShipCountry;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field IsActive;
            public Int32Field TenantId;

            public Int16Field OperationTypeOpCode;
            public StringField OperationTypeOperation;
            public DateTimeField OperationTypeInsertDate;
            public Int32Field OperationTypeInsertUserId;
            public DateTimeField OperationTypeUpdateDate;
            public Int32Field OperationTypeUpdateUserId;
            public Int32Field OperationTypeIsActive;
            public Int32Field OperationTypeTenantId;

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
            public DateTimeField CounterpartyInsertDate;
            public Int32Field CounterpartyInsertUserId;
            public DateTimeField CounterpartyUpdateDate;
            public Int32Field CounterpartyUpdateUserId;
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
            public DateTimeField EmployeeInsertDate;
            public Int32Field EmployeeInsertUserId;
            public DateTimeField EmployeeUpdateDate;
            public Int32Field EmployeeUpdateUserId;
            public Int32Field EmployeeIsActive;
            public Int32Field EmployeeTenantId;

            public StringField ShipViaCompanyName;
            public StringField ShipViaPhone;
            public DateTimeField ShipViaInsertDate;
            public Int32Field ShipViaInsertUserId;
            public DateTimeField ShipViaUpdateDate;
            public Int32Field ShipViaUpdateUserId;
            public Int32Field ShipViaIsActive;
            public Int32Field ShipViaTenantId;
        }
    }
}
