﻿
namespace Ledger.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Northwind.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow))]
    public class CustomerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Width(100)]
        public String CustomerID { get; set; }
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
        [Width(130), LookupEditor(typeof(Scripts.CustomerCountryLookup)), QuickFilter]
        public String Country { get; set; }
        [Width(120), LookupEditor(typeof(Scripts.CustomerCityLookup))]
        [QuickFilter, QuickFilterOption("cascadeFrom", "Country")]
        public String City { get; set; }
        [Width(120)]
        public String Phone { get; set; }
        [Width(120)]
        public String Fax { get; set; }
        [Width(250), EmployeeListFormatter]
        public String Representatives { get; set; }
    }
}