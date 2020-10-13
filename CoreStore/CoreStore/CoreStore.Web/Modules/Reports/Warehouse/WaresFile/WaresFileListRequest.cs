
namespace CoreStore.Reports
{
    using Serenity.Services;
    using System;

    public class WaresFileListRequest : ListRequest
    {
        public Int32? ShopID { get; set; }
        public Int32? WaresID { get; set; }
        public Int32? TenantID { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}