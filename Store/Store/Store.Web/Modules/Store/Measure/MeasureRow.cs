
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using global::Store.Store.Scripts;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Measures]")]
    [DisplayName("Measures"), InstanceName("Measure")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript("Store.Measure", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class MeasureRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Measure Id"), Column("MeasureID"), Identity]
        public Int32? MeasureID
        {
            get { return Fields.MeasureID[this]; }
            set { Fields.MeasureID[this] = value; }
        }

        [DisplayName("Measure Name"), Size(20), NotNull, QuickSearch]
        public String MeasureName
        {
            get { return Fields.MeasureName[this]; }
            set { Fields.MeasureName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeasureID; }
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

        public MeasureRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field MeasureID;
            public StringField MeasureName;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}
