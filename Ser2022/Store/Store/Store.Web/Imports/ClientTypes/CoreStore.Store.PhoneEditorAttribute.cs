using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CoreStore.Store
{
    public partial class PhoneEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CoreStore.Store.PhoneEditor";

        public PhoneEditorAttribute()
            : base(Key)
        {
        }

        public bool Multiple
        {
            get { return GetOption<bool>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}
