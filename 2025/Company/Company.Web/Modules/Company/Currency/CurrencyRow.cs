using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[sales].[Currency]")]
[DisplayName("Currency"), InstanceName("Currency")]
[ReadPermission("PermissionKeys.Currency")]
[ModifyPermission("PermissionKeys.Currency")]
[ServiceLookupPermission("PermissionKeys.Currency")]
public sealed class CurrencyRow : Administration.LoggingRow<CurrencyRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Currency Id"), Identity, IdProperty]
    public int? CurrencyId { get => fields.CurrencyId[this]; set => fields.CurrencyId[this] = value; }

    [DisplayName("Currency Code"), Size(3), NotNull, QuickSearch, NameProperty]
    public string CurrencyCode { get => fields.CurrencyCode[this]; set => fields.CurrencyCode[this] = value; }

    [DisplayName("Name"), Size(50), NotNull]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Tenant Id"), NotNull]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public class RowFields : Administration.LoggingRowFields
    {
        public Int32Field CurrencyId;
        public StringField CurrencyCode;
        public StringField Name;
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}