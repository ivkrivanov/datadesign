
namespace Store.Store
{
    using Serenity.Services;
    public class CategoriesListRequest : ListRequest
    {
        public int? CategoryId { get; set; }
    }
}