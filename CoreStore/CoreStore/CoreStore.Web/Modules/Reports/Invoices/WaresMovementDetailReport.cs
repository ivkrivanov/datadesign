
namespace CoreStore.Store
{
    using CoreStore.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Store.WaresMovementDetails")]
    [ReportDesign(MVC.Views.Reports.Invoices.WaresMovementDetailReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class WaresMovementDetailReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 WaresMoveId { get; set; }

        public object GetData()
        {
            var data = new WaresMovementDetailReportData();

            using (var connection = SqlConnections.NewFor<WaresMovementRow>())
            {
                var wm = WaresMovementRow.Fields;
                data.WaresMovement = connection.TryById<WaresMovementRow>(this.WaresMoveId, q => q
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
                    .Select(wmd.LineVAT)
                    .Select(wmd.LineValue)
                    .Where(wmd.WaresMoveId == this.WaresMoveId));

                var c = CounterpartiesRow.Fields;
                data.Counterparty = connection.TryFirst<CounterpartiesRow>(c.CounterpartyId == data.WaresMovement.CounterpartyId)
                    ?? new CounterpartiesRow();

                var s = ShopsRow.Fields;
                data.Shop = connection.TryFirst<ShopsRow>(s.ShopId == data.WaresMovement.ShopId)
                    ?? new ShopsRow();

                var o = OperationTypeRow.Fields;
                data.Operation = connection.TryFirst<OperationTypeRow>(o.OperationTypeId == (Int32)data.WaresMovement.OperationTypeId)
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
        public CounterpartiesRow Counterparty { get; set; }
        public ShopsRow Shop { get; set; }
        public OperationTypeRow Operation { get; set; }
    }
}
