
namespace Ledger.HR.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("HR.EmployeeAddress")]
    public class EmployeeAddressLookup : MultiTenantRowLookupScript<EmployeeAddressRow>
    {
    }
}