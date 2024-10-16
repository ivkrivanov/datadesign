﻿
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Categories]")]
    [DisplayName("Categories"), InstanceName("Category")]
    [ReadPermission(StorePermissionKeys.General)]
    [ModifyPermission(StorePermissionKeys.General)]
    [LookupScript("Store.Category", LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(CategoryLangRow))]
    public sealed class CategoryRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Category Id"), Column("CategoryID"), Identity]
        public Int32? CategoryID
        {
            get { return Fields.CategoryID[this]; }
            set { Fields.CategoryID[this] = value; }
        }

        [DisplayName("Category Type"), ForeignKey(typeof(CategoryTypeRow)), LeftJoin("type"), LookupInclude]
        [LookupEditor(typeof(CategoryTypeRow), InplaceAdd = true)]
        public Int16? CategoryTypeID
        {
            get { return Fields.CategoryTypeID[this]; }
            set { Fields.CategoryTypeID[this] = value; }
        }

        [DisplayName("Category Name"), Size(15), NotNull, QuickSearch]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Category Code"), Size(15), NotNull, QuickSearch]
        public String CategoryCode
        {
            get { return Fields.CategoryCode[this]; }
            set { Fields.CategoryCode[this] = value; }
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

        [Origin("type"), LookupInclude]
        public Int16? Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [Origin("type"), LookupInclude]
        public String CategoryType
        {
            get { return Fields.CategoryType[this]; }
            set { Fields.CategoryType[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
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

        public CategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field CategoryID;
            public Int16Field CategoryTypeID;
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
