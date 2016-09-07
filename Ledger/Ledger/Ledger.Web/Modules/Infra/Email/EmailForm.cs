
namespace Ledger.Infra.Forms
{
    using System;
    using Serenity.ComponentModel;

    [FormScript("Infra.Email")]
    [BasedOnRow(typeof(Entities.EmailRow))]
    public class EmailForm
    {
        public String EmailAddress { get; set; }
    }
}