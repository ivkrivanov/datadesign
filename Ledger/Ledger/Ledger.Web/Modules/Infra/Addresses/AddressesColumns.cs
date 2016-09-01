
namespace Ledger.Infra.Columns
{
    using System;
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [ColumnsScript("Infra.Addresses")]
    [BasedOnRow(typeof(Entities.AddressesRow))]
    public class AddressesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AddressId { get; set; }
        [EditLink]
        //public String Address { get; set; }
        //public String ZipCode { get; set; }
        //public String City { get; set; }
        //public String State { get; set; }
        //public String Country { get; set; }
        public String StreetAddress { get; set; }
    }
}