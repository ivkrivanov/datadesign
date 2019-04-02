
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CounterpartyRepresentatives]")]
    [DisplayName("Counterparties Representative"), InstanceName("Counterparty Representative")]
    [ReadPermission(StorePermissionKeys.Counterparty.View)]
    [ModifyPermission(StorePermissionKeys.Counterparty.View)]
    public sealed class CounterpartyRepresentativeRow : Row, IIdRow
    {
        [DisplayName("Representative Id"), Column("RepresentativeID"), Identity]
        public Int32? RepresentativeID
        {
            get { return Fields.RepresentativeID[this]; }
            set { Fields.RepresentativeID[this] = value; }
        }

        [DisplayName("Counterparty Id"), Column("CounterpartyID"), NotNull]
        public Int32? CounterpartyID
        {
            get { return Fields.CounterpartyID[this]; }
            set { Fields.CounterpartyID[this] = value; }
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

        public CounterpartyRepresentativeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RepresentativeID;
            public Int32Field CounterpartyID;
            public Int32Field EmployeeID;
        }
    }
}
