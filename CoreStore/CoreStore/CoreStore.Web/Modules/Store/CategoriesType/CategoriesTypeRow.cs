﻿
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CategoriesType]")]
    [DisplayName("Categories Type"), InstanceName("Categories Type")]
    [ReadPermission(PermissionKeys.CategoriesType.View)]
    [ModifyPermission(PermissionKeys.CategoriesType.Modify)]
    [DeletePermission(PermissionKeys.CategoriesType.Delete)]
    [LookupScript("Store.CategoriesType", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]
    public sealed class CategoriesTypeRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Category Type Id"), Column("CategoryTypeID"), Identity]
        public Int32? CategoryTypeId
        {
            get => Fields.CategoryTypeId[this]; 
            set => Fields.CategoryTypeId[this] = value; 
        }

        [DisplayName("Type"), NotNull]
        public Int16? Type
        {
            get => Fields.Type[this]; 
            set => Fields.Type[this] = value; 
        }

        [DisplayName("Category Type"), Size(30), NotNull, QuickSearch]
        public String CategoryType
        {
            get => Fields.CategoryType[this]; 
            set => Fields.CategoryType[this] = value; 
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

        IIdField IIdRow.IdField
        {
            get => Fields.CategoryTypeId; 
        }

        StringField INameRow.NameField
        {
            get => Fields.CategoryType; 
        }

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
