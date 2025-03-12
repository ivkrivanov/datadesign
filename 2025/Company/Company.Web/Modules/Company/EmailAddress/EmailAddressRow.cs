using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[EmailAddress]")]
[DisplayName("Email Address"), InstanceName("Email Address")]
[ReadPermission("PermissionKeys.EmailAddress")]
[ModifyPermission("PermissionKeys.EmailAddress")]
public sealed class EmailAddressRow : Administration.LoggingRow<EmailAddressRow.RowFields>, IIdRow, INameRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);

    [DisplayName("Business Entity"), PrimaryKey, NotNull, ForeignKey(typeof(PersonRow)), LeftJoin(jBusinessEntity)]
    [TextualField(nameof(BusinessEntityPersonType)), LookupEditor(typeof(PersonRow), Async = true)]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Email Address Id"), Column("EmailAddressID"), Identity, IdProperty]
    public int? EmailAddressId { get => fields.EmailAddressId[this]; set => fields.EmailAddressId[this] = value; }

    [DisplayName("Email Address"), Size(50), QuickSearch, NameProperty]
    public string EmailAddress { get => fields.EmailAddress[this]; set => fields.EmailAddress[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Tenant Id"), NotNull]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    [DisplayName("Business Entity Person Type"), Expression($"{jBusinessEntity}.[PersonType]")]
    public string BusinessEntityPersonType { get => fields.BusinessEntityPersonType[this]; set => fields.BusinessEntityPersonType[this] = value; }

    public class RowFields : Administration.LoggingRowFields
    {
        public Int32Field BusinessEntityId;
        public Int32Field EmailAddressId;
        public StringField EmailAddress;
        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField BusinessEntityPersonType;
    }
}