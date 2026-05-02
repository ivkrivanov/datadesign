
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CounterpartyRepresentatives]")]
    [DisplayName("Counterparty Representatives"), InstanceName("Counterparty Representatives")]
    [ReadPermission(PermissionKeys.Counterparties.View)]
    [ModifyPermission(PermissionKeys.Counterparties.Modify)]
    [DeletePermission(PermissionKeys.Counterparties.Delete)]
    public sealed class CounterpartyRepresentativesRow : Row<CounterpartyRepresentativesRow.RowFields>, IIdRow
    {
        [DisplayName("Representative Id"), Column("RepresentativeID"), Identity, IdProperty]
        public int? RepresentativeId
        {
            get => fields.RepresentativeId[this];
            set => fields.RepresentativeId[this] = value;
        }

        [DisplayName("Counterparty Id"), Column("CounterpartyID"), NotNull]
        public int? CounterpartyId
        {
            get => fields.CounterpartyId[this];
            set => fields.CounterpartyId[this] = value;
        }

        [DisplayName("Employee Id"), Column("EmployeeID"), NotNull]
        public int? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        public CounterpartyRepresentativesRow()
            : base()
        {
        }

        public CounterpartyRepresentativesRow(RowFields fields)
            : base(fields)
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