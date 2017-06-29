using Serenity.Data;

namespace Store
{
    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
    }
}