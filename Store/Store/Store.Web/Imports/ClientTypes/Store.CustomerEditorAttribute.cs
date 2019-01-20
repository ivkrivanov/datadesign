using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Store.Store
{
    public partial class CustomerEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "Store.Store.CustomerEditor";

        public CustomerEditorAttribute()
            : base(Key)
        {
        }
    }
}

