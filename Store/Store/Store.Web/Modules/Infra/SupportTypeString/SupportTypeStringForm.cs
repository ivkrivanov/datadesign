
namespace Store.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.SupportTypeString")]
    [BasedOnRow(typeof(Entities.SupportTypeStringRow))]
    public class SupportTypeStringForm
    {
        public Int32 EnumValue { get; set; }
        public String DisplayName { get; set; }
        public Int32 LanguageId { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 TenantId { get; set; }
        public Int16 IsActive { get; set; }
    }
}