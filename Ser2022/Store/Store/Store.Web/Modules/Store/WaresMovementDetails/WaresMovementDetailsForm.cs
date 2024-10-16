﻿
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.WaresMovementDetails")]
    [BasedOnRow(typeof(Entities.WaresMovementDetailsRow), CheckNames = true)]
    public class WaresMovementDetailsForm
    {
        [EditLink, Width(200)]
        public Int32 WaresId { get; set; }
        [Width(100)]
        public Decimal SinglePrice { get; set; }
        [Width(100)]
        public Single Quantity { get; set; }
        [Width(100)]
        public Single Discount { get; set; }
    }
}