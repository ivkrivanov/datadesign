﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AdvSerene.Northwind
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AdvSerene.Northwind.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}
