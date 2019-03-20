
namespace Store.Store
{
    using global::Store.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Drawing;

    [Report("Store.StoreMove")]
    [ReportDesign(MVC.Views.Store.Reports.Warehause.StoreMoveReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class StoreMoveReport : IReport, ICustomizeHtmlToPdf
    {
        [DisplayName("Start Date")]
        public DateTime? StartDate { get; set; }

        [DisplayName("End Date")]
        public DateTime? EndDate { get; set; }

        public Object GetData()
        {
            using (var connection = SqlConnections.NewFor<StoreMoveRow>())
            {
                return connection.Query<Item>("StoreMove",
                    param: new
                    {
                        startDate = StartDate,
                        endDate = EndDate
                    },
                    commandType: System.Data.CommandType.StoredProcedure);
             }
        }

        public List<ReportColumn> GetColumnList()
        {
            return ReportColumnConverter.ObjectTypeToList(typeof(Item));
        }

        [BasedOnRow(typeof(StoreMoveRow), CheckNames = true)]
        public class Item
        {
            public int? WaresID { get; set; }
            public int? ShopID { get; set; }
            public string WaresCode { get; set; }

        }

        public void Customize(IHtmlToPdfOptions options)
        {
            options.MarginsAll = "2cm";
            options.PageSize = "A4";
        }
    }

    public class StoreMoveReportData
    {
        public StoreMoveRow StoreMove { get; set; }
    }
}