using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Ledger.Infra
{
    public partial class AddressesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Ledger.Infra.AddressesEditor";

        public AddressesEditorAttribute()
            : base(Key)
        {
        }
    }
}

