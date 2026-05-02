namespace Company.Sales;

[LookupScript, Module("LookupScripts")] //("Company.Currency")]

public class CurrencyLookup: MultiTenantRowLookupScript<CurrencyRow>
{
    public CurrencyLookup(ISqlConnections sqlconnection, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
        : base (sqlconnection, twoLevelCache, userAccessor)
    {
        IdField = TextField = CurrencyRow.Fields.CurrencyCode.PropertyName;
        // = CurrencyRow.Fields.Name.PropertyName;
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        var fld = CurrencyRow.Fields;
        query.Distinct(true)
            .Select(fld.CurrencyCode)
            .Select(fld.Name)
            .Where(
                fld.CurrencyCode != "" &
                fld.CurrencyCode.IsNotNull());

        AddTenantFilter(query);
    }

    protected override void ApplyOrder(SqlQuery query)
    {
    }
}
