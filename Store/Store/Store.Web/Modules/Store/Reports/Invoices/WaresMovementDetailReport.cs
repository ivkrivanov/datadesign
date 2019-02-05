
namespace Store.Store
{
    using global::Store.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;


    [Report("Store.WaresMovementDetails")]
    [ReportDesign(MVC.Views.Store.Reports.Invoices.WaresMovementDetailReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class WaresMovementDetailReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 WaresMoveID { get; set; }

        public object GetData()
        {
            var data = new WaresMovementDetailReportData();

            using (var connection = SqlConnections.NewFor<WaresMovementRow>())
            {
                var wm = WaresMovementRow.Fields;
                data.WaresMovement = connection.TryById<WaresMovementRow>(this.WaresMoveID, q => q
                    .SelectTableFields()
                    .Select(wm.EmployeeFullName)
                    .Select(wm.OperationTypeOperation)
                    .Select(wm.ShopShopName)) ?? new WaresMovementRow();

                var wmd = WaresMovementDetailsRow.Fields;
                data.Details = connection.List<WaresMovementDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(wmd.WaresName)
                    .Select(wmd.WaresMeasureName)
                    .Select(wmd.LineTotal)
                    .Where(wmd.WaresMoveID == this.WaresMoveID));

                var c = CounterpartyRow.Fields;
                data.Counterparty = connection.TryFirst<CounterpartyRow>(c.CounterpartyID == data.WaresMovement.CounterpartyID)
                    ?? new CounterpartyRow();

                var s = ShopsRow.Fields;
                data.Shop = connection.TryFirst<ShopsRow>(s.ShopID == data.WaresMovement.ShopID)
                    ?? new ShopsRow();

                var o = OperationTypeRow.Fields;
                data.Operation = connection.TryFirst<OperationTypeRow>(o.OperationTypeID == (Int32)data.WaresMovement.OperationTypeID)
                    ?? new OperationTypeRow();

            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            options.MarginsAll = "2cm";
            options.PageSize = "A4";
        }
    }

    public class WaresMovementDetailReportData
    {
        public WaresMovementRow WaresMovement { get; set; }
        public List<WaresMovementDetailsRow> Details { get; set; }
        public CounterpartyRow Counterparty { get; set; }
        public ShopsRow Shop { get; set; }
        public OperationTypeRow Operation { get; set;}
        //public MeasureRow Measure { get; set; }
    }
}