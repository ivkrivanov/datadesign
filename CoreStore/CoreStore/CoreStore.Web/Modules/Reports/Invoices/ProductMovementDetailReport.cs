
namespace CoreStore.Store
{
    using CoreStore.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Store.ProductMovementDetails")]
    [ReportDesign(MVC.Views.Reports.Invoices.ProductMovementDetailReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class ProductMovementDetailReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 ProductMoveId { get; set; }
        public object GetData()
        {
            var data = new ProductMovementDetailReportData();

            using (var connection = SqlConnections.NewFor<ProductMovementRow>())
            {
                var pm = ProductMovementRow.Fields;
                data.ProductMovement = connection.TryById<ProductMovementRow>(this.ProductMoveId, q => q
                    .SelectTableFields()
                    .Select(pm.EmployeeFullName)) ?? new ProductMovementRow();

                var pmd = ProductMovementDetailsRow.Fields;
                data.Details = connection.List<ProductMovementDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(pmd.ProductName)
                    .Select(pmd.LineTotal)
                    .Where(pmd.ProductMoveId == this.ProductMoveId));

                var c = CounterpartiesRow.Fields;
                data.Counterparty = connection.TryFirst<CounterpartiesRow>(c.CounterpartyId == data.ProductMovement.CounterpartyId)
                    ?? new CounterpartiesRow();

                var s = ShopsRow.Fields;
                data.Shop = connection.TryFirst<ShopsRow>(s.ShopId == data.ProductMovement.ShopId)
                    ?? new ShopsRow();

                var o = OperationTypeRow.Fields;
                data.Operation = connection.TryFirst<OperationTypeRow>(o.OperationTypeId == (Int32)data.ProductMovement.OperationTypeId)
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
        public CounterpartiesRow Counterparty { get; set; }
        public ShopsRow Shop { get; set; }
        public OperationTypeRow Operation { get; set; }
    }
}
