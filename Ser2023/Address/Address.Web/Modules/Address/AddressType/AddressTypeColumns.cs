
namespace Address.Address.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Address.AddressType")]
    [BasedOnRow(typeof(AddressTypeRow), CheckNames = true)]
    public class AddressTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public long AddressTypeId { get; set; }
        [EditLink]
        public string Name { get; set; }
        public Guid Rowguid { get; set; }
    }
}