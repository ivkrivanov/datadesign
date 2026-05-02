namespace Company.Company;

[LookupScript("Company.Person")]
public class PersonLookup:MultiTenantRowLookupScript<PersonRow>
{
    public PersonLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
        : base(sqlConnections, twoLevelCache, userAccessor)
    {
        IdField = TextField = PersonRow.Fields.BusinessEntityId.PropertyName;
        //TextField = PersonRow.Fields.LastName.PropertyName;
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        var fld = PersonRow.Fields;
        query.Distinct(true)
            .Select(fld.BusinessEntityId)
            .Select(fld.FullName)
            .Where(
                fld.FullName != "" &
                fld.FullName.IsNotNull());

        AddTenantFilter(query);
    }

    protected override void ApplyOrder(SqlQuery query)
    {
    }
}

