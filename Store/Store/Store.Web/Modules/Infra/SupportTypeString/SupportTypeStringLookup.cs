using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Store.Modules.Infra.SupportTypeString
{
    using Store.Infra.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serenity.Data;
    public class SupportTypeStringLookup : MultiTenantRowLookupScript<SupportTypeStringRow>
    {
        public SupportTypeStringLookup()
        {

        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}