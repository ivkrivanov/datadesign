namespace Ledger.Infra.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Categories"), InstanceName("Categories"), TwoLevelCached]
    [ReadPermission(Infra.PermissionKeys.General)]
    [ModifyPermission(Infra.PermissionKeys.General)]
    public sealed class CategoryRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Category Id"), Identity]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Category Code"), Size(4), NotNull, QuickSearch]
        public String CategoryCode
        {
            get { return Fields.CategoryCode[this]; }
            set { Fields.CategoryCode[this] = value; }
        }

        [DisplayName("Category Type"), NotNull]
        public Int16? CategoryType
        {
            get { return Fields.CategoryType[this]; }
            set { Fields.CategoryType[this] = value; }
        }

        [DisplayName("Category Name"), Size(15), NotNull]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Description"), Size(255)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Picture"), Size(255), ImageUploadEditor(FilenameFormat = "Categories/PhotoImage/~")]
        public String Picture
        {
            get { return Fields.Picture[this]; }
            set { Fields.Picture[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
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
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryCode; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field CategoryId;
            public StringField CategoryCode;
            public Int16Field CategoryType;
            public StringField CategoryName;
            public StringField Description;
            public StringField Picture;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public RowFields()
                : base("[ldg].[Categories]")
            {
                LocalTextPrefix = "Infra.Category";
            }
        }
    }
}