
namespace CoreStore.Store
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Store.ShippingState")]
    public enum ShippingState
    {
        [Description("Not Shipped")]
        NotShipped = 0,
        [Description("Shipped")]
        Shipped = 1
    }
}