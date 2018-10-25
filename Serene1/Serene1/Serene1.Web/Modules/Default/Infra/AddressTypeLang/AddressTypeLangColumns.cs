
namespace Serene1.Default.Infra.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.AddressTypeLang")]
    [BasedOnRow(typeof(Entities.AddressTypeLangRow), CheckNames = true)]
    public class AddressTypeLangColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 EnumValue { get; set; }
        public Int32 LanguageId { get; set; }
        [EditLink]
        public String EnumName { get; set; }
    }
}