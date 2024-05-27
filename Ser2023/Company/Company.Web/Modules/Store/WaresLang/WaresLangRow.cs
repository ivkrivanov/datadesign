using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresLang]")]
[DisplayName("Wares Lang"), InstanceName("Wares Lang")]
[ReadPermission("Store:General")]
[ModifyPermission("Store:General")]
public sealed class WaresLangRow : Row<WaresLangRow.RowFields>, IIdRow, INameRow, ILocalizationRow
{
    [DisplayName("Id"), Column("ID"), Identity, IdProperty]
    public int? Id
    {
        get => fields.Id[this];
        set => fields.Id[this] = value;
    }

    [DisplayName("Wares Id"), Column("WaresID"), NotNull]
    public int? WaresId
    {
        get => fields.WaresId[this];
        set => fields.WaresId[this] = value;
    }

    [DisplayName("Language Id"), Column("LanguageID"), NotNull]
    public int? LanguageId
    {
        get => fields.LanguageId[this];
        set => fields.LanguageId[this] = value;
    }

    [DisplayName("Wares Name"), Size(60), QuickSearch, NameProperty]
    public string WaresName
    {
        get => fields.WaresName[this];
        set => fields.WaresName[this] = value;
    }

    [DisplayName("Description")]
    public string Description
    {
        get => fields.Description[this];
        set => fields.Description[this] = value;
    }
    public Field CultureIdField
    {
        get => Fields.LanguageId;
    }

    public WaresLangRow()
        : base()
    {
    }

    public WaresLangRow(RowFields fields)
        : base(fields)
    {
    }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field WaresId;
        public Int32Field LanguageId;
        public StringField WaresName;
        public StringField Description;
    }
}