using Serenity.Data;

namespace Ledger
{
    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
    }
}