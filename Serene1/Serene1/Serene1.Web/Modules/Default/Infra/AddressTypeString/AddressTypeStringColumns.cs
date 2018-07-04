
namespace Serene1.Default.Infra.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Infra.AddressTypeString")]
    [BasedOnRow(typeof(Entities.AddressTypeStringRow), CheckNames = true)]
    public class AddressTypeStringColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EnumLocaleId { get; set; }
        public String EnumValueEnumName { get; set; }
        [EditLink]
        public String DisplayName { get; set; }
        public Int32 Language { get; set; }
    }
}