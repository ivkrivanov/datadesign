using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store;

public partial class WaresOrderDetailEditorAttribute : CustomEditorAttribute
{
    public const string Key = "Company.Store.WaresOrderDetailEditor";

    public WaresOrderDetailEditorAttribute()
        : base(Key)
    {
    }
}