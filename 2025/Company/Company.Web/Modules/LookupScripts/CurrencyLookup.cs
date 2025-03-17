namespace Company.Company;

[LookupScript, Module("LookupScripts")] //("Company.Currency")]

public class CurrencyLookup: MultiTenantRowLookupScript<CurrencyRow>
{
    public CurrencyLookup(ISqlConnections sqlconnection, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
        : base (sqlconnection, twoLevelCache, userAccessor)
    {
        IdField = CurrencyRow.Fields.CurrencyId.PropertyName;
        TextField = CurrencyRow.Fields.Name.PropertyName;
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        var fld = CurrencyRow.Fields;
        query.Distinct(true)
            .Select(fld.CurrencyId)
            .Select(fld.Name);

        AddTenantFilter(query);
    }

    protected override void ApplyOrder(SqlQuery query)
    {
    }
}
