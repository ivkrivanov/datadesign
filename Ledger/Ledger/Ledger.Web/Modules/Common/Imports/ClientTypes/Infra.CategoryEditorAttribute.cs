using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Ledger.Infra
{
    public partial class CategoryEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Ledger.Infra.CategoryEditor";

        public CategoryEditorAttribute()
            : base(Key)
        {
        }
    }
}

