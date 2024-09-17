
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;

    [FormScript("Store.Shippers")]
    [BasedOnRow(typeof(Entities.ShippersRow), CheckNames = true)]
    public class ShippersForm
    {
        public string CompanyName { get; set; }
        public string Phone { get; set; }
    }
}