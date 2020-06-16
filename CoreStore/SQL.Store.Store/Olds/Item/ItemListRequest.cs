
namespace Store.Modules.Store.Item
{
    using Serenity.Services;
    public class ItemListRequest : ListRequest
    {
        public int? ItemID { get; set; }
    }
}