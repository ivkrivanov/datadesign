﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CoreStore.Store
{
    public partial class WaresMovementDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CoreStore.Store.WaresMovementDetailsEditor";

        public WaresMovementDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
