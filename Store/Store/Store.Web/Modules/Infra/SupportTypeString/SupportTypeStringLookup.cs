
namespace Store.Infra.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serenity.Data;

    [LookupScript("Infra.SupportTypeString")]
    public class SupportTypeStringLookup : MultiTenantRowLookupScript<SupportTypeStringRow>
    {
        public SupportTypeStringLookup()
        {
            IdField = "EnumLocaleId";
            TextField = "DisplayName";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SupportTypeStringRow.Fields;

            query.Distinct(true)
                .Select(fld.DisplayName)
                .Where(
                    new Criteria(fld.DisplayName) != "" &
                    new Criteria(fld.DisplayName).IsNotNull() &
                    new Criteria(fld.LanguageId) == 12
                    ); 
            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }

    }
}