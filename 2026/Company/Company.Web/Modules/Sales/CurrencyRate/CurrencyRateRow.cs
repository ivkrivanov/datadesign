using Company.Administration.Entities;

namespace Company.Sales;

[ConnectionKey("Company"), Module("Sales"), TableName("[sales].[CurrencyRate]")]
[DisplayName("Currency Rate"), InstanceName("Currency Rate")]
[ReadPermission(SalesPermissionKeys.CurrencyRate.View)]
[ModifyPermission(SalesPermissionKeys.CurrencyRate.Modify)]
[DeletePermission(SalesPermissionKeys.CurrencyRate.Delete)]
[ServiceLookupPermission("Sales.CurrencyRate")]
[LookupScript("Sales.CurrencyRate", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class CurrencyRateRow : LoggingRow<CurrencyRateRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jFromCurrencyCode = nameof(jFromCurrencyCode);
    const string jToCurrencyCode = nameof(jToCurrencyCode);

    [DisplayName("Currency Rate Id"), Column("CurrencyRateID"), Identity, IdProperty]
    public int? CurrencyRateId { get => fields.CurrencyRateId[this]; set => fields.CurrencyRateId[this] = value; }

    [DisplayName("Currency Rate Date"), NotNull]
    public DateTime? CurrencyRateDate { get => fields.CurrencyRateDate[this]; set => fields.CurrencyRateDate[this] = value; }

    [DisplayName("From Currency Code"), Size(3), NotNull, ForeignKey("[sales].[Currency]", "CurrencyCode"), LeftJoin(jFromCurrencyCode), QuickSearch, NameProperty] //, TextualField(nameof(FromCurrencyCode))]
    [AsyncLookupEditor(typeof(CurrencyLookup)), QuickFilter(CssClass = "hidden-xs")]
    public string FromCurrencyCode { get => fields.FromCurrencyCode[this]; set => fields.FromCurrencyCode[this] = value; }

    [DisplayName("To Currency Code"), Size(3), NotNull, ForeignKey("[sales].[Currency]", "CurrencyCode"), LeftJoin(jToCurrencyCode), QuickSearch, TextualField(nameof(ToCurrencyCode))]
    [AsyncLookupEditor(typeof(CurrencyLookup)), QuickFilter(CssClass = "hidden-xs")]
    public string ToCurrencyCode { get => fields.ToCurrencyCode[this]; set => fields.ToCurrencyCode[this] = value; }

    [DisplayName("Average Rate"), Size(19), Scale(4), NotNull]
    public decimal? AverageRate { get => fields.AverageRate[this]; set => fields.AverageRate[this] = value; }

    [DisplayName("End Of Day Rate"), Size(19), Scale(4), NotNull]
    public decimal? EndOfDayRate { get => fields.EndOfDayRate[this]; set => fields.EndOfDayRate[this] = value; }


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
        public Int32Field CurrencyRateId;
        public DateTimeField CurrencyRateDate;
        public StringField FromCurrencyCode;
        public StringField ToCurrencyCode;
        public DecimalField AverageRate;
        public DecimalField EndOfDayRate;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}