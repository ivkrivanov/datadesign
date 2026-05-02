using Address.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Address.Address
{
    [ConnectionKey("Address"), Module("Address"), TableName("[address].[Country]")]
    [DisplayName("Country"), InstanceName("Country")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CountryRow : LoggingRow<CountryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Country Code"), Size(3), PrimaryKey, NotNull, IdProperty, QuickSearch, NameProperty]
        public string CountryCode
        {
            get => fields.CountryCode[this];
            set => fields.CountryCode[this] = value;
        }

        [DisplayName("Name"), Size(50), NotNull]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Is Active"), NotNull]
        public short? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        public CountryRow()
            : base()
        {
        }

        public CountryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public StringField CountryCode;
            public StringField Name;
            public Int16Field IsActive;
        }
    }
}