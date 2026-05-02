using Serenity.ComponentModel;

namespace Company.Store;

public partial class NotesEditorAttribute : CustomEditorAttribute
{
    public const string Key = "Company.Store.NotesEditor";

    public NotesEditorAttribute()
        : base(Key)
    {
    }
}