using Serenity.ComponentModel;
using Serenity.Web;

namespace Address.Address.Forms
{
    [FormScript("Address.Country")]
    [BasedOnRow(typeof(CountryRow), CheckNames = true)]
    public class CountryForm
    {
        public string Name { get; set; }
        public short IsActive { get; set; }
    }
}