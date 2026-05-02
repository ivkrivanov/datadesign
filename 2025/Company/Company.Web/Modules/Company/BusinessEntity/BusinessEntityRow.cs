using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntity]")]
[DisplayName("Business Entity"), InstanceName("Business Entity")]
[ReadPermission(PermissionKeys.BusinessEntity.View)]
[ModifyPermission(PermissionKeys.BusinessEntity.Modify)]
[DeletePermission(PermissionKeys.BusinessEntity.Delete)]
[ServiceLookupPermission("Company:General")]
//[LeftJoin("be", "[person].[BusinessEntity]", "be.[BusinessEntityId] = T0.[BusinessEntityId]", RowType = typeof(PersonRow), TitlePrefix = "")]
[UpdatableExtension(jPerson, typeof(PersonRow), CascadeDelete = true)]
//[UpdatableExtension("be", typeof(PersonRow), CascadeDelete = true)]
[LookupScript("Company.BusinessEntity", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class BusinessEntityRow : LoggingRow<BusinessEntityRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jPerson = nameof(jPerson);

    [DisplayName("Business Entity Id"), Column("BusinessEntityId"), Identity, PrimaryKey, IdProperty]
    [ForeignKey(typeof(PersonRow), nameof(PersonRow.BusinessEntityId)), LeftJoin(jPerson), Updatable(true)]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    //Person
    [DisplayName("Person Type"), Origin(jPerson, nameof(PersonRow.PersonType)), NotNull, QuickSearch]
    public string PersonType { get => fields.PersonType[this]; set => fields.PersonType[this] = value; }

    [DisplayName("Title"), Origin(jPerson, nameof(PersonRow.Title)), Updatable, Size(8)]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("First Name"), Origin(jPerson, nameof(PersonRow.FirstName)), Updatable, Size(50), NotNull]
    public string FirstName { get => fields.FirstName[this]; set => fields.FirstName[this] = value; }

    [DisplayName("Middle Name"), Origin(jPerson, nameof(PersonRow.MiddleName)), Updatable, Size(50), NotNull]
    public string MiddleName { get => fields.MiddleName[this]; set => fields.MiddleName[this] = value; }

    [DisplayName("Last Name"), Origin(jPerson, nameof(PersonRow.LastName)), Updatable, Size(50), NotNull]
    public string LastName { get => fields.LastName[this]; set => fields.LastName[this] = value; }

    [DisplayName("FullName"), Origin(jPerson, nameof(PersonRow.FullName)), Size(100), QuickSearch, NameProperty]
    //[Concat($"T0.[{nameof(Title)}]", "' '", $"T0.[{nameof(FirstName)}]", "' '", $"T0.[{nameof(MiddleName)}]", "' '", $"T0.[{nameof(LastName)}]", "' '", $"T0.[{nameof(Suffix)}]")]
    public string FullName { get => Fields.FullName[this]; set => Fields.FullName[this] = value; }

    [DisplayName("Suffix"), Origin(jPerson, nameof(PersonRow.Suffix)), Size(10)]
    public string Suffix { get => fields.Suffix[this]; set => fields.Suffix[this] = value; }

    [DisplayName("Addresses"), MasterDetailRelation(foreignKey: nameof(BusinessEntityAddressRow.BusinessEntityId)), NotMapped]
    [MinSelectLevel(SelectLevel.Explicit)]
    public List<BusinessEntityAddressRow> AddressList { get => Fields.AddressList[this]; set => Fields.AddressList[this] = value; }

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
        //person
        //public Int32Field BusinessEntityId;
        public StringField PersonType;
        public StringField Title;
        public StringField FirstName;
        public StringField MiddleName;
        public StringField LastName;
        public StringField FullName;
        public StringField Suffix;

        public RowListField<BusinessEntityAddressRow> AddressList;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}