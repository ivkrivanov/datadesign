using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Ledger.Administration
{
    public partial class TenantEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Ledger.Administration.TenantEditor";

        public TenantEditorAttribute()
            : base(Key)
        {
        }
    }
}

