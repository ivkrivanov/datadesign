
namespace Average
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Data;
    using System.Reflection;

    public delegate T CreateObjectDelegate<T>();
    public static class Helper
    {
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
                        object result = Convert.ChangeType(dataRow[column], prop.PropertyType);
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

        /// <summary>
        /// Converts a List to a datatable
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="data"></param>
        /// <returns></returns>
        public static DataTable ToDataTable<T>(this IList<T> data)
        {
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
            DataTable dt = new DataTable();
            for (int i = 0; i < properties.Count; i++)
            {
                PropertyDescriptor property = properties[i];
                dt.Columns.Add(property.Name, property.PropertyType);
            }
            object[] values = new object[properties.Count];
            foreach (T item in data)
            {
                for (int i = 0; i < values.Length; i++)
                {
                    values[i] = properties[i].GetValue(item);
                }
                dt.Rows.Add(values);
            }
            return dt;
        }

        #region DataBase conversions

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
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="rows"></param>
        /// <param name="del"></param>
        /// <returns></returns>
        public static List<T> ConvertTo<T>(List<DataRow> rows,
                                   CreateObjectDelegate<T> del)
        {
            List<T> list = null;
            if (rows != null)
            {
                list = new List<T>();
                foreach (DataRow row in rows)
                {
                    T item = CreateItem<T>(row, del);
                    list.Add(item);
                }
            }
            return list;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="rows"></param>
        /// <returns></returns>
        public static List<T> ConvertTo<T>(List<DataRow> rows)
        {
            List<T> list = null;
            if (rows != null)
            {
                list = new List<T>();
                foreach (DataRow row in rows)
                {
                    T item = CreateItem<T>(row);
                    list.Add(item);
                }
            }
            return list;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="rows"></param>
        /// <returns></returns>
        public static List<T> ConvertTo<T>(DataRow[] rows)
        {
            List<T> list = null;
            if (rows != null)
            {
                list = new List<T>();
                foreach (DataRow row in rows)
                {
                    T item = CreateItem<T>(row);
                    list.Add(item);
                }
            }
            return list;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="rows"></param>
        /// <param name="sortString"></param>
        /// <returns></returns>
        public static List<T> ConvertTo<T>(List<DataRow> rows, string sortString)
        {
            List<T> list = null;
            if (rows != null)
            {
                list = new List<T>();
                foreach (DataRow row in rows)
                {
                    T item = CreateItem<T>(row);
                    list.Add(item);
                }
                GenericSorter<T> sorter = new GenericSorter<T>(sortString);
                list.Sort(sorter);
            }
            return list;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dt"></param>
        /// <param name="sortString"></param>
        /// <returns></returns>
        public static List<T> ConvertTo<T>(DataTable dt, string sortString)
        {
            if (dt == null)
            {
                return null;
            }
            List<DataRow> rows = new List<DataRow>();
            foreach (DataRow row in dt.Rows)
            {
                rows.Add(row);
            }
            return ConvertTo<T>(rows, sortString);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dt"></param>
        /// <returns></returns>
        public static List<T> ConvertTo<T>(DataTable dt)
        {
            if (dt == null)
            {
                return null;
            }
            List<DataRow> rows = new List<DataRow>();
            foreach (DataRow row in dt.Rows)
            {
                rows.Add(row);
            }
            return ConvertTo<T>(rows);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dt"></param>
        /// <param name="del"></param>
        /// <returns></returns>
        public static List<T> ConvertTo<T>(DataTable dt, CreateObjectDelegate<T> del)
        {
            if (dt == null)
            {
                return null;
            }
            List<DataRow> rows = new List<DataRow>();
            foreach (DataRow row in dt.Rows)
            {
                rows.Add(row);
            }
            return ConvertTo<T>(rows, del);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dr"></param>
        /// <param name="del"></param>
        /// <returns></returns>
        public static T CreateItem<T>(DataRow dr, CreateObjectDelegate<T> del)
        {
            T obj = default(T);

            if (dr != null)
            {
                if (del != null)
                {
                    obj = del.Invoke();
                }
                else
                {
                    obj = Activator.CreateInstance<T>();
                }
                if (obj != null)
                {
                    foreach (DataColumn column in dr.Table.Columns)
                    {
                        PropertyInfo prop = obj.GetType().GetProperty(column.ColumnName);
                        if (prop != null)
                        {
                            if (!object.ReferenceEquals(dr[column.ColumnName], DBNull.Value))
                            {
                                prop.SetValue(obj, dr[column.ColumnName], null);
                            }
                            else
                            {
                                prop.SetValue(obj, null, null);
                            }
                        }
                    }
                }
            }
            return obj;
        }
        /// <summary>
        /// Creating Item from datarow
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dr"></param>
        /// <returns></returns>
        public static T CreateItem<T>(DataRow dr)
        {
            T obj = default(T);
            if (dr != null)
            {
                obj = Activator.CreateInstance<T>();
                if (obj != null)
                {
                    foreach (DataColumn column in dr.Table.Columns)
                    {
                        PropertyInfo prop = obj.GetType().GetProperty(column.ColumnName);
                        if (prop != null)
                        {
                            if (!object.ReferenceEquals(dr[column.ColumnName], DBNull.Value))
                            {
                                prop.SetValue(obj, dr[column.ColumnName], null);
                            }
                            else
                            {
                                prop.SetValue(obj, null, null);
                            }
                        }
                    }
                }
            }
            return obj;
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
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(entityType);
            if (properties != null)
            {
                foreach (PropertyDescriptor prop in properties)
                {
                    dt.Columns.Add(prop.Name, prop.PropertyType);
                }
            }
            return dt;
        }

        #endregion
    }
    /// <summary>
    /// Sort order enumeration
    /// </summary>
    public enum SortOrder
    {
        Ascending,
        Descending
    }
    public class GenericSorter<T> : IComparer<T>
    {

        private string _sort;
        /// <summary>
        /// Instantiate the class.
        /// </summary>
        public GenericSorter()
        {
        }
        /// <summary>
        /// Instantiate the class, setting the sort string.
        ///
        /// Example: "LastName DESC, FirstName"
        /// </summary>
        public GenericSorter(string SortString)
        {
            _sort = SortString;
        }
        /// <summary>
        /// The sort string used to perform the sort. Can sort on multiple fields.
        /// Use the property names of the class and basic SQL Syntax.
        ///
        /// Example: "LastName DESC, FirstName"
        /// </summary>
        public string SortString
        {
            get
            {
                if (_sort != null)
                {
                    return _sort.Trim();
                }
                return null;
            }
            set { _sort = value; }
        }
        /// <summary>
        /// This is an implementation of IComparer(Of T).Compare
        /// Can sort on multiple fields, or just one.
        /// </summary>
        public int Compare(T x, T y)
        {
            if (!string.IsNullOrEmpty(this.SortString))
            {
                const string err = "The property \"{0}\" does not exist in type \"{1}\"";
                Type type = typeof(T);
                Comparer comp = Comparer.DefaultInvariant;
                PropertyInfo info = null;
                string trexpr;
                foreach (string expr in this.SortString.Split(','))
                {
                    SortOrder dir = SortOrder.Ascending;
                    string field = null;
                    trexpr = expr.Trim();
                    if (expr.EndsWith(" DESC"))
                    {
                        field = trexpr.Replace(" DESC", string.Empty).Trim();
                        dir = SortOrder.Descending;
                    }
                    else
                    {
                        field = trexpr.Replace(" ASC", string.Empty).Trim();
                    }
                    info = type.GetProperty(field);
                    if (info == null)
                    {
                        throw new MissingFieldException(string.Format(err, field, type.ToString()));
                    }
                    else
                    {
                        int Result = comp.Compare(info.GetValue(x, null), info.GetValue(y, null));
                        if (Result != 0)
                        {
                            if (dir == SortOrder.Descending)
                            {
                                return Result * -1;
                            }
                            else
                            {
                                return Result;
                            }
                        }
                    }
                }
            }
            return 0;
        }
    }

    public class Average
    {

        public static void AverageStore(List<Item> items)
        {
            Int64 Position = 0;
            Boolean WaresMode = false;
            Int32 KeyShop = 0;
            Int32 KeyWares = 0;

            decimal ExpenceQuantity = 0;
            decimal ExpenceSinglePrice = 0;
            decimal ExpenceValue = 0;

            decimal RestQuantity = 0;
            decimal RestSinglePrice = 0;
            decimal RestValue = 0;

            KeyShop = 0;
            KeyWares = 0;

            if (items.Count > 0) { Position = 1; };

            foreach (Item item in items)
            {
                item.Position = Position;
                if ((item.WaresID != KeyWares) || (item.ShopID != KeyShop))
                {
                    WaresMode = item.WaresMode;
                    KeyShop = item.ShopID;
                    KeyWares = item.WaresID;

                    ExpenceQuantity = 0;
                    ExpenceSinglePrice = 0;
                    ExpenceValue = 0;

                    RestQuantity = 0;
                    RestSinglePrice = 0;
                    RestValue = 0;
                }

                item.UpdateDate = (DateTime.Now);

                switch (item.OperationID)
                {
                    case 101:
                        RestQuantity = item.RestQuantity;
                        RestSinglePrice = item.RestSinglePrice;
                        RestValue = item.RestValue;
                        break;

                    case 102:
                    case 103:
                    case 105:
                        if (RestQuantity >= 0)
                            RestValue = RestValue + item.IncomeValue;
                        else
                            RestValue = (RestQuantity + item.IncomeQuantity) * item.IncomeSinglePrice;

                        RestQuantity = RestQuantity + item.IncomeQuantity;

                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;
                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;

                    case 109:
                        item.IncomeSinglePrice = RestSinglePrice;
                        item.IncomeValue = item.IncomeQuantity * RestSinglePrice;

                        if ((double)(RestQuantity + item.IncomeQuantity) < (-0.0001))
                            item.Mistake = true;

                        if (RestQuantity >= 0)
                            RestValue = RestValue + item.IncomeValue;
                        else
                            RestValue = (RestQuantity + item.IncomeQuantity) * item.IncomeSinglePrice;

                        RestQuantity = RestQuantity + item.IncomeQuantity;

                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;

                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;

                    case 202:
                    case 203:
                        if (WaresMode)
                        {
                            if (RestQuantity >= 0)
                                RestValue = RestValue + item.IncomeValue;
                            else
                                RestValue = (RestQuantity + item.IncomeQuantity) * item.IncomeSinglePrice;

                            RestQuantity = RestQuantity + item.IncomeSinglePrice;

                            if (RestQuantity != 0)
                                RestSinglePrice = RestValue / RestQuantity;
                            else
                                RestSinglePrice = 0;

                            item.RestQuantity = RestQuantity;
                            item.RestSinglePrice = RestSinglePrice;
                            item.RestValue = RestValue;
                        }
                        else
                        {
                            if ((double)(RestQuantity - item.ExpenceQuantity) < (-0.0001))
                            {
                                item.Mistake = true;
                            }
                            item.ExpenceSinglePrice = RestSinglePrice;
                            item.ExpenceValue = item.ExpenceQuantity * item.ExpenceSinglePrice;
                            RestQuantity = RestQuantity - item.ExpenceQuantity;
                            RestValue = RestValue - item.ExpenceValue;
                            if (RestQuantity != 0)
                                RestSinglePrice = RestValue / RestQuantity;
                            else
                                RestSinglePrice = 0;

                            item.RestQuantity = RestQuantity;
                            item.RestSinglePrice = RestSinglePrice;
                            item.RestValue = RestValue;
                        }
                        break;

                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 401:
                    case 402:
                    case 403:
                    case 404:
                        if ((double)(RestQuantity - item.ExpenceQuantity) < (-0.0001))
                        {
                            item.Mistake = true;
                        }
                        item.ExpenceSinglePrice = RestSinglePrice;
                        item.ExpenceValue = item.ExpenceQuantity * item.ExpenceSinglePrice;
                        RestQuantity = RestQuantity - item.ExpenceQuantity;
                        RestValue = RestValue - item.ExpenceValue;
                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;

                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;

                    case 500:
                        item.ExpenceQuantity = RestQuantity - item.RestQuantity;
                        if (RestQuantity > 0)
                            item.ExpenceSinglePrice = RestSinglePrice;
                        else
                        {
                            if (item.RestQuantity > 0)
                            {
                                ExpenceQuantity = ExpenceQuantity + RestQuantity;
                                ExpenceValue = ExpenceValue + RestValue;
                                if (ExpenceQuantity != 0)
                                    ExpenceSinglePrice = ExpenceValue / ExpenceQuantity;
                                else
                                    ExpenceSinglePrice = 0;

                                if (ExpenceQuantity != 0)
                                    item.ExpenceSinglePrice = (item.RestQuantity * ExpenceSinglePrice - RestValue) / (item.RestQuantity - RestQuantity);
                                else
                                {
                                    if (RestQuantity != 0)
                                        item.ExpenceSinglePrice = RestSinglePrice;
                                    else
                                        item.ExpenceSinglePrice = item.RestSinglePrice;
                                }
                            }
                            else
                            {
                                if (RestQuantity != 0)
                                    item.ExpenceSinglePrice = RestSinglePrice;
                                else
                                {
                                    if (ExpenceQuantity != 0)
                                        item.ExpenceSinglePrice = RestSinglePrice;
                                    else
                                        item.ExpenceSinglePrice = item.RestSinglePrice;
                                }
                            }
                        }
                        break;
                }
                Position = Position + 1;
            }
        }

    }
    public class Item
    {
        public Int64 Position { get; set; }
        public Boolean WaresMode { get; set; }
        public Int32 MoveID { get; set; }
        public Int32 ShopID { get; set; }
        public Int32 WaresID { get; set; }
        public string Key { get; set; }
        public DateTime Date { get; set; }
        public Int32 OperationID { get; set; }
        public decimal IncomeQuantity { get; set; }
        public decimal IncomeSinglePrice { get; set; }
        public decimal IncomeValue { get; set; }
        public decimal AIncomeSinglePrice { get; set; }
        public decimal AIncomeValue { get; set; }
        public decimal ExpenceQuantity { get; set; }
        public decimal ExpenceSinglePrice { get; set; }
        public decimal ExpenceValue { get; set; }
        public decimal AExpenceSinglePrice { get; set; }
        public decimal AExpenceValue { get; set; }
        public decimal RestQuantity { get; set; }
        public decimal RestSinglePrice { get; set; }
        public decimal RestValue { get; set; }
        public decimal ARestQuantity { get; set; }
        public decimal ARestSinglePrice { get; set; }
        public decimal ARestValue { get; set; }
        public decimal ReCost { get; set; }
        public decimal AReCost { get; set; }
        public Boolean Mistake { get; set; }
        public Boolean AMistake { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public Int32 IsActive { get; set; }
        public Int32 TenantId { get; set; }
    }
}

