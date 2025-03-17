using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company;

public partial class NotesEditorAttribute : CustomEditorAttribute
{
    public const string Key = "Company.NotesEditor";

    public NotesEditorAttribute()
        : base(Key)
    {
    }
}