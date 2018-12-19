

namespace Warehouse.Store
{ 
    using Serenity.Services;
    public class ItemListRequest : ListRequest
    {
        public int? ItemID { get; set; }
    }
}