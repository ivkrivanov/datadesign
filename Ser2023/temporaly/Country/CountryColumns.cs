using Serenity.ComponentModel;
using System.ComponentModel;

namespace Address.Address.Columns
{
    [ColumnsScript("Address.Country")]
    [BasedOnRow(typeof(CountryRow), CheckNames = true)]
    public class CountryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public string CountryCode { get; set; }
        public string Name { get; set; }
        public short IsActive { get; set; }
    }
}