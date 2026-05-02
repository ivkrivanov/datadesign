using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company;

public partial class CounterpartiesEditorAttribute : LookupEditorBaseAttribute
{
    public const string Key = "/Modules/Store/Counterparties/CounterpartiesEditor:CounterpartiesEditor";

    public CounterpartiesEditorAttribute()
        : base(Key)
    {
    }
}