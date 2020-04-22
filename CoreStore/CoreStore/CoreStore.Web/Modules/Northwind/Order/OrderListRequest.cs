using Serenity.Services;

namespace CoreStore.Store
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}