using Company.Administration.Entities;
namespace Company.Sales;

[ConnectionKey("Sales"), Module("Sales"), TableName("[sales].[Measures]")]
[DisplayName("Measures"), InstanceName("Measures")]
[ReadPermission(SalesPermissionKeys.Currency.View)]
[ModifyPermission(SalesPermissionKeys.Currency.Modify)]
[DeletePermission(SalesPermissionKeys.Currency.Delete)]
[ServiceLookupPermission("SalesPermission:General")]
[LookupScript("Sales.Measures", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class MeasuresRow : LoggingRow<MeasuresRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Measures"), Column("MeasureID"), Identity, IdProperty]
    public int? MeasureId { get => fields.MeasureId[this]; set => fields.MeasureId[this] = value; }

    [DisplayName("Measure Name"), Size(20), NotNull, QuickSearch, NameProperty]
    public string MeasureName { get => fields.MeasureName[this]; set => fields.MeasureName[this] = value; }

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
        public Int32Field MeasureId;
        public StringField MeasureName;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}