namespace Company.Sales;

[ConnectionKey("Sales"), Module("Sales"), TableName("[sales].[CategoriesTypeLang]")]
[DisplayName("Categories Type Lang"), InstanceName("Categories Type Lang")]
[ReadPermission(SalesPermissionKeys.Categories.View)]
[ModifyPermission(SalesPermissionKeys.Categories.Modify)]
public sealed class CategoriesTypeLangRow : Row<CategoriesTypeLangRow.RowFields>, IIdRow, INameRow, ILocalizationRow
{
    [DisplayName("Id"), Column("ID"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("CategoryType Id"), Column("CategoryTypeID"), NotNull]
    public int? CategoryTypeId { get => fields.CategoryTypeId[this]; set => fields.CategoryTypeId[this] = value; }

    [DisplayName("Language Id"), Column("LanguageID"), NotNull]
    public string LanguageId { get => fields.LanguageId[this]; set => fields.LanguageId[this] = value; }

    [DisplayName("Category Type Name"), Size(40), QuickSearch, NameProperty]
    public string CategoryTypeName { get => fields.CategoryTypeName[this]; set => fields.CategoryTypeName[this] = value; }

    [DisplayName("Description")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    public StringField CultureIdField => fields.LanguageId;

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field CategoryTypeId;
        public StringField LanguageId;
        public StringField CategoryTypeName;
        public StringField Description;
    }
}