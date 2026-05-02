using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Nord.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Nord.Administration.LanguageRow;


namespace Nord.Administration
{
    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}