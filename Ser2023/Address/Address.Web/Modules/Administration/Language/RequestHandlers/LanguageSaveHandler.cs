
namespace Address.Administration
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<LanguageRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = LanguageRow;

    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}