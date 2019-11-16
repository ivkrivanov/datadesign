
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
}