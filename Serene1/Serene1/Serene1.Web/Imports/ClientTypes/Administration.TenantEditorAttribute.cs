using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene1.Administration
{
    public partial class TenantEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene1.Administration.TenantEditor";

        public TenantEditorAttribute()
            : base(Key)
        {
        }
    }
}

