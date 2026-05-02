using Serenity.Services;

namespace Company.Store;
public class ProductsListRequest : ListRequest
{
    public int? WaresId { get; set; }
}
