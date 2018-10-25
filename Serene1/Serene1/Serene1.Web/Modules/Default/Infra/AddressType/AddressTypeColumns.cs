
namespace Serene1.Default.Infra.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Infra.AddressType")]
    [BasedOnRow(typeof(Entities.AddressTypeRow), CheckNames = true)]
    public class AddressTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EnumValue { get; set; }
        [EditLink, Width(250)]
        public String EnumName { get; set; }
    }
}