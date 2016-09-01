using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Ledger.HR
{
    public partial class EmployeeAddressEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Ledger.HR.EmployeeAddressEditor";

        public EmployeeAddressEditorAttribute()
            : base(Key)
        {
        }
    }
}

