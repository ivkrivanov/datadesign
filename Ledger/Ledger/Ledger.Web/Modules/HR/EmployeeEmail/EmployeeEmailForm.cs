
namespace Ledger.HR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("HR.EmployeeEmail")]
    [BasedOnRow(typeof(Entities.EmployeeEmailRow))]
    public class EmployeeEmailForm
    {
        public Int32 EmployeeId { get; set; }

        //[LookupEditor("Infra.Email")]
        public Int32 EmailId { get; set; }
        [EditLink, Width(150)]
        public String EmailType { get; set; }

    }
}