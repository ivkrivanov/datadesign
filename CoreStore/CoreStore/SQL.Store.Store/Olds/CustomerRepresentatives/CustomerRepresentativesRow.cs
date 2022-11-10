
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CustomerRepresentatives]")]
    [DisplayName("Customer Representatives"), InstanceName("Customer Representatives")]
    [ReadPermission(PermissionKeys.Customer.View)]
    [ModifyPermission(PermissionKeys.Customer.View)]
    public sealed class CustomerRepresentativesRow : Row, IIdRow
    {
        [DisplayName("Representative Id"), Column("RepresentativeID"), Identity]
        public Int32? RepresentativeID
        {
            get { return Fields.RepresentativeID[this]; }
            set { Fields.RepresentativeID[this] = value; }
        }

        [DisplayName("Customer Id"), Column("CustomerID"), NotNull]
        public Int32? CustomerID
        {
            get { return Fields.CustomerID[this]; }
            set { Fields.CustomerID[this] = value; }
        }

        [DisplayName("Employee Id"), Column("EmployeeID"), NotNull]
        public Int32? EmployeeID
        {
            get { return Fields.EmployeeID[this]; }
            set { Fields.EmployeeID[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RepresentativeID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerRepresentativesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RepresentativeID;
            public Int32Field CustomerID;
            public Int32Field EmployeeID;
        }
    }
}
