
namespace Ledger.HR.Forms
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [FormScript("HR.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow))]
    public class EmployeeForm
    {
        public String FirstName { get; set; }
        public String MiddleName { get; set; }
        public String SurName { get; set; }
        public Int16 Gender { get; set; }
        public String Egn { get; set; }
        public DateTime HireDate { get; set; }
        public DateTime LengthOfService { get; set; }
        public String Photo { get; set; }
        public Double Salary { get; set; }

        [Category("Address")]
        [EmployeeAddressEditor]
        public List<Entities.EmployeeAddressRow> AddressList { get; set; }

        [Category("Email")]
        [EmployeeEmailEditor]
        public List<Entities.EmployeeEmailRow> EmailList { get; set; }

        [Category("Phone")]
        [EmployeePhoneEditor]
        public List<Entities.EmployeePhoneRow> PhoneList { get; set; }

        public List<object> NotesList { get; set; }
    }
}