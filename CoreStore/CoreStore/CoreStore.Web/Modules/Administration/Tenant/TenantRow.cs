
namespace CoreStore.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Tenants]")]
    [DisplayName("Tenants"), InstanceName("Tenant"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Tenants)]
    [ModifyPermission(PermissionKeys.Tenants)]
    [LookupScript("Administration.Tenant")]
    public sealed class TenantRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tenant Id"), Identity]
        public Int32? TenantId
        {
            get => Fields.TenantId[this]; 
            set => Fields.TenantId[this] = value; 
        }

        [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch]
        public String TenantName
        {
            get => Fields.TenantName[this]; 
            set => Fields.TenantName[this] = value; 
        }

        IIdField IIdRow.IdField
        {
            get => Fields.TenantId; 
        }

        StringField INameRow.NameField
        {
            get => Fields.TenantName; 
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TenantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
