
namespace Ledger.HR.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("HR.EmplAddressType")]
    [BasedOnRow(typeof(Entities.EmplAddressTypeRow))]
    public class EmplAddressTypeForm
    {
        public String EmplAddressType { get; set; }
        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        //public DateTime UpdateDate { get; set; }
        //public Int32 TenantId { get; set; }
        //public Int16 IsActive { get; set; }
    }
}