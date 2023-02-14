
namespace CoreStore.Store.Entities
{
    using Administration.Entities;
    using CoreStore.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Categories]")]
    [DisplayName("Categories"), InstanceName("Category")]
    [ReadPermission(PermissionKeys.Categories.View)]
    [ModifyPermission(PermissionKeys.Categories.Modify)]
    [DeletePermission(PermissionKeys.Categories.Delete)]
    [LookupScript("Store.Categories", LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(CategoriesLangRow))]
    public sealed class CategoriesRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Category Id"), Column("CategoryID"), Identity]
        public Int32? CategoryId
        {
            get => Fields.CategoryId[this]; 
            set => Fields.CategoryId[this] = value; 
        }

        [DisplayName("Category Type"), ForeignKey(typeof(CategoriesTypeRow)), LeftJoin("type"), LookupInclude]
        [LookupEditor(typeof(CategoriesTypeRow), InplaceAdd = true)]
        public Int16? CategoryTypeId
        {
            get => Fields.CategoryTypeId[this]; 
            set => Fields.CategoryTypeId[this] = value; 
        }

        [DisplayName("Category Name"), Size(15), NotNull, QuickSearch]
        public String CategoryName
        {
            get => Fields.CategoryName[this]; 
            set => Fields.CategoryName[this] = value; 
        }

        [DisplayName("Category Code"), Size(15), NotNull, QuickSearch]
        public String CategoryCode
        {
            get => Fields.CategoryCode[this]; 
            set => Fields.CategoryCode[this] = value; 
        }

        [DisplayName("Description"), QuickSearch]
        public String Description
        {
            get => Fields.Description[this]; 
            set => Fields.Description[this] = value; 
        }

        [DisplayName("Picture")]
        public Stream Picture
        {
            get => Fields.Picture[this]; 
            set => Fields.Picture[this] = value; 
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
        IIdField IIdRow.IdField
        {
            get => Fields.CategoryId; 
        }

        StringField INameRow.NameField
        {
            get => Fields.CategoryName; 
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => Fields.TenantId[this]; 
            set => Fields.TenantId[this] = value; 
        }

        public Int32Field TenantIdField
        {
            get => Fields.TenantId; 
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => Fields.IsActive[this]; 
            set => Fields.IsActive[this] = value; 
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => Fields.IsActive; 
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
            public Int16Field CategoryTypeId;
            public StringField CategoryCode;
            public StringField CategoryName;
            public StringField Description;
            public StreamField Picture;

            public Int16Field IsActive;
            public readonly Int32Field TenantId;

            public Int16Field Type;
            public StringField CategoryType;
        }
    }
}
