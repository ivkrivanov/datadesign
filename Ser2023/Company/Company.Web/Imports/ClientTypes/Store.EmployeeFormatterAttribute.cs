using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Store;

public partial class EmployeeFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "Store.EmployeeFormatter";

    public EmployeeFormatterAttribute()
        : base(Key)
    {
    }

    public string GenderProperty
    {
        get { return GetOption<string>("genderProperty"); }
        set { SetOption("genderProperty", value); }
    }
}