
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using CoreStore.Scripts;
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
    public sealed class MeasuresRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Measure Id"), Column("MeasureID"), Identity]
        public Int32? MeasureId
        {
            get { return Fields.MeasureId[this]; }
            set { Fields.MeasureId[this] = value; }
        }

        [DisplayName("Measure Name"), Size(20), NotNull, QuickSearch]
        public String MeasureName
        {
            get { return Fields.MeasureName[this]; }
            set { Fields.MeasureName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeasureId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MeasureName; }
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Tenant & Activ

        public static readonly RowFields Fields = new RowFields().Init();

        public MeasuresRow()
            : base(Fields)
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
