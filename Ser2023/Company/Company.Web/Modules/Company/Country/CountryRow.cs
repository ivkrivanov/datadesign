using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[Country]")]
[DisplayName("Country"), InstanceName("Country")]
[ReadPermission(PermissionKeys.Country.View)]
[ModifyPermission(PermissionKeys.Country.Modify)]
[DeletePermission(PermissionKeys.Country.Delete)]
[LookupScript("Company.Country", LookupType = typeof(MultiTenantRowLookupScript<>))]

public sealed class CountryRow : LoggingRow<CountryRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Country Code"), Size(3), PrimaryKey, NotNull, IdProperty, QuickSearch]
    public string CountryCode { get => fields.CountryCode[this]; set => fields.CountryCode[this] = value; }

    [DisplayName("Country Name"), Size(50), NotNull, NameProperty]
    public string CountryName { get => fields.CountryName[this]; set => fields.CountryName[this] = value; }

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
        public StringField CountryCode;
        public StringField CountryName;

        public Int16Field IsActive;
        public Int32Field TenantId;
    }
}