namespace Ledger.HR.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("HR.Employee")]
    public class EmployeeLookup : MultiTenantRowLookupScript<EmployeeRow>
    {
    }
}