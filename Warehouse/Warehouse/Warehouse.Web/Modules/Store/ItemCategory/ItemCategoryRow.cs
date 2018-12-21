
namespace Warehouse.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using Warehouse.Administration.Entities;
    using Warehouse.Store;
    using Warehouse.Store.Scripts;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ItemCategories]")]
    [DisplayName("Item Categories"), InstanceName("Item Category")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript("Store.ItemCategory", LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(ItemCategoriesLangRow))]
    public sealed class ItemCategoryRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Item Category Id"), Column("ItemCategoryID"), Identity]
        public Int32? ItemCategoryID
        {
            get { return Fields.ItemCategoryID[this]; }
            set { Fields.ItemCategoryID[this] = value; }
        }

        [DisplayName("Item Category Code"), Size(15), NotNull, QuickSearch]
        public String ItemCategoryCode
        {
            get { return Fields.ItemCategoryCode[this]; }
            set { Fields.ItemCategoryCode[this] = value; }
        }
        [DisplayName("Item Category Name"), Size(15), NotNull, QuickSearch]
        public String ItemCategoryName
        {
            get { return Fields.ItemCategoryName[this]; }
            set { Fields.ItemCategoryName[this] = value; }
        }

        [DisplayName("Item Description"), QuickSearch]
        public String ItemCatDescription
        {
            get { return Fields.ItemCatDescription[this]; }
            set { Fields.ItemCatDescription[this] = value; }
        }

        [DisplayName("Category Item Picture"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "ItemCatImage/~", CopyToHistory = true)]
        public String ItemCatImage
        {
            get { return Fields.ItemCatImage[this]; }
            set { Fields.ItemCatImage[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemCategoryID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemCategoryName; }
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

        public ItemCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field ItemCategoryID;
            public StringField ItemCategoryCode;
            public StringField ItemCategoryName;
            public StringField ItemCatDescription;
            public StringField ItemCatImage;

            public Int16Field IsActive;
            public readonly Int32Field TenantId;
        }
    }
}
