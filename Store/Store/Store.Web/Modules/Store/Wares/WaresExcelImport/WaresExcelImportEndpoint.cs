
namespace Store.Store.Endpoints
{
    using Store.Entities;
    using Store.Repositories;
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using MyRow = Store.Entities.WaresRow;

    [RoutePrefix("Services/Store/Wares/WaresExcelImport"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize]
    public class WaresExcelImportController : ServiceEndpoint
    {
        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var w = WaresRow.Fields;
            var c = CategoryRow.Fields;
            var m = MeasureRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var waresName = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");
                    if (waresName.IsTrimmedEmpty())
                        continue;

                    var wares = uow.Connection.TryFirst<WaresRow>(q => q
                        .Select(w.WaresID)
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

                    var categoryName = Convert.ToString(worksheet.Cells[row, 6].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(categoryName))
                    {
                        var category = uow.Connection.TryFirst<CategoryRow>(q => q
                            .Select(c.CategoryID)
                            .Where(c.CategoryName == categoryName));

                        if (category == null)
                        {
                            response.ErrorList.Add("Error On Row" + row + ": Category with name '" +
                                categoryName + "' is not found!");
                            continue;
                        }

                        wares.CategoryID = category.CategoryID.Value;
                    }
                    else
                        wares.CategoryID = null;

                    var measureName = Convert.ToString(worksheet.Cells[row, 7].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(measureName))
                    {
                        var measure = uow.Connection.TryFirst<MeasureRow>(q => q
                            .Select(m.MeasureID)
                            .Where(m.MeasureName == measureName));

                        if (measure == null)
                        {
                            response.ErrorList.Add("Error On Row" + row + ": Measure with name '" +
                                measureName + "' is not found!");
                            continue;
                        }

                        wares.MeasureID = measure.MeasureID.Value;
                    }
                    else
                        wares.MeasureID = null;

                    wares.WaresCode = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    wares.WaresBarcode = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    wares.WaresLabel = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");


                    wares.QuantityPerUnit = Convert.ToInt32(worksheet.Cells[row, 8].Value ?? "");
                    wares.UnitPrice = Convert.ToDecimal(worksheet.Cells[row, 9].Value ?? 0);
                    wares.UnitsInStock = Convert.ToDecimal(worksheet.Cells[row, 10].Value ?? 0);
                    wares.UnitsOnOrder = Convert.ToDecimal(worksheet.Cells[row, 11].Value ?? 0);

                    if (wares.WaresID == null)
                    {
                        new WaresRepository().Create(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = wares
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new WaresRepository().Update(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = wares,
                            EntityId = wares.WaresID.Value
                        });

                        response.Updated = response.Updated + 1;
                    }
                }
                catch( Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }
    }
}