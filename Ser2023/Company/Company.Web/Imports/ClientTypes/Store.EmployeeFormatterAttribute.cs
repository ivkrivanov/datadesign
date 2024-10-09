using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store;

public partial class EmployeeFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "Company.Store.EmployeeFormatter";

    public EmployeeFormatterAttribute()
        : base(Key)
    {
    }
}