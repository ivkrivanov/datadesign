
namespace CoreStore.Store
{
    using Serenity.Services;
    public class CaregoriesListRequest : ListRequest
    {
        public int? CategoryID { get; set; }
    }
}
