
namespace CoreStore.Store.Endpoints
{
    using CoreStore.Store.Entities;

    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Reporting;
    using Serenity.Web;
    using System.Data;
    using System;
    using System.IO;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.CategoriesRepository;
    using MyRow = Entities.CategoriesRow;
    using CoreStore.Store.Repositories;

    [Route("Services/Store/Categories/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CategoriesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveLocalizationResponse<MyRow> RetrieveLocalization(IDbConnection connection, RetrieveLocalizationRequest request)
        {
            return new MyRepository().RetrieveLocalization(connection, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, CaregoriesListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, CaregoriesListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.CategoriesColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "CategoryList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "Filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var c = CategoriesRow.Fields;
            var t = CategoriesTypeRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var categoryName = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    if (categoryName.IsTrimmedEmpty())
                        continue;

                    var category = uow.Connection.TryFirst<CategoriesRow>(q => q
                        .Select(c.CategoryId)
                        .Where(c.CategoryName == categoryName));

                    if (category == null)
                        category = new CategoriesRow
                        {
                            CategoryName = categoryName
                        };
                    else
                    {
                        category.TrackWithChecks = false;
                    }

                    #region Type

                    var typeName = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(typeName))
                    {
                        var type = uow.Connection.TryFirst<CategoriesTypeRow>(q => q
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
                        new CategoriesRepository().Create(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = category
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new CategoriesRepository().Update(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = category,
                            EntityId = category.CategoryId.Value
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
