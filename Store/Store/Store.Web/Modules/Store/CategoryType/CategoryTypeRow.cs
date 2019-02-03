
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CategoriesType]")]
    [DisplayName("Category Type"), InstanceName("Category Type")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript("Store.CategoryType", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]

    public sealed class CategoryTypeRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Category Type Id"), Column("CategoryTypeID"), Identity]
        public Int32? CategoryTypeID
        {
            get { return Fields.CategoryTypeID[this]; }
            set { Fields.CategoryTypeID[this] = value; }
        }

        [DisplayName("Type"), NotNull, QuickSearch]
        public Int16? Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Category Type"), Size(30), NotNull, QuickSearch]
        public String CategoryType
        {
            get { return Fields.CategoryType[this]; }
            set { Fields.CategoryType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryTypeID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryType; }
        }


        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Tenant & Activ


        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field CategoryTypeID;
            public Int16Field Type;
            public StringField CategoryType;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}
