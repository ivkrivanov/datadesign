using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Ledger.HR
{
    public partial class EmployeeEmailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Ledger.HR.EmployeeEmailEditor";

        public EmployeeEmailEditorAttribute()
            : base(Key)
        {
        }
    }
}

