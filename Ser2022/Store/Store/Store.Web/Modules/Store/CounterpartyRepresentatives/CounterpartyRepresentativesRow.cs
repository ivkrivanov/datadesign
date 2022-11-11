
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CounterpartyRepresentatives]")]
    [DisplayName("Counterparty Representatives"), InstanceName("Counterparty Representatives")]
    [ReadPermission(PermissionKeys.Counterparties.View)]
    [ModifyPermission(PermissionKeys.Counterparties.Modify)]
    [DeletePermission(PermissionKeys.Counterparties.Delete)]
    public sealed class CounterpartyRepresentativesRow : Row<CounterpartyRepresentativesRow.RowFields>, IIdRow
    {
        [DisplayName("Representative Id"), Column("RepresentativeID"), Identity, IdProperty]
        public Int32? RepresentativeId
        {
            get => Fields.RepresentativeId[this]; 
            set =>Fields.RepresentativeId[this] = value; 
        }

        [DisplayName("Counterparty Id"), Column("CounterpartyID"), NotNull]
        public Int32? CounterpartyId
        {
            get => Fields.CounterpartyId[this]; 
            set =>Fields.CounterpartyId[this] = value; 
        }

        [DisplayName("Employee Id"), Column("EmployeeID"), NotNull]
        public Int32? EmployeeId
        {
            get => Fields.EmployeeId[this]; 
            set =>Fields.EmployeeId[this] = value; 
        }

        public CounterpartyRepresentativesRow()
        {
        }

        public CounterpartyRepresentativesRow(RowFields Fields)
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RepresentativeId;
            public Int32Field CounterpartyId;
            public Int32Field EmployeeId;
        }
    }
}
