﻿
namespace Ledger.Northwind.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), DisplayName("Categories"), InstanceName("Category"), TwoLevelCached]
    [ReadPermission(Northwind.PermissionKeys.General)]
    [ModifyPermission(Northwind.PermissionKeys.General)]
    [LookupScript("Northwind.Category")]
    [LocalizationRow(typeof(CategoryLangRow))]
    public sealed class CategoryRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Category Id"), Identity]
        public Int32? CategoryID
        {
            get { return Fields.CategoryID[this]; }
            set { Fields.CategoryID[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryID;
            public StringField CategoryName;
            public StringField Description;
            public StreamField Picture;

            public readonly Int32Field TenantId;
            public RowFields()
                : base("Categories")
            {
                LocalTextPrefix = "Northwind.Category";
            }
        }
    }
}