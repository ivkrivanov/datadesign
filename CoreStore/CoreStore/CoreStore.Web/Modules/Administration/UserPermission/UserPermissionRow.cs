
namespace CoreStore.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Administration"), TableName("UserPermissions")]
    [DisplayName("UserPermissions"), InstanceName("UserPermissions")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    public sealed class UserPermissionRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Permission Id"), Identity]
        public Int64? UserPermissionId
        {
            get => Fields.UserPermissionId[this];
            set => Fields.UserPermissionId[this] = value; 
        }

        [DisplayName("User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("jUser")]
        public Int32? UserId
        {
            get => Fields.UserId[this]; 
            set => Fields.UserId[this] = value; 
        }

        [DisplayName("Permission Key"), Size(100), NotNull, QuickSearch]
        public String PermissionKey
        {
            get => Fields.PermissionKey[this]; 
            set => Fields.PermissionKey[this] = value; 
        }

        [DisplayName("Grant")]
        public Boolean? Granted
        {
            get => Fields.Granted[this]; 
            set => Fields.Granted[this] = value; 
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String Username
        {
            get => Fields.Username[this]; 
            set => Fields.Username[this] = value; 
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String User
        {
            get => Fields.User[this]; 
            set => Fields.User[this] = value; 
        }

        IIdField IIdRow.IdField
        {
            get => Fields.UserPermissionId; 
        }

        StringField INameRow.NameField
        {
            get => Fields.PermissionKey; 
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserPermissionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field UserPermissionId;
            public Int32Field UserId;
            public StringField PermissionKey;
            public BooleanField Granted;

            public StringField Username;
            public StringField User;
        }
    }
}