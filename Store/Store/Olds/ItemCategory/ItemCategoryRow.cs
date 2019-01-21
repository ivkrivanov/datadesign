
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ItemCategories]")]
    [DisplayName("Item Category"), InstanceName("Item Category")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    [LookupScript("Store.ItemCategory", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(ItemCategoryLangRow))]
    public sealed class ItemCategoryRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("ID"), Column("ItemCategoryID"), Identity]
        public Int32? ItemCategoryID
        {
            get { return Fields.ItemCategoryID[this]; }
            set { Fields.ItemCategoryID[this] = value; }
        }

        [DisplayName("Code"), Size(15), NotNull, QuickSearch]
        public String ItemCategoryCode
        {
            get { return Fields.ItemCategoryCode[this]; }
            set { Fields.ItemCategoryCode[this] = value; }
        }

        [DisplayName("Name"), Size(15), NotNull, QuickSearch]
        public String ItemCategoryName
        {
            get { return Fields.ItemCategoryName[this]; }
            set { Fields.ItemCategoryName[this] = value; }
        }

        [DisplayName("Description"), QuickSearch]
        public String ItemCategoryDescription
        {
            get { return Fields.ItemCategoryDescription[this]; }
            set { Fields.ItemCategoryDescription[this] = value; }
        }

        [DisplayName("Picture"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "ItemCategoryImage/~", CopyToHistory = true)]
        public String ItemCategoryImage
        {
            get { return Fields.ItemCategoryImage[this]; }
            set { Fields.ItemCategoryImage[this] = value; }
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
            public StringField ItemCategoryDescription;
            public StringField ItemCategoryImage;

            public Int16Field IsActive;
            public readonly Int32Field TenantId;
        }
    }
}
