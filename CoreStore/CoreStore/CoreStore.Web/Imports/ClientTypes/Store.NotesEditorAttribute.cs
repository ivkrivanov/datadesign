﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CoreStore.Store
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CoreStore.Store.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}
