
namespace Store.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.Support")]
    [BasedOnRow(typeof(Entities.SupportRow))]
    public class SupportForm
    {
        public Guid SupportGuid { get; set; }
        public Int32 SupportTypeId { get; set; }
        public String SupportCode { get; set; }
        public String SupportName { get; set; }
        public String SupportDescription { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 TenantId { get; set; }
        public Int16 IsActive { get; set; }
    }
}