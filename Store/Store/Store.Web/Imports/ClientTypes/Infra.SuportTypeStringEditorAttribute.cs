using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Store.Infra
{
    public partial class SuportTypeStringEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Store.Infra.SuportTypeStringEditor";

        public SuportTypeStringEditorAttribute()
            : base(Key)
        {
        }
    }
}

