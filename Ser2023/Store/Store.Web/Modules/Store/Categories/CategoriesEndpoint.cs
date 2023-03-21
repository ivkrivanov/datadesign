using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using Serenity;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using MyRow = Store.Store.Entities.CategoriesRow;

namespace Store.Store.Endpoints
{
    [Route("Services/Store/Categories/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CategoriesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] ICategoriesSaveHandler handler)
        {
            return handler.Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] ICategoriesSaveHandler handler)
        {
            return handler.Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
            [FromServices] ICategoriesDeleteHandler handler)
        {
            return handler.Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
            [FromServices] ICategoriesRetrieveHandler handler)
        {
            return handler.Retrieve(connection, request);
        }

        [HttpPost, AuthorizeList(typeof(MyRow))]
        public ListResponse<MyRow> List(IDbConnection connection, CategoriesListRequest request,
            [FromServices] ICategoriesListHandler handler)
        {
            return handler.List(connection, request);
        }

        [HttpPost, AuthorizeList(typeof(MyRow))]
        public FileContentResult ListExcel(IDbConnection connection, CategoriesListRequest request,
            [FromServices] ICategoriesListHandler handler,
            [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request, handler).Entities;
            var bytes = exporter.Export(data, typeof(Columns.CategoriesColumns), request.ExportColumns);
            return ExcelContentResult.Create(bytes, "CategoriesList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
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

            var c = MyRow.Fields;
            var t = Entities.CategoriesTypeRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            var worksheet = ep.Workbook.Worksheets[0];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var categoryName = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    if (categoryName.IsTrimmedEmpty())
                        continue;

                    var category = uow.Connection.TryFirst<MyRow>(q => q
                        .Select(c.CategoryId)
                        .Where(c.CategoryName == categoryName));

                    if (category == null)
                        category = new MyRow
                        {
                            CategoryName = categoryName
                        };
                    else
                    {
                        //category.TrackWithChecks = false;
                    }

                    #region Type

                    var typeName = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(typeName))
                    {
                        var type = uow.Connection.TryFirst<Entities.CategoriesTypeRow>(q => q
                            .Select(t.CategoryTypeId)
                            .Where(t.CategoryType == typeName));

                        if (type == null)
                        {
                            response.ErrorList.Add("Error On Row" + row + ": Category with name '" +
                                typeName + "' is not found!");
                            continue;
                        }

                        category.CategoryTypeId = Convert.ToInt16(type.CategoryTypeId.Value);
                    }
                    else
                    {
                        category.CategoryTypeId = null;
                    }

                    #endregion Type

                    category.CategoryCode = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    category.Description = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");

                    if (category.CategoryId == null)
                    {
                        new CategoriesSaveHandler(Context).Create(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = category
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new CategoriesSaveHandler(Context).Update(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = category,
                            EntityId = category.CategoryId.Value
                        });

                        response.Updated++;
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