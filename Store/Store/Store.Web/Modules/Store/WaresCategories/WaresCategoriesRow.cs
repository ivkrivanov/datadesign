
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresCategories]")]
    [DisplayName("Wares Categories"), InstanceName("Wares Categories")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    [LookupScript("Store.WaresCategories", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(WaresCategoriesLangRow))]
    public sealed class WaresCategoriesRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Wares Category Id"), Column("WaresCategoryID"), Identity]
        public Int32? WaresCategoryID
        {
            get { return Fields.WaresCategoryID[this]; }
            set { Fields.WaresCategoryID[this] = value; }
        }

        [DisplayName("Code"), Size(8), NotNull, QuickSearch]
        public String WaresCategoryCode
        {
            get { return Fields.WaresCategoryCode[this]; }
            set { Fields.WaresCategoryCode[this] = value; }
        }

        [DisplayName("Name"), Size(20), NotNull, QuickSearch]
        public String WaresCategoryName
        {
            get { return Fields.WaresCategoryName[this]; }
            set { Fields.WaresCategoryName[this] = value; }
        }

        [DisplayName("Description"), QuickSearch]
        public String WaresCategoryDescription
        {
            get { return Fields.WaresCategoryDescription[this]; }
            set { Fields.WaresCategoryDescription[this] = value; }
        }

        [DisplayName("Picture"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "WaresCategoriesImage/~", CopyToHistory = true)]
        public String WaresCategoryImage
        {
            get { return Fields.WaresCategoryImage[this]; }
            set { Fields.WaresCategoryImage[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.WaresCategoryID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.WaresCategoryName; }
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

        public WaresCategoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field WaresCategoryID;
            public StringField WaresCategoryCode;
            public StringField WaresCategoryName;
            public StringField WaresCategoryDescription;
            public StringField WaresCategoryImage;

            public Int16Field IsActive;
            public readonly Int32Field TenantId;
        }
    }
}
