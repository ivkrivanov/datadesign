
namespace Store.Store
{ 
    using Serenity.Services;
    public class ProductMovementListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}