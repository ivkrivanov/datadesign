﻿
namespace CoreStore.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresLang]")]
    [DisplayName("Wares Lang"), InstanceName("Wares Lang")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class WaresLangRow : Row, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this]; 
            set => Fields.Id[this] = value; 
        }

        [DisplayName("Wares Id"), Column("WaresID"), NotNull]
        public Int32? WaresId
        {
            get => Fields.WaresId[this]; 
            set => Fields.WaresId[this] = value; 
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get => Fields.LanguageId[this]; 
            set => Fields.LanguageId[this] = value; 
        }

        [DisplayName("Wares Name"), Size(60), QuickSearch]
        public String WaresName
        {
            get => Fields.WaresName[this]; 
            set => Fields.WaresName[this] = value; 
        }

        [DisplayName("Description")]
        public String Description
        {
            get => Fields.Description[this]; 
            set => Fields.Description[this] = value; 
        }

        IIdField IIdRow.IdField
        {
            get => Fields.Id; 
        }

        StringField INameRow.NameField
        {
            get => Fields.WaresName; 
        }

        public Field CultureIdField
        {
            get => Fields.LanguageId; 
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresLangRow()
            : base(Fields)
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
}
