
namespace CoreStore.Store.Entities
{
    using Administration.Entities;
    using CoreStore.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Categories]")]
    [DisplayName("Categories"), InstanceName("Categories")]
    [ReadPermission(StorePermissionKeys.General)]
    [ModifyPermission(StorePermissionKeys.General)]
    [LookupScript("Store.Category", LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(CategoriesLangRow))]
    public sealed class CategoriesRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Category Id"), Column("CategoryID"), Identity]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Category Type"), Column("CategoryTypeID"), NotNull, ForeignKey(typeof(CategoriesTypeRow)), LeftJoin("jCategoryType"), TextualField("CategoryType"), LookupInclude]
        public Int32? CategoryTypeId
        {
            get { return Fields.CategoryTypeId[this]; }
            set { Fields.CategoryTypeId[this] = value; }
        }

        [DisplayName("Category Code"), Size(15), NotNull, QuickSearch]
        public String CategoryCode
        {
            get { return Fields.CategoryCode[this]; }
            set { Fields.CategoryCode[this] = value; }
        }

        [DisplayName("Category Name"), Size(15), NotNull, QuickSearch]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Description"), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Picture")]
        public Stream Picture
        {
            get { return Fields.Picture[this]; }
            set { Fields.Picture[this] = value; }
        }

        [DisplayName("Category Type Type"), Expression("jCategoryType.[Type]"), LookupInclude]
        public Int16? CategoryTypeType
        {
            get { return Fields.CategoryTypeType[this]; }
            set { Fields.CategoryTypeType[this] = value; }
        }

        [DisplayName("Category Type"), Expression("jCategoryType.[CategoryType]"), LookupInclude]
        public String CategoryType
        {
            get { return Fields.CategoryType[this]; }
            set { Fields.CategoryType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryCode; }
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

        public CategoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field CategoryId;
            public Int32Field CategoryTypeId;
            public StringField CategoryCode;
            public StringField CategoryName;
            public StringField Description;
            public StreamField Picture;

            public Int16Field IsActive;
            public readonly Int32Field TenantId;

            public Int16Field CategoryTypeType;
            public StringField CategoryType;
        }
    }
}
