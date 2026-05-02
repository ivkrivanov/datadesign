namespace Company.Company.Lookups
{
    //using Company.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Abstractions;
    [LookupScript("Company.Person")]
    public class PersonLookup:MultiTenantRowLookupScript<PersonRow>
    {
        public PersonLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
            : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = PersonRow.Fields.BusinessEntityId.PropertyName;
            TextField = PersonRow.Fields.LastName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PersonRow.Fields;
            query.Distinct(true)
                .Select(fld.BusinessEntityId)
                .Select(fld.FullName);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
