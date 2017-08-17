
namespace Store.Infra.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Infra.SupportType")]
    public class SupportTypeLookup:MultiTenantRowLookupScript<Entities.SupportTypeStringRow>
    {
        public SupportTypeLookup()
        {
            IdField = TextField = "SupportType";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SupportTypeStringRow.Fields;
            query.Distinct(true)
                .Select(fld.DisplayName)
                .Where(
                    new Criteria(fld.DisplayName) != "" &
                    new Criteria(fld.DisplayName).IsNotNull());
            AddTenantFilter(query);
        }
    }
}