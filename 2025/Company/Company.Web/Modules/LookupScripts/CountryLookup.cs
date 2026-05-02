namespace Company.Company;

[LookupScript, Module("LookupScripts")]

public class CountryLookup: MultiTenantRowLookupScript<CountryRow>
{
    public CountryLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
        : base(sqlConnections, twoLevelCache, userAccessor)
    {
        IdField = TextField =  CountryRow.Fields.CountryId.PropertyName;
        //TextField = CountryRow.Fields.CountryCode.PropertyName;
        //IdField = TextField = "Country";
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        var fld = CountryRow.Fields;
        query.Distinct(true)
            .Select(fld.CountryId)
            .Select(fld.CountryCode)
            .Select(fld.CountryName)
            .Where(
                fld.CountryCode != "" &
                fld.CountryCode.IsNotNull());
        AddTenantFilter(query);
    }
    protected override void ApplyOrder(SqlQuery query)
    {
    }
}
