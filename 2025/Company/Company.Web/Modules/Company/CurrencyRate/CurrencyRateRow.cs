using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[sales].[CurrencyRate]")]
[DisplayName("Currency Rate"), InstanceName("Currency Rate")]
[ReadPermission("PermissionKeys.CurrencyRate")]
[ModifyPermission("PermissionKeys.CurrencyRate")]
[ServiceLookupPermission("PermissionKeys.CurrencyRate")]
public sealed class CurrencyRateRow : Administration.LoggingRow<CurrencyRateRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Currency Rate Id"), Column("CurrencyRateID"), Identity, IdProperty]
    public int? CurrencyRateId { get => fields.CurrencyRateId[this]; set => fields.CurrencyRateId[this] = value; }

    [DisplayName("Currency Rate Date"), NotNull]
    public DateTime? CurrencyRateDate { get => fields.CurrencyRateDate[this]; set => fields.CurrencyRateDate[this] = value; }

    [DisplayName("From Currency Code"), Size(3), NotNull, QuickSearch, NameProperty]
    public string FromCurrencyCode { get => fields.FromCurrencyCode[this]; set => fields.FromCurrencyCode[this] = value; }

    [DisplayName("To Currency Code"), Size(3), NotNull]
    public string ToCurrencyCode { get => fields.ToCurrencyCode[this]; set => fields.ToCurrencyCode[this] = value; }

    [DisplayName("Average Rate"), Size(19), Scale(4), NotNull]
    public decimal? AverageRate { get => fields.AverageRate[this]; set => fields.AverageRate[this] = value; }

    [DisplayName("End Of Day Rate"), Size(19), Scale(4), NotNull]
    public decimal? EndOfDayRate { get => fields.EndOfDayRate[this]; set => fields.EndOfDayRate[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Tenant Id"), NotNull]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public class RowFields : Administration.LoggingRowFields
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