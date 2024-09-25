using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store;

public partial class ShipperFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "Company.Store.ShipperFormatter";

    public ShipperFormatterAttribute()
        : base(Key)
    {
    }
}