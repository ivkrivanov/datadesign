using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace AdvSerene.BasicSamples.Pages
{
    [PageAuthorize, Route("BasicSamples/[action]")]
    public partial class BasicSamplesController : Controller
    {
    }
}
