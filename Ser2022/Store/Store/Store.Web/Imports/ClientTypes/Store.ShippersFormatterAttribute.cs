using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Store.Store
{
    public partial class ShippersFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Store.Store.ShippersFormatter";

        public ShippersFormatterAttribute()
            : base(Key)
        {
        }
    }
}
