using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[sales].[Currency]")]
[DisplayName("Currency"), InstanceName("Currency")]
[ReadPermission(PermissionKeys.Currency.View)]
[ModifyPermission(PermissionKeys.Currency.Modify)]
[DeletePermission(PermissionKeys.Currency.Delete)]
[LookupScript("Company.Currency", LookupType = typeof(MultiTenantRowLookupScript<>))]

public sealed class CurrencyRow : LoggingRow<CurrencyRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Currency Code"), Size(3), PrimaryKey, NotNull, IdProperty, QuickSearch]
    public string CurrencyCode { get => fields.CurrencyCode[this]; set => fields.CurrencyCode[this] = value; }

    [DisplayName("Name"), Size(50), NotNull, NameProperty, QuickSearch]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

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
        public StringField CurrencyCode;
        public StringField Name;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}