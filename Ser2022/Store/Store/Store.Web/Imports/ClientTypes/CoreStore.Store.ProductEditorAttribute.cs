using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CoreStore.Store
{
    public partial class ProductEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "CoreStore.Store.ProductEditor";

        public ProductEditorAttribute()
            : base(Key)
        {
        }
    }
}
