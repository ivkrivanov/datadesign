using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Warehouse.Store
{
    public partial class ProductDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Warehouse.Store.ProductDetailsEditor";

        public ProductDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

