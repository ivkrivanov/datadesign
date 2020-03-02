
namespace Store.Store.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CustomerDemographics]")]
    [DisplayName("Customer Demographic"), InstanceName("Customer Demographic")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CustomerDemographicRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Customer Type Id"), Column("CustomerTypeID"), Size(10), PrimaryKey, QuickSearch]
        public String CustomerTypeId
        {
            get { return Fields.CustomerTypeId[this]; }
            set { Fields.CustomerTypeId[this] = value; }
        }

        [DisplayName("Customer Desc"), Size(1073741823)]
        public String CustomerDesc
        {
            get { return Fields.CustomerDesc[this]; }
            set { Fields.CustomerDesc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerTypeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerDemographicRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CustomerTypeId;
            public StringField CustomerDesc;
        }
    }
}
