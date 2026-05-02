using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Address.Address.Columns
{
    [ColumnsScript("Address.Address")]
    [BasedOnRow(typeof(AddressRow), CheckNames = true)]
    public class AddressColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [QuickFilter, QuickFilterOption("multiply", true)]
        public long AddressId { get; set; }
        [EditLink]
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string StateProvinceStateProvinceCode { get; set; }
        public string PostalCode { get; set; }
        public Guid Rowguid { get; set; }
        public short IsActive { get; set; }
        public int TenantId { get; set; }
    }
}