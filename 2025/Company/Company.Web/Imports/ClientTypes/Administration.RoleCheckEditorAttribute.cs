using System;
using System.Collections.Generic;
using System.ComponentModel;
using Serenity;
using Serenity.ComponentModel;

namespace Company.Administration;
public partial class RoleCheckEditorAttribute : CustomEditorAttribute
{
    public const string Key = "Company.Administration.RoleCheckEditor";

    public RoleCheckEditorAttribute()
        : base(Key)
    {
    }
}