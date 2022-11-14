
namespace Store.Store.Endpoints
{
    using global::Store.Reporting;
    using global::Store.Store.Entities;
    using global::Store.Store.Repositories;
    using Microsoft.AspNetCore.Mvc;
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Extensions;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRepository = Repositories.WaresRepository;
    using MyRow = Entities.WaresRow;

    [Route("Services/Store/Wares/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class WaresController : ServiceEndpoint
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

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, WaresListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.WaresColumns), 
                HttpContext.RequestServices);
            var bytes = ReportRepository.Render(report);
            return ExcelContentResult.Create(bytes, "WaresList_" +
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

            var w = WaresRow.Fields;
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
                    var waresName = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    if (waresName.IsTrimmedEmpty())
                        continue;

                    var wares = uow.Connection.TryFirst<WaresRow>(q => q
                        .Select(w.WaresId)
                        .Where(w.WaresName == waresName));

                    if (wares == null)
                        wares = new WaresRow
                        {
                            WaresName = waresName
                        };
                    else
                    {
                        wares.TrackWithChecks = false;
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

                        wares.CategoryId = category.CategoryId.Value;
                    }
                    else
                        wares.CategoryId = null;

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

                        wares.MeasureId = measure.MeasureId.Value;
                    }
                    else
                        wares.MeasureId = null;

                    #endregion Measure

                    #region Counterparty

                    var counterpartyName = Convert.ToString(worksheet.Cells[row, 13].Value ?? 0);
                    if (!string.IsNullOrWhiteSpace(counterpartyName))
                    {
                        var counterparty = uow.Connection.TryFirst<CounterpartiesRow>(q => q
                            .Select(cp.CounterpartyId)
                            .Where(cp.CompanyName == counterpartyName));

                        if (counterparty == null)
                        {
                            response.ErrorList.Add("Error On Row" + row + ": Counterparty with name '" +
                                counterpartyName + "' is not found!");
                            continue;
                        }

                        wares.CounterpartyId = counterparty.CounterpartyId.ToString();
                    }
                    else
                    {
                        wares.CounterpartyId = null;
                    }

                    #endregion Counterparty

                    wares.WaresCode = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    wares.WaresBarcode = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    wares.WaresLabel = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");
                    wares.Discontinued = Convert.ToBoolean(worksheet.Cells[row, 5].Value ?? "");

                    wares.QuantityPerUnit = Convert.ToInt32(worksheet.Cells[row, 8].Value ?? "");
                    wares.UnitPrice = Convert.ToDecimal(worksheet.Cells[row, 9].Value ?? 0);
                    wares.UnitsInStock = Convert.ToDecimal(worksheet.Cells[row, 10].Value ?? 0);
                    wares.UnitsOnOrder = Convert.ToDecimal(worksheet.Cells[row, 11].Value ?? 0);

                    wares.CounterpartyId = Convert.ToString(worksheet.Cells[row, 12].Value ?? 0);

                    if (wares.WaresId == null)
                    {
                        new WaresRepository(Context).Create(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = wares
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new WaresRepository(Context).Update(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = wares,
                            EntityId = wares.WaresId.Value
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