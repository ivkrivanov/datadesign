using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store;

public partial class CounterpartiesEditorAttribute : LookupEditorBaseAttribute
{
    public const string Key = "Company.Store.CounterpartyEditor";

    public CounterpartiesEditorAttribute()
        : base(Key)
    {
    }
}