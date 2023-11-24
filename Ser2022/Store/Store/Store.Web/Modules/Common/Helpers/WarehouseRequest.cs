
namespace Store
{
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    public class WarehouseRequest : ServiceRequest
    {
    }

    public class WarehouseResponse : ServiceResponse
    {
        public int Inserted { get; set; }
        public int Updated { get; set; }
        public List<string> ErrorList { get; set; }
    }
}
