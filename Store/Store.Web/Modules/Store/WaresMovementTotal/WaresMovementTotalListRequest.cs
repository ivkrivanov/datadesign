
namespace Store.Store
{
    using Serenity.Services;
    using System;
    public class WaresMovementTotalListRequest : ListRequest
    {
        public Int32? WaresMoveID { get; set; }
        public Int32? TenantID { get; set; }
    }
}