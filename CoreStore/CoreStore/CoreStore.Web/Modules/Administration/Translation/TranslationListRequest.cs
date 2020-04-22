using Serenity.Services;

namespace CoreStore.Administration
{
    public class TranslationListRequest : ListRequest
    {
        public string SourceLanguageID { get; set; }
        public string TargetLanguageID { get; set; }
    }
}