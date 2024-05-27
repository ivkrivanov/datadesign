using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company;

public partial class EmployeeFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "Company.EmployeeFormatter";

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