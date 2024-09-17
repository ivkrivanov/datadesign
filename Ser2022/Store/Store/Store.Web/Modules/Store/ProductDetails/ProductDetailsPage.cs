﻿
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.ProductDetailsRow))]
    public class ProductDetailsController : Controller
    {
        [Route("Store/ProductDetails")]
        public ActionResult Index()
        {
            return View("~/Areas/Store/ProductDetails/ProductDetailsIndex.cshtml");
        }
    }
}