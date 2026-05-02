using Serenity.Services;

namespace Company.Store;

public class WaresOrderListRequest : ListRequest
{
    public int? WaresId { get; set; }
}
