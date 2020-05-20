
namespace CoreStore
{
    using System.ComponentModel;
    using System.Data;
    using System.Data.SqlClient;
    using System.Reflection;
    using System;
    using System.Collections.Generic;

    public static class DAL
    {
        public static SqlDataAdapter StoreAdapter(SqlConnection con, int tenant)
        {
            SqlDataAdapter adapter = new SqlDataAdapter();

            string SelectString = @"SELECT * FROM [dbo].[Store] WHERE [TenantId] = @TenantId  ORDER BY [ShopID], [Key], [Date], [OperationID], [MoveID]";

            string InsertString = @"INSERT INTO [dbo].[Store] ([Position], [WaresMode], [MoveID], [ShopID], [WaresID], [Key], [Date], [OperationID], [IncomeQuantity], [IncomeSinglePrice], " +
                "[IncomeValue], [AIncomeSinglePrice], [AIncomeValue], [ExpenceQuantity], [ExpenceSinglePrice], [ExpenceValue], [AExpenceSinglePrice], [AExpenceValue], [RestQuantity], [RestSinglePrice], " +
                "[RestValue], [ARestQuantity], [ARestSinglePrice], [ARestValue], [ReCost], [AReCost], [Mistake], [AMistake], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) " +
                "VALUES (@Position, @WaresMode, @MoveID, @ShopID, @WaresID, @Key, @Date, @OperationID, @IncomeQuantity, @IncomeSinglePrice, @IncomeValue, @AIncomeSinglePrice, @AIncomeValue, @ExpenceQuantity, " +
                "@ExpenceSinglePrice, @ExpenceValue, @AExpenceSinglePrice, @AExpenceValue, @RestQuantity, @RestSinglePrice, @RestValue, @ARestQuantity, @ARestSinglePrice, @ARestValue, @ReCost, @AReCost, " +
                "@Mistake, @AMistake, @InsertDate, @InsertUserId, @UpdateDate, @UpdateUserId, @IsActive , @TenantId)";

            string UpdateString = @"UPDATE [dbo].[Store] SET [Position] = @Position, [WaresMode] = @WaresMode, [MoveID] = @MoveID, [ShopID] = @ShopID, [WaresID] = @WaresID, [Key] = @Key, " +
                 "[Date] = @Date, [OperationID] = @OperationID, [IncomeQuantity] = @IncomeQuantity, [IncomeSinglePrice] = @IncomeSinglePrice, [IncomeValue] = @IncomeValue, " +
                 "[AIncomeSinglePrice] = @AIncomeSinglePrice, [AIncomeValue] = @AIncomeValue, [ExpenceQuantity] = @ExpenceQuantity, [ExpenceSinglePrice] = @ExpenceSinglePrice, " +
                 "[ExpenceValue] = @ExpenceValue, [AExpenceSinglePrice] = @AExpenceSinglePrice, [AExpenceValue] = @AExpenceValue, [RestQuantity] = @RestQuantity, " +
                 "[RestSinglePrice] = @RestSinglePrice, [RestValue] = @RestValue, [ARestQuantity] = @ARestQuantity, [ARestSinglePrice] = @ARestSinglePrice, [ARestValue] = @ARestValue, " +
                 "[ReCost] = @ReCost, [AReCost] = @AReCost, [Mistake] = @Mistake, [AMistake] = @AMistake, [InsertDate] = @InsertDate, [InsertUserId] = @InsertUserId, [UpdateDate] = @UpdateDate, " +
                 "[UpdateUserId] = @UpdateUserId, [IsActive] = @IsActive, [TenantId] = @TenantId";

            string DeleteString = @"DELETE FROM [dbo].[Store] WHERE TenantId = @TenantId";

            // Create the SelectCommand.
            #region SELECT

            SqlCommand command = new SqlCommand(SelectString, con);
            command.Parameters.Add("@TenantId", SqlDbType.Int).Value = tenant;
            adapter.SelectCommand = command;

            #endregion

            // Create the UpdateCommand.
            #region UPDATE
            command = new SqlCommand(UpdateString, con);

            #region params

            command.Parameters.Add("@Position", SqlDbType.BigInt).SourceColumn = "Position";
            command.Parameters.Add("@WaresMode", SqlDbType.Bit).SourceColumn = "WaresMode";
            command.Parameters.Add("@MoveID", SqlDbType.Int).SourceColumn = "MoveID";
            command.Parameters.Add("@ShopID", SqlDbType.Int).SourceColumn = "ShopID";
            command.Parameters.Add("@WaresID", SqlDbType.Int).SourceColumn = "WaresID";
            command.Parameters.Add("@Key", SqlDbType.NVarChar).SourceColumn = "Key";
            command.Parameters.Add("@Date", SqlDbType.DateTime).SourceColumn = "Date";
            command.Parameters.Add("@OperationID", SqlDbType.Int).SourceColumn = "OperationID";
            command.Parameters.Add("@IncomeQuantity", SqlDbType.Decimal).SourceColumn = "IncomeQuantity";
            command.Parameters.Add("@IncomeSinglePrice", SqlDbType.Decimal).SourceColumn = "IncomeSinglePrice";
            command.Parameters.Add("@IncomeValue", SqlDbType.Decimal).SourceColumn = "IncomeValue";
            command.Parameters.Add("@AIncomeSinglePrice", SqlDbType.Decimal).SourceColumn = "AIncomeSinglePrice";
            command.Parameters.Add("@AIncomeValue", SqlDbType.Decimal).SourceColumn = "AIncomeValue";
            command.Parameters.Add("@ExpenceQuantity", SqlDbType.Decimal).SourceColumn = "ExpenceQuantity";
            command.Parameters.Add("@ExpenceSinglePrice", SqlDbType.Decimal).SourceColumn = "ExpenceSinglePrice";
            command.Parameters.Add("@ExpenceValue", SqlDbType.Decimal).SourceColumn = "ExpenceValue";
            command.Parameters.Add("@AExpenceSinglePrice", SqlDbType.Decimal).SourceColumn = "AExpenceSinglePrice";
            command.Parameters.Add("@AExpenceValue", SqlDbType.Decimal).SourceColumn = "AExpenceValue";
            command.Parameters.Add("@RestQuantity", SqlDbType.Decimal).SourceColumn = "RestQuantity";
            command.Parameters.Add("@RestSinglePrice", SqlDbType.Decimal).SourceColumn = "RestSinglePrice";
            command.Parameters.Add("@RestValue", SqlDbType.Decimal).SourceColumn = "RestValue";
            command.Parameters.Add("@ARestQuantity", SqlDbType.Decimal).SourceColumn = "ARestQuantity";
            command.Parameters.Add("@ARestSinglePrice", SqlDbType.Decimal).SourceColumn = "ARestSinglePrice";
            command.Parameters.Add("@ARestValue", SqlDbType.Decimal).SourceColumn = "ARestValue";
            command.Parameters.Add("@ReCost", SqlDbType.Decimal).SourceColumn = "ReCost";
            command.Parameters.Add("@AReCost", SqlDbType.Decimal).SourceColumn = "AReCost";
            command.Parameters.Add("@Mistake", SqlDbType.Bit).SourceColumn = "Mistake";
            command.Parameters.Add("@AMistake", SqlDbType.Bit).SourceColumn = "AMistake";
            command.Parameters.Add("@InsertDate", SqlDbType.DateTime).SourceColumn = "InsertDate";
            command.Parameters.Add("@InsertUserId", SqlDbType.Int).SourceColumn = "InsertUserId";
            command.Parameters.Add("@UpdateDate", SqlDbType.DateTime).SourceColumn = "UpdateDate";
            command.Parameters.Add("@UpdateUserId", SqlDbType.Int).SourceColumn = "UpdateUserId";
            command.Parameters.Add("@IsActive", SqlDbType.Int).SourceColumn = "IsActive";
            command.Parameters.Add("@TenantId", SqlDbType.Int).SourceColumn = "TenantId";

            #endregion

            adapter.UpdateCommand = command;
            #endregion

            // Create the InsertCommand.
            #region INSERT
            command = new SqlCommand(InsertString, con);

            #region params

            command.Parameters.Add("@Position", SqlDbType.BigInt).SourceColumn = "Position";
            command.Parameters.Add("@WaresMode", SqlDbType.Bit).SourceColumn = "WaresMode";
            command.Parameters.Add("@MoveID", SqlDbType.Int).SourceColumn = "MoveID";
            command.Parameters.Add("@ShopID", SqlDbType.Int).SourceColumn = "ShopID";
            command.Parameters.Add("@WaresID", SqlDbType.Int).SourceColumn = "WaresID";
            command.Parameters.Add("@Key", SqlDbType.NVarChar).SourceColumn = "Key";
            command.Parameters.Add("@Date", SqlDbType.DateTime, 50, "Date");
            command.Parameters.Add("@OperationID", SqlDbType.Int).SourceColumn = "OperationID";
            command.Parameters.Add("@IncomeQuantity", SqlDbType.Decimal).SourceColumn = "IncomeQuantity";
            command.Parameters.Add("@IncomeSinglePrice", SqlDbType.Decimal).SourceColumn = "IncomeSinglePrice";
            command.Parameters.Add("@IncomeValue", SqlDbType.Decimal).SourceColumn = "IncomeValue";
            command.Parameters.Add("@AIncomeSinglePrice", SqlDbType.Decimal).SourceColumn = "AIncomeSinglePrice";
            command.Parameters.Add("@AIncomeValue", SqlDbType.Decimal).SourceColumn = "AIncomeValue";
            command.Parameters.Add("@ExpenceQuantity", SqlDbType.Decimal).SourceColumn = "ExpenceQuantity";
            command.Parameters.Add("@ExpenceSinglePrice", SqlDbType.Decimal).SourceColumn = "ExpenceSinglePrice";
            command.Parameters.Add("@ExpenceValue", SqlDbType.Decimal).SourceColumn = "ExpenceValue";
            command.Parameters.Add("@AExpenceSinglePrice", SqlDbType.Decimal).SourceColumn = "AExpenceSinglePrice";
            command.Parameters.Add("@AExpenceValue", SqlDbType.Decimal).SourceColumn = "AExpenceValue";
            command.Parameters.Add("@RestQuantity", SqlDbType.Decimal).SourceColumn = "RestQuantity";
            command.Parameters.Add("@RestSinglePrice", SqlDbType.Decimal).SourceColumn = "RestSinglePrice";
            command.Parameters.Add("@RestValue", SqlDbType.Decimal).SourceColumn = "RestValue";
            command.Parameters.Add("@ARestQuantity", SqlDbType.Decimal).SourceColumn = "ARestQuantity";
            command.Parameters.Add("@ARestSinglePrice", SqlDbType.Decimal).SourceColumn = "ARestSinglePrice";
            command.Parameters.Add("@ARestValue", SqlDbType.Decimal).SourceColumn = "ARestValue";
            command.Parameters.Add("@ReCost", SqlDbType.Decimal).SourceColumn = "ReCost";
            command.Parameters.Add("@AReCost", SqlDbType.Decimal).SourceColumn = "AReCost";
            command.Parameters.Add("@Mistake", SqlDbType.Bit).SourceColumn = "Mistake";
            command.Parameters.Add("@AMistake", SqlDbType.Bit).SourceColumn = "AMistake";
            command.Parameters.Add("@InsertDate", SqlDbType.DateTime).SourceColumn = "InsertDate";
            command.Parameters.Add("@InsertUserId", SqlDbType.Int).SourceColumn = "InsertUserId";
            command.Parameters.Add("@UpdateDate", SqlDbType.DateTime).SourceColumn = "UpdateDate";
            command.Parameters.Add("@UpdateUserId", SqlDbType.Int).SourceColumn = "UpdateUserId";
            command.Parameters.Add("@IsActive", SqlDbType.Int).SourceColumn = "IsActive";
            command.Parameters.Add("@TenantId", SqlDbType.Int).SourceColumn = "TenantId";

            #endregion

            adapter.InsertCommand = command;
            #endregion

            // Create the DeleteCommand.
            command = new SqlCommand(DeleteString, con);
            command.Parameters.Add("@TenantId", SqlDbType.Int).Value = tenant;
            adapter.DeleteCommand = command;

            return adapter;
        }

        /// <summary>
        /// Convert DataTable Row to Object
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dataRow"></param>
        /// <returns></returns>
        public static T ToObject<T>(this DataRow dataRow) where T : new()
        {
            T item = new T();
            foreach (DataColumn column in dataRow.Table.Columns)
            {
                if (dataRow[column] != DBNull.Value)
                {
                    PropertyInfo prop = item.GetType().GetProperty(column.ColumnName);
                    if (prop != null)
                    {
                        //object result = Convert.ChangeType(dataRow[column], prop.PropertyType);
                        object result = ChangeType(dataRow[column], prop.PropertyType);
                        prop.SetValue(item, result, null);
                        continue;
                    }
                    else
                    {
                        FieldInfo fld = item.GetType().GetField(column.ColumnName);
                        if (fld != null)
                        {
                            object result = Convert.ChangeType(dataRow[column], fld.FieldType);
                            fld.SetValue(item, result);
                        }
                    }
                }
            }
            return item;
        }

        public static object ChangeType(object value, Type conversion)
        {
            var t = conversion;

            if (t.IsGenericType && t.GetGenericTypeDefinition().Equals(typeof(Nullable<>)))
            {
                if (value == null)
                {
                    return null;
                }

                t = Nullable.GetUnderlyingType(t);
            }

            return Convert.ChangeType(value, t);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="list"></param>
        /// <returns></returns>
        public static DataTable ConvertTo<T>(List<T> list) where T : new()
        {
            DataTable table = CreateTable<T>();
            Type entityType = typeof(T);
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(entityType);
            object value = null;
            DateTime dte = DateTime.MinValue;
            foreach (T item in list)
            {
                DataRow row = table.NewRow();
                foreach (PropertyDescriptor prop in properties)
                {
                    value = prop.GetValue(item);
                    if (value != null)
                    {
                        if ((value) is DateTime)
                        {
                            dte = (DateTime)value;
                            if (dte == DateTime.MinValue)
                            {
                                row[prop.Name] = DBNull.Value;
                            }
                            else
                            {
                                row[prop.Name] = (DateTime)value;
                            }
                        }
                        else
                        {
                            row[prop.Name] = prop.GetValue(item);
                        }
                    }
                    else
                    {
                        row[prop.Name] = DBNull.Value;
                    }
                }
                table.Rows.Add(row);
            }
            return table;
        }

        /// <summary>
        /// Create datatable
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static DataTable CreateTable<T>()
        {
            Type entityType = typeof(T);
            DataTable dt = new DataTable(entityType.Name);
            DataColumn dc = null;
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(entityType);
            if (properties != null)
            {
                foreach (PropertyDescriptor prop in properties)
                {
                    dc = new DataColumn();
                    dc.ColumnName = prop.Name;

                    if (prop.PropertyType.Name.Contains("Nullable"))
                        dc.DataType = typeof(String);
                    else
                        dc.DataType = prop.PropertyType;
                    dt.Columns.Add(dc);
                }
            }
            return dt;
        }



    }
}
