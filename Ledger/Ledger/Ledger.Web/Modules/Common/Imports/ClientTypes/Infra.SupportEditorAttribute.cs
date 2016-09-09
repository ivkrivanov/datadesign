using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Ledger.Infra
{
    public partial class SupportEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Ledger.Infra.SupportEditor";

        public SupportEditorAttribute()
            : base(Key)
        {
        }
    }
}

