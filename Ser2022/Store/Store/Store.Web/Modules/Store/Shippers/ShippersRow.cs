
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Serenity.Extensions.Entities;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Shippers]")]
    [DisplayName("Shippers"), InstanceName("Shippers")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    [LookupScript("Store.Shipper", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ShippersRow : LoggingRow<ShippersRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Shipper Id"), Column("ShipperID"), Identity, IdProperty]
        public Int32? ShipperId
        {
            get => Fields.ShipperId[this]; 
            set => Fields.ShipperId[this] = value; 
        }

        [DisplayName("Company Name"), Size(40), NotNull, QuickSearch, NameProperty]
        public String CompanyName
        {
            get => Fields.CompanyName[this]; 
            set => Fields.CompanyName[this] = value; 
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get => Fields.Phone[this]; 
            set => Fields.Phone[this] = value; 
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => Fields.TenantId[this]; 
            set => Fields.TenantId[this] = value; 
        }

        public Int32Field TenantIdField
        {
            get => Fields.TenantId; 
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => Fields.IsActive[this]; 
            set => Fields.IsActive[this] = value; 
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => Fields.IsActive; 
        }

        #endregion Tenant & Activ

        public ShippersRow()
        {
        }

        public ShippersRow(RowFields Fields)
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field ShipperId;
            public StringField CompanyName;
            public StringField Phone;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}
