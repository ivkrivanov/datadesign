﻿
namespace Ledger.Infra.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("Infra.Email")]
    public class EmailLookup : MultiTenantRowLookupScript<EmailRow>
    {
    }
}