
namespace Store.Store.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Store]")]
    [DisplayName("Warehouse"), InstanceName("Warehouse")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class WarehouseRow : LoggingRow<WarehouseRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Position"), IdProperty]
        public Int64? Position
        {
            get => Fields.Position[this]; 
            set => Fields.Position[this] = value; 
        }

        [DisplayName("Wares Mode")]
        public Boolean? WaresMode
        {
            get => Fields.WaresMode[this]; 
            set => Fields.WaresMode[this] = value; 
        }

        [DisplayName("Move Id"), Column("MoveID"), NotNull]
        public Int32? MoveId
        {
            get => Fields.MoveId[this]; 
            set => Fields.MoveId[this] = value; 
        }

        [DisplayName("Shop Id"), Column("ShopID"), NotNull]
        public Int32? ShopId
        {
            get => Fields.ShopId[this]; 
            set => Fields.ShopId[this] = value; 
        }

        [DisplayName("Wares Id"), Column("WaresID"), NotNull]
        public Int32? WaresId
        {
            get => Fields.WaresId[this]; 
            set => Fields.WaresId[this] = value; 
        }

        [DisplayName("Key"), Size(15), QuickSearch, NameProperty]
        public String Key
        {
            get => Fields.Key[this]; 
            set => Fields.Key[this] = value; 
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get => Fields.Date[this]; 
            set => Fields.Date[this] = value; 
        }

        [DisplayName("Operation Id"), Column("OperationID"), NotNull]
        public Int32? OperationId
        {
            get => Fields.OperationId[this]; 
            set => Fields.OperationId[this] = value; 
        }

        [DisplayName("Income Quantity"), Size(15), Scale(4)]
        public Decimal? IncomeQuantity
        {
            get => Fields.IncomeQuantity[this]; 
            set => Fields.IncomeQuantity[this] = value; 
        }

        [DisplayName("Income Single Price"), Size(15), Scale(4)]
        public Decimal? IncomeSinglePrice
        {
            get => Fields.IncomeSinglePrice[this]; 
            set => Fields.IncomeSinglePrice[this] = value; 
        }

        [DisplayName("Income Value"), Size(15), Scale(4)]
        public Decimal? IncomeValue
        {
            get => Fields.IncomeValue[this]; 
            set => Fields.IncomeValue[this] = value; 
        }

        [DisplayName("A Income Single Price"), Size(15), Scale(4)]
        public Decimal? AIncomeSinglePrice
        {
            get => Fields.AIncomeSinglePrice[this]; 
            set => Fields.AIncomeSinglePrice[this] = value; 
        }

        [DisplayName("A Income Value"), Size(15), Scale(4)]
        public Decimal? AIncomeValue
        {
            get => Fields.AIncomeValue[this]; 
            set => Fields.AIncomeValue[this] = value; 
        }

        [DisplayName("Expence Quantity"), Size(15), Scale(4)]
        public Decimal? ExpenceQuantity
        {
            get => Fields.ExpenceQuantity[this]; 
            set => Fields.ExpenceQuantity[this] = value; 
        }

        [DisplayName("Expence Single Price"), Size(15), Scale(4)]
        public Decimal? ExpenceSinglePrice
        {
            get => Fields.ExpenceSinglePrice[this]; 
            set => Fields.ExpenceSinglePrice[this] = value; 
        }

        [DisplayName("Expence Value"), Size(15), Scale(4)]
        public Decimal? ExpenceValue
        {
            get => Fields.ExpenceValue[this]; 
            set => Fields.ExpenceValue[this] = value; 
        }

        [DisplayName("A Expence Single Price"), Size(15), Scale(4)]
        public Decimal? AExpenceSinglePrice
        {
            get => Fields.AExpenceSinglePrice[this]; 
            set => Fields.AExpenceSinglePrice[this] = value; 
        }

        [DisplayName("A Expence Value"), Size(15), Scale(4)]
        public Decimal? AExpenceValue
        {
            get => Fields.AExpenceValue[this]; 
            set => Fields.AExpenceValue[this] = value; 
        }

        [DisplayName("Rest Quantity"), Size(15), Scale(4)]
        public Decimal? RestQuantity
        {
            get => Fields.RestQuantity[this]; 
            set => Fields.RestQuantity[this] = value; 
        }

        [DisplayName("Rest Single Price"), Size(15), Scale(4)]
        public Decimal? RestSinglePrice
        {
            get => Fields.RestSinglePrice[this]; 
            set => Fields.RestSinglePrice[this] = value; 
        }

        [DisplayName("Rest Value"), Size(15), Scale(4)]
        public Decimal? RestValue
        {
            get => Fields.RestValue[this]; 
            set => Fields.RestValue[this] = value; 
        }

        [DisplayName("A Rest Quantity"), Size(15), Scale(4)]
        public Decimal? ARestQuantity
        {
            get => Fields.ARestQuantity[this]; 
            set => Fields.ARestQuantity[this] = value; 
        }

        [DisplayName("A Rest Single Price"), Size(15), Scale(4)]
        public Decimal? ARestSinglePrice
        {
            get => Fields.ARestSinglePrice[this]; 
            set => Fields.ARestSinglePrice[this] = value; 
        }

        [DisplayName("A Rest Value"), Size(15), Scale(4)]
        public Decimal? ARestValue
        {
            get => Fields.ARestValue[this]; 
            set => Fields.ARestValue[this] = value; 
        }

        [DisplayName("Re Cost"), Size(15), Scale(4)]
        public Decimal? ReCost
        {
            get => Fields.ReCost[this]; 
            set => Fields.ReCost[this] = value; 
        }

        [DisplayName("A Re Cost"), Size(15), Scale(4)]
        public Decimal? AReCost
        {
            get => Fields.AReCost[this]; 
            set => Fields.AReCost[this] = value; 
        }

        [DisplayName("Mistake")]
        public Boolean? Mistake
        {
            get => Fields.Mistake[this]; 
            set => Fields.Mistake[this] = value; 
        }

        [DisplayName("A Mistake")]
        public Boolean? AMistake
        {
            get => Fields.AMistake[this]; 
            set => Fields.AMistake[this] = value; 
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => Fields.TenantId[this]; 
            set => Fields.TenantId[this] = value; 
        }

        public Int32Field TenantIdField
        {
            get => Fields.TenantId; 
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => Fields.IsActive[this]; 
            set => Fields.IsActive[this] = value; 
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => Fields.IsActive; 
        }

        #endregion Tenant & Activ

        public WarehouseRow()
        {
        }
        public WarehouseRow(RowFields Fields)
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int64Field Position;
            public BooleanField WaresMode;
            public Int32Field MoveId;
            public Int32Field ShopId;
            public Int32Field WaresId;
            public StringField Key;
            public DateTimeField Date;
            public Int32Field OperationId;
            public DecimalField IncomeQuantity;
            public DecimalField IncomeSinglePrice;
            public DecimalField IncomeValue;
            public DecimalField AIncomeSinglePrice;
            public DecimalField AIncomeValue;
            public DecimalField ExpenceQuantity;
            public DecimalField ExpenceSinglePrice;
            public DecimalField ExpenceValue;
            public DecimalField AExpenceSinglePrice;
            public DecimalField AExpenceValue;
            public DecimalField RestQuantity;
            public DecimalField RestSinglePrice;
            public DecimalField RestValue;
            public DecimalField ARestQuantity;
            public DecimalField ARestSinglePrice;
            public DecimalField ARestValue;
            public DecimalField ReCost;
            public DecimalField AReCost;
            public BooleanField Mistake;
            public BooleanField AMistake;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}
