
namespace Store.Store
{
    using global::Store.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Store.ProductMovementDetails")]
    [ReportDesign(MVC.Views.BasicReports.Invoices.ProductMovementDetailReport)]
    [RequiredPermission(StorePermissionKeys.General)]
    public class ProductMovementDetailReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 ProductMoveID { get; set; }

        public object GetData()
        {
            var data = new ProductMovementDetailReportData();

            using (var connection = SqlConnections.NewFor<ProductMovementRow>())
            {
                var pm = ProductMovementRow.Fields;
                data.ProductMovement = connection.TryById<ProductMovementRow>(this.ProductMoveID, q => q
                    .SelectTableFields()
                    .Select(pm.EmployeeFullName)) ?? new ProductMovementRow();

                var pmd = ProductMovementDetailsRow.Fields;
                data.Details = connection.List<ProductMovementDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(pmd.ProductName)
                    .Select(pmd.LineTotal)
                    .Where(pmd.ProductMoveID == this.ProductMoveID));

                var c = CounterpartyRow.Fields;
                data.Counterparty = connection.TryFirst<CounterpartyRow>(c.CounterpartyID == data.ProductMovement.CounterpartyID)
                    ?? new CounterpartyRow();

                var s = ShopsRow.Fields;
                data.Shop = connection.TryFirst<ShopsRow>(s.ShopID == data.ProductMovement.ShopID)
                    ?? new ShopsRow();

                var o = OperationTypeRow.Fields;
                data.Operation = connection.TryFirst<OperationTypeRow>(o.OperationTypeID == (Int32)data.ProductMovement.OperationTypeID)
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

    public class ProductMovementDetailReportData
    {
        public ProductMovementRow ProductMovement { get; set; }
        public List<ProductMovementDetailsRow> Details { get; set; }
        public CounterpartyRow Counterparty { get; set; }
        public ShopsRow Shop { get; set; }
        public OperationTypeRow Operation { get; set; }
    }
}