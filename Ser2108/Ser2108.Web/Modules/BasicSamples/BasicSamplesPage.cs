using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Ser2108.BasicSamples.Pages
{
    [PageAuthorize, Route("BasicSamples/[action]")]
    public partial class BasicSamplesController : Controller
    {
    }
}
