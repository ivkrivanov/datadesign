﻿
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Store.Counterparty")]
    [BasedOnRow(typeof(Entities.CounterpartyRow), CheckNames = true)]
    public class CounterpartyForm
    {
        [Category("General")]
        public String CounterpartyID { get; set; }
        public String CompanyName { get; set; }
        [Category("Contact")]
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        public List<Int32> Representatives { get; set; }

        [Category("Address")]
        public String Address { get; set; }
        [HalfWidth]
        public String Country { get; set; }
        [HalfWidth]
        public String City { get; set; }
        [HalfWidth]
        public String Region { get; set; }
        [HalfWidth]
        public String PostalCode { get; set; }
        [HalfWidth, PhoneEditor]
        public String Phone { get; set; }
        public List<object> NoteList { get; set; }

        // note: these fields are stored in an extension table (CounterpartyDetails)
        [Category("Details")]
        [HalfWidth]
        public DateTime? LastContactDate { get; set; }
        [HalfWidth]
        public Int32? LastContactedBy { get; set; }
        [HalfWidth]
        public String Email { get; set; }
        [HalfWidth]
        public Boolean? SendBulletin { get; set; }
    }
}