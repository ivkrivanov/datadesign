
namespace Ledger.HR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HR.EmplAddressType")]
    [BasedOnRow(typeof(Entities.EmplAddressTypeRow))]
    public class EmplAddressTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmplAddressTypeId { get; set; }
        [EditLink]
        public String EmplAddressType { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 TenantId { get; set; }
        public Int16 IsActive { get; set; }
    }
}