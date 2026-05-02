
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Measures]")]
    [DisplayName("Measures"), InstanceName("Measures")]
    [ReadPermission(PermissionKeys.Measures.View)]
    [ModifyPermission(PermissionKeys.Measures.Modify)]
    [DeletePermission(PermissionKeys.Measures.Delete)]
    [LookupScript("Store.Measures", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class MeasuresRow : LoggingRow<MeasuresRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Measure Id"), Column("MeasureID"), Identity, IdProperty]
        public int? MeasureId
        {
            get => fields.MeasureId[this];
            set => fields.MeasureId[this] = value;
        }

        [DisplayName("Measure Name"), Size(20), NotNull, QuickSearch, NameProperty]
        public string MeasureName
        {
            get => fields.MeasureName[this];
            set => fields.MeasureName[this] = value;
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

        public MeasuresRow()
            : base()
        {
        }

        public MeasuresRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field MeasureId;
            public StringField MeasureName;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}