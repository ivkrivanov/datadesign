using Serenity.ComponentModel;

namespace Company;

public partial class NotesEditorAttribute : CustomEditorAttribute
{
    public const string Key = "Company.Store.NotesEditor";

    public NotesEditorAttribute()
        : base(Key)
    {
    }
}

