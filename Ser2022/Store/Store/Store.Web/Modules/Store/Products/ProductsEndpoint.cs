
namespace Store.Store.Endpoints
{
    using Entities;
    using Repositories;
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.ProductsRepository;
    using MyRow = Entities.ProductsRow;
    using global::Store.Reporting;

    [Route("Services/Store/Products/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ProductsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
        {
            return new MyRepository(Context).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
        {
            return new MyRepository(Context).Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ProductsListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ProductsListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ProductsColumns), HttpContext.RequestServices);
            var bytes = ReportRepository.Render(report);
            return ExcelContentResult.Create(bytes, "ProductList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request,
            [FromServices] IUploadStorage uploadStorage)
        {
            if (request is null)
                throw new ArgumentNullException(nameof(request));
            if (string.IsNullOrWhiteSpace(request.FileName))
                throw new ArgumentNullException(nameof(request.FileName));

            if (uploadStorage is null)
                throw new ArgumentNullException(nameof(uploadStorage));

            UploadPathHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException(nameof(request.FileName));

            ExcelPackage ep = new ExcelPackage();
            using (var fs = uploadStorage.OpenFile(request.FileName))
                ep.Load(fs);

            var p = ProductsRow.Fields;
            var c = CategoriesRow.Fields;
            var m = MeasuresRow.Fields;
            var cp = CounterpartiesRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var productName = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");
                    if (productName.IsTrimmedEmpty())
                        continue;

                    var product = uow.Connection.TryFirst<ProductsRow>(q => q
                        .Select(p.ProductId)
                        .Where(p.ProductName == productName));

                    if (product == null)
                        product = new ProductsRow
                        {
                            ProductName = productName
                        };
                    else
                    {
                        product.TrackWithChecks = false;
                    }

                    #region Category

                    var categoryName = Convert.ToString(worksheet.Cells[row, 6].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(categoryName))
                    {
                        var category = uow.Connection.TryFirst<CategoriesRow>(q => q
                            .Select(c.CategoryId)
                            .Where(c.CategoryName == categoryName));

                        if (category == null)
                        {
                            response.ErrorList.Add("Error On Row" + row + ": Category with name '" +
                                categoryName + "' is not found!");
                            continue;
                        }

                        product.CategoryId = category.CategoryId.Value;
                    }
                    else
                        product.CategoryId = null;

                    #endregion Category

                    #region Measure

                    var measureName = Convert.ToString(worksheet.Cells[row, 7].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(measureName))
                    {
                        var measure = uow.Connection.TryFirst<MeasuresRow>(q => q
                            .Select(m.MeasureId)
                            .Where(m.MeasureName == measureName));

                        if (measure == null)
                        {
                            response.ErrorList.Add("Error On Row" + row + ": Measure with name '" +
                                measureName + "' is not found!");
                            continue;
                        }

                        product.MeasureId = measure.MeasureId.Value;
                    }
                    else
                        product.MeasureId = null;

                    #endregion Measure

                    #region Counterparty

                    //var counterpartyName = Convert.ToString(worksheet.Cells[row, 13].Value ?? 0);
                    //if (!string.IsNullOrWhiteSpace(counterpartyName))
                    //{
                    //    var counterparty = uow.Connection.TryFirst<CounterpartyRow>(q => q
                    //        .Select(cp.CounterpartyID)
                    //        .Where(cp.CompanyName == counterpartyName));

                    //    if(counterparty == null)
                    //    {
                    //        response.ErrorList.Add("Error On Row" + row + ": Counterparty with name '" +
                    //            counterpartyName + "' is not found!");
                    //        continue;
                    //    }

                    //    product.CounterpartyID = counterparty.CounterpartyID.ToString();
                    //}
                    //else
                    //{
                    //    product.CounterpartyID = null;
                    //}

                    #endregion Counterparty

                    product.ProductCode = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    product.ProductBarcode = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    product.ProductLabel = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    product.Discontinued = Convert.ToBoolean(worksheet.Cells[row, 5].Value ?? "");

                    product.QuantityPerUnit = Convert.ToString(worksheet.Cells[row, 8].Value ?? "");
                    product.UnitPrice = Convert.ToDecimal(worksheet.Cells[row, 9].Value ?? 0);
                    product.UnitsInStock = Convert.ToInt16(worksheet.Cells[row, 10].Value ?? 0);
                    product.UnitsOnOrder = Convert.ToInt16(worksheet.Cells[row, 11].Value ?? 0);

                    product.CounterpartyId = Convert.ToString(worksheet.Cells[row, 13].Value ?? 0);

                    if (product.ProductId == null)
                    {
                        new ProductsRepository(Context).Create(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = product
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new ProductsRepository(Context).Update(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = product,
                            EntityId = product.ProductId.Value
                        });

                        response.Updated = response.Updated + 1;
                    }
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }
    }
}
