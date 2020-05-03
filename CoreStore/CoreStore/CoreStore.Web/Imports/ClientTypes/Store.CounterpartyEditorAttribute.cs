using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CoreStore.Store
{
    public partial class CounterpartyEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "CoreStore.Store.CounterpartyEditor";

        public CounterpartyEditorAttribute()
            : base(Key)
        {
        }
    }
}
