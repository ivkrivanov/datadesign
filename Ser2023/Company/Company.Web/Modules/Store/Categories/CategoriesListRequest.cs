
namespace Company.Store;

using Serenity.Services;
public class CategoriesListRequest : ListRequest
{
    public string CategoryName { get; set; }
}