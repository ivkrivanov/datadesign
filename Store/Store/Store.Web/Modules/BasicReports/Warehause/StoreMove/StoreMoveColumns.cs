
namespace Store.BasicReports.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("BasicReports.StoreMove")]
    [BasedOnRow(typeof(Store.Entities.StoreMoveRow), CheckNames = true)]
    public class StoreMoveColumns
    {
        public Int32 ShopID { get; set; }
        public Int32 WaresID { get; set; }
        [Width(70), SortOrder(1)]
        public String WaresCode { get; set; }
        [Width(100)]
        public String WaresName { get; set; }

        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal InitialQuantity
        {
            get
            {
                return (RestQuantity - IncomeQuantity + ExpenceQuantity);
            }
            set { }
        }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal InitialSinglePrice
        {
            get
            {
                if (InitialQuantity != 0)
                    return InitialValue / InitialQuantity;
                else
                    return 0;
            }
            set { }
        }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal InitialValue
        {
            get
            {
                return (RestValue - IncomeValue + ExpenceValue);
            }
            set { }
        }

        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal IncomeQuantity { get; set; }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal IncomeSinglePrice
        {
            get
            {
                if (IncomeQuantity != 0)
                    return IncomeValue / IncomeQuantity;
                else
                {
                    return 0;
                }
            }
            set { }
        }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal IncomeValue { get; set; }

        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal ExpenceQuantity { get; set; }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal ExpenceSinglePrice
        {
            get
            {
                if (ExpenceQuantity != 0)
                    return ExpenceValue / ExpenceQuantity;
                else
                {
                    return 0;
                }
            }
            set { }
        }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal ExpenceValue { get; set; }

        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal RestQuantity { get; set; }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal RestSinglePrice
        {
            get
            {
                if (RestQuantity != 0)
                    return RestValue / RestQuantity;
                else
                {
                    return 0;
                }
            }
            set { }
        }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal RestValue { get; set; }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal ReCost { get; set; }
        [Width(70)]
        public Boolean Mistake { get; set; }
    }
}