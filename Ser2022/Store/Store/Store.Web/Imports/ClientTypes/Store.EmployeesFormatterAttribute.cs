﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Store.Store
{
    public partial class EmployeesFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Store.Store.EmployeesFormatter";

        public EmployeesFormatterAttribute()
            : base(Key)
        {
        }

        public string GenderProperty
        {
            get { return GetOption<string>("genderProperty"); }
            set { SetOption("genderProperty", value); }
        }
    }
}
