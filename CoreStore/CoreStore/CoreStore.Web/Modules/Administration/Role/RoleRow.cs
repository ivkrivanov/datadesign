
namespace CoreStore.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Administration"), TableName("Roles")]
    [DisplayName("Roles"), InstanceName("Role")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    [LookupScript]
    public sealed class RoleRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Role Id"), Identity, ForeignKey("Roles", "RoleId"), LeftJoin("jRole")]
        public Int32? RoleId
        {
            get => Fields.RoleId[this]; 
            set =>Fields.RoleId[this] = value; 
        }

        [DisplayName("Role Name"), Size(100), NotNull, QuickSearch]
        public String RoleName
        {
            get => Fields.RoleName[this]; 
            set =>Fields.RoleName[this] = value; 
        }

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => Fields.TenantId[this]; 
            set =>Fields.TenantId[this] = value; 
        }

        IIdField IIdRow.IdField
        {
            get => Fields.RoleId; 
        }

        StringField INameRow.NameField
        {
            get => Fields.RoleName; 
        }

        public Int32Field TenantIdField
        {
            get => Fields.TenantId; 
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RoleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RoleId;
            public StringField RoleName;
            public Int32Field TenantId;
        }
    }
}