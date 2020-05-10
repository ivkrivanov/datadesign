using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CoreStore.Store
{
    public partial class ProductMovementDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CoreStore.Store.ProductMovementDetailsEditor";

        public ProductMovementDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
