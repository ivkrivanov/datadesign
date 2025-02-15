using Company;

namespace Company;

public class MultiTenantRowLookupScript<TRow> : RowLookupScript<TRow>
    where TRow : class, IRow, IMultiTenantRow, new()
{
    private readonly ITwoLevelCache twoLevelCache;
    private readonly IUserAccessor userAccessor;

    public MultiTenantRowLookupScript(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) : base(sqlConnections)
    {
        Expiration = TimeSpan.FromDays(-1);
        this.twoLevelCache = twoLevelCache ?? throw new ArgumentNullException(nameof(twoLevelCache));
        this.userAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        base.PrepareQuery(query);
        AddTenantFilter(query);
    }

    protected void AddTenantFilter(SqlQuery query)
    {
        var r = new TRow();
        query.Where(r.TenantIdField == (Int32)userAccessor.User.GetTenantId());
    }

    public override string GetScript()
    {
        return twoLevelCache.GetLocalStoreOnly(
            $"MultiTenantLookup:{this.ScriptName}:{userAccessor.User.GetTenantId()}",
            TimeSpan.FromHours(1),
            new TRow().GetFields().GenerationKey, () =>
            {
                return base.GetScript();
            });
    }
}