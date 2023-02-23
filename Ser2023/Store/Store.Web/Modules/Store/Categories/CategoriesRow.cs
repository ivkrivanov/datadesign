
namespace Store.Store.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System.ComponentModel;
    using System.IO;
    using Store;
    using System;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Categories]")]
    [DisplayName("Categories"), InstanceName("Categories")]
    [ReadPermission(PermissionKeys.CategoriesType.View)]
    [ModifyPermission(PermissionKeys.CategoriesType.Modify)]
    [DeletePermission(PermissionKeys.CategoriesType.Delete)]
    [LookupScript("Store.Categories", LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(CategoriesLangRow))]
    public sealed class CategoriesRow : LoggingRow<CategoriesRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Category Id"), Column("CategoryID"), Identity, IdProperty]
        public int? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
        }

        [DisplayName("Category Type"), Column("CategoryTypeID"), NotNull, ForeignKey(typeof(CategoriesTypeRow)), LeftJoin("type"), LookupInclude]
        [LookupEditor(typeof(CategoriesTypeRow), InplaceAdd = true)]
        public int? CategoryTypeId
        {
            get => fields.CategoryTypeId[this];
            set => fields.CategoryTypeId[this] = value;
        }

        [DisplayName("Category Name"), Size(20), NotNull, QuickSearch, NameProperty]
        public string CategoryName
        {
            get => fields.CategoryName[this];
            set => fields.CategoryName[this] = value;
        }

        [DisplayName("Category Code"), Size(20), NotNull, QuickSearch]
        public string CategoryCode
        {
            get => fields.CategoryCode[this];
            set => fields.CategoryCode[this] = value;
        }

        [DisplayName("Description"), QuickSearch]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Picture"), Size(2147483647)]
        public Stream Picture
        {
            get => fields.Picture[this];
            set => fields.Picture[this] = value;
        }

        [Origin("type"), LookupInclude]
        public Int16? Type
        {
            get => Fields.Type[this];
            set => Fields.Type[this] = value;
        }

        [Origin("type"), LookupInclude]
        public String CategoryType
        {
            get => Fields.CategoryType[this];
            set => Fields.CategoryType[this] = value;
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public Int32Field TenantIdField
        {
            get => fields.TenantId;
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => fields.IsActive;
        }

        #endregion Tenant & Activ

        public CategoriesRow()
            : base()
        {
        }

        public CategoriesRow(RowFields fields)
            : base(fields)
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
            public Int32Field TenantId;

            public Int16Field Type;
            public StringField CategoryType;
        }
    }
}