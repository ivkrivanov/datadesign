
namespace Store.Store
{
    using Serenity.Services;
    public class CategoryListRequest : ListRequest
    {
        public int? CategoryID { get; set; }
    }
}