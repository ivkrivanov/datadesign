namespace Warehouse.Store
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Store.OrderShippingState")]
    public enum OrderShippingState
    {
        [Description("Not Shipped")]
        NotShipped = 0,
        [Description("Shipped")]
        Shipped = 1
    }
}