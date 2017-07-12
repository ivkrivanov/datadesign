namespace Store.Infra.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serenity.Data;

    [LookupScript("Infra.SuportType")]
    public class SupportTypeLookup : MultiTenantRowLookupScript<SupportTypeRow>
    {
        public SupportTypeLookup()
        {

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}