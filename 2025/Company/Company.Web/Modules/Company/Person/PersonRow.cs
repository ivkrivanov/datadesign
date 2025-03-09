using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[Person]")]
[DisplayName("Person"), InstanceName("Person")]
[ReadPermission(PermissionKeys.Person.View)]
[ModifyPermission(PermissionKeys.Person.Modify)]
[DeletePermission(PermissionKeys.Person.Delete)]
[ServiceLookupPermission("Company:General")]
[LeftJoin ("be", "BusinessEntity", "be.[BusinessEntityId] = T0.[BusinessEntity]", RowType = typeof(BusinessEntityRow), TitlePrefix = "")]
[UpdatableExtension("be", typeof(BusinessEntityRow), CascadeDelete = true)]
[LookupScript("Company.Person", LookupType = typeof(PersonLookup))]
public sealed class PersonRow : LoggingRow<PersonRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);

    //[DisplayName("Business Entity"), PrimaryKey, NotNull, Updatable, ForeignKey(typeof(BusinessEntityRow)), LeftJoin(jBusinessEntity), IdProperty]
    [DisplayName("Business Entity"), PrimaryKey, NotNull, Updatable, IdProperty]
    [ServiceLookupEditor(typeof(BusinessEntityRow))]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Person Type"), Size(2), NotNull, QuickSearch]
    public string PersonType { get => fields.PersonType[this]; set => fields.PersonType[this] = value; }

    [DisplayName("Title"), Size(8)]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("First Name"), Size(50), NotNull]
    public string FirstName { get => fields.FirstName[this]; set => fields.FirstName[this] = value; }

    [DisplayName("Middle Name"), Size(50), NotNull]
    public string MiddleName { get => fields.MiddleName[this]; set => fields.MiddleName[this] = value; }

    [DisplayName("Last Name"), Size(50), NotNull]
    public string LastName { get => fields.LastName[this]; set => fields.LastName[this] = value; }

    [DisplayName("FullName"), Size(100), QuickSearch, NameProperty]
    [Concat($"T0.[{nameof(Title)}]", "' '", $"T0.[{nameof(FirstName)}]", "' '", $"T0.[{nameof(MiddleName)}]", "' '", $"T0.[{nameof(LastName)}]", "' '", $"T0.[{nameof(Suffix)}]")]
    public string FullName { get => Fields.FullName[this]; set => Fields.FullName[this] = value; }

    [DisplayName("Suffix"), Size(10)]
    public string Suffix { get => fields.Suffix[this]; set => fields.Suffix[this] = value; }

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
        public Int32Field BusinessEntityId;
        public StringField PersonType;
        public StringField Title;
        public StringField FirstName;
        public StringField MiddleName;
        public StringField LastName;
        public StringField FullName;
        public StringField Suffix;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}