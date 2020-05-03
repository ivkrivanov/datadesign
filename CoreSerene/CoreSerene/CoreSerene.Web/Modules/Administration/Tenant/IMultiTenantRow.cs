
namespace Serene1
{
    using Serenity.Data;

    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
    }
}