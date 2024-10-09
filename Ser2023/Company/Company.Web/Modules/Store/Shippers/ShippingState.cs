
namespace Company.Store
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Company.ShippingState")]
    public enum ShippingState
    {
        [Description("Not Shipped")]
        NotShipped = 0,
        [Description("Shipped")]
        Shipped = 1
    }
}