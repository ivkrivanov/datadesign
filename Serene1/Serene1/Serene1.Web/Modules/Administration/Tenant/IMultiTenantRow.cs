using Serenity.Data;

namespace Serene1
{
    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
    }
}