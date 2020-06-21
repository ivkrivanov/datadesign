
namespace CoreStore.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Store.WaresMovement")]
    [BasedOnRow(typeof(Entities.WaresMovementRow), CheckNames = true)]
    public class WaresMovementForm
    {
        [Tab("General")]
        [Category("Order")]
        [HalfWidth]
        public WaresMovementOperations? OperationTypeId { get; set; }
        [DefaultValue("now")]
        [HalfWidth]
        public DateTime OrderDate { get; set; }
        [HalfWidth]
        public String ShopId { get; set; }
        [HalfWidth]
        public String CounterpartyId { get; set; }
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [HalfWidth]
        public DateTime RequiredDate { get; set; }
        [HalfWidth]
        public Int32 ShipperId { get; set; }
        [HalfWidth]
        public DateTime ShippedDate { get; set; }
        [OneThirdWidth]
        public Int32 DocumentTypeId { get; set; }
        [OneThirdWidth]
        public String DocumentNumber { get; set; }
        [OneThirdWidth]
        public DateTime DocumentDate { get; set; }
        [OneThirdWidth]
        public Decimal Value { get; set; }
        [OneThirdWidth]
        public Decimal VAT { get; set; }
        [OneThirdWidth]
        public Decimal Total { get; set; }

        [Category("WaresMovementDetailsRow")]
        [WaresMovementDetailsEditor]
        public List<Entities.WaresMovementDetailsRow> DetailList { get; set; }
    }
}