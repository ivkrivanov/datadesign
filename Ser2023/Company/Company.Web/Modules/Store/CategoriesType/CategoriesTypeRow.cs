using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Store;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CategoriesType]")]
[DisplayName("Categories Type"), InstanceName("Categories Type")]
[ReadPermission(PermissionKeys.CategoriesType.View)]
[ModifyPermission(PermissionKeys.CategoriesType.Modify)]
[DeletePermission(PermissionKeys.CategoriesType.Delete)]
[LookupScript("Store.CategoriesType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class CategoriesTypeRow : LoggingRow<CategoriesTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Category Type Id"), Column("CategoryTypeID"), Identity,IdProperty]
    public Int32? CategoryTypeId
    {
        get => fields.CategoryTypeId[this]; 
        set => fields.CategoryTypeId[this] = value; 
    }

    [DisplayName("Type"), NotNull] //, NameProperty]
    public Int16? Type
    {
        get => fields.Type[this]; 
        set => fields.Type[this] = value; 
    }

    [DisplayName("Category Type"), Size(30), NotNull, NameProperty, QuickSearch]
    public String CategoryType
    {
        get => fields.CategoryType[this]; 
        set => fields.CategoryType[this] = value; 
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

    public CategoriesTypeRow()
    { 
    }

    public CategoriesTypeRow(RowFields fields)
        : base(fields)
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

