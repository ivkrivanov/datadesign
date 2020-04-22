
namespace CoreStore.Store.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CategoriesType]")]
    [DisplayName("Categories Type"), InstanceName("Categories Type")]
    [ReadPermission(StorePermissionKeys.General)]
    [ModifyPermission(StorePermissionKeys.General)]
    [LookupScript("Store.CategoryType", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]

    public sealed class CategoriesTypeRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Category Type Id"), Column("CategoryTypeID"), Identity]
        public Int32? CategoryTypeId
        {
            get { return Fields.CategoryTypeId[this]; }
            set { Fields.CategoryTypeId[this] = value; }
        }

        [DisplayName("Type"), NotNull]
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
            get { return Fields.CategoryTypeId; }
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

        public CategoriesTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field CategoryTypeId;
            public Int16Field Type;
            public StringField CategoryType;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}
