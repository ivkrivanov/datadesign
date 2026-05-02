using Serenity.Services;

namespace Company.Store;

public class OrderListRequest : ListRequest
{
    public int? ProductId { get; set; }
}
