
namespace Serene1.Default.Infra.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.AddressType")]
    [BasedOnRow(typeof(Entities.AddressTypeRow), CheckNames = true)]
    public class AddressTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EnumValue { get; set; }
        [EditLink]
        public String EnumName { get; set; }
    }
}