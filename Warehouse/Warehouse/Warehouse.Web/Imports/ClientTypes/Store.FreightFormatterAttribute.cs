using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Warehouse.Store
{
    public partial class FreightFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Warehouse.Store.FreightFormatter";

        public FreightFormatterAttribute()
            : base(Key)
        {
        }
    }
}

