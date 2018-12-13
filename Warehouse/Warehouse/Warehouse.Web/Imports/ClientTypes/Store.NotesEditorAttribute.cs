using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Warehouse.Store
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Warehouse.Store.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}

