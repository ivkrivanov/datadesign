using Company.Administration.Entities;

namespace Company.Sales;

[ConnectionKey("Sales"), Module("Sales"), TableName("[sales].[CategoriesType]")]
[DisplayName("Categories Type"), InstanceName("Categories Type")]
[ReadPermission(SalesPermissionKeys.Categories.View)]
[ModifyPermission(SalesPermissionKeys.Categories.Modify)]
[ServiceLookupPermission(SalesPermissionKeys.Categories.Delete)]
[LookupScript]
[LocalizationRow(typeof(CategoriesTypeLangRow), LocalizeListByDefault = true)]
public sealed class CategoriesTypeRow : LoggingRow<CategoriesTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Category Type Id"), Column("CategoryTypeID"), Identity, IdProperty]
    public int? CategoryTypeId { get => fields.CategoryTypeId[this]; set => fields.CategoryTypeId[this] = value; }

    [DisplayName("Type"), NotNull]
    public short? Type { get => fields.Type[this]; set => fields.Type[this] = value; }

    [DisplayName("Category Type"), Size(30), NotNull, QuickSearch, NameProperty]
    public string CategoryType { get => fields.CategoryType[this]; set => fields.CategoryType[this] = value; }


    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ


    public class RowFields : LoggingRowFields
    {
        public Int32Field CategoryTypeId;
        public Int16Field Type;
        public StringField CategoryType;
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}