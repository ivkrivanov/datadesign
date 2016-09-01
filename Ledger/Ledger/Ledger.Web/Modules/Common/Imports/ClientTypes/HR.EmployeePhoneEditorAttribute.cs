using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Ledger.HR
{
    public partial class EmployeePhoneEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Ledger.HR.EmployeePhoneEditor";

        public EmployeePhoneEditorAttribute()
            : base(Key)
        {
        }
    }
}

