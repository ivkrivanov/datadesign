﻿
namespace Warehouse.Store
{
    using Serenity.Services;
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}