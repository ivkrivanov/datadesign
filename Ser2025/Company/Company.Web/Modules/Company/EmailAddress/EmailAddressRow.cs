using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[EmailAddress]")]
[DisplayName("Email Address"), InstanceName("Email Address")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class EmailAddressRow : LoggingRow<EmailAddressRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);

    [DisplayName("Business Entity"), PrimaryKey, NotNull, ForeignKey(typeof(PersonRow)), LeftJoin(jBusinessEntity)]
    [TextualField(nameof(BusinessEntityPersonType)), ServiceLookupEditor(typeof(PersonRow))]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Email Address Id"), Column("EmailAddressID"), Identity, IdProperty]
    public int? EmailAddressId { get => fields.EmailAddressId[this]; set => fields.EmailAddressId[this] = value; }

    [DisplayName("Email Address"), Size(50), QuickSearch, NameProperty]
    public string EmailAddress { get => fields.EmailAddress[this]; set => fields.EmailAddress[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ

    [DisplayName("Business Entity Person Type"), Expression($"{jBusinessEntity}.[PersonType]")]
    public string BusinessEntityPersonType { get => fields.BusinessEntityPersonType[this]; set => fields.BusinessEntityPersonType[this] = value; }

    public class RowFields : LoggingRowFields
    {
        public Int32Field BusinessEntityId;
        public Int32Field EmailAddressId;
        public StringField EmailAddress;
        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField BusinessEntityPersonType;
    }
}