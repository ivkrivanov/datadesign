
namespace Serene1.Default.Infra.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Infra.Addresses")]
    [BasedOnRow(typeof(Entities.AddressesRow), CheckNames = true)]
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