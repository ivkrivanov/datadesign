﻿
namespace CoreStore.Store.Columns
{
    using Serenity.ComponentModel;
    using Serenity.Reporting;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Counterparties")]
    [BasedOnRow(typeof(Entities.CounterpartiesRow), CheckNames = true)]
    public class CounterpartiesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Width(100), AlignRight]
        public String CounterpartyId { get; set; }
        [EditLink, Width(250)]
        public String CompanyName { get; set; }
        [Width(150)]
        public String ContactName { get; set; }
        [Width(150)]
        public String ContactTitle { get; set; }
        [Width(60)]
        public String Region { get; set; }
        [Width(100)]
        public String PostalCode { get; set; }
        [Width(130), LookupEditor(typeof(Lookups.CounterpartiesLookupCountry)), QuickFilter(CssClass = "hidden-xs")]
        public String Country { get; set; }
        [Width(120), LookupEditor(typeof(Lookups.CounterpartiesLookupCity))]
        [QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "Country")]
        public String City { get; set; }
        [Width(120)]
        public String Phone { get; set; }
        [Width(250), EmployeesListFormatter, CellDecorator(typeof(EmployeesListDecorator))]
        public String Representatives { get; set; }
    }
}