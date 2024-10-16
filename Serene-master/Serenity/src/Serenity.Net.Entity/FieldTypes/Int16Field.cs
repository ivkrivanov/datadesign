﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;

namespace Serenity.Data
{
    public sealed class Int16Field : GenericValueField<short>
    {
        public Int16Field(ICollection<Field> collection, string name, LocalText caption = null, int size = 0, FieldFlags flags = FieldFlags.Default,
            Func<IRow, short?> getValue = null, Action<IRow, short?> setValue = null)
            : base(collection, FieldType.Int16, name, caption, size, flags, getValue, setValue)
        {
        }

        public static Int16Field Factory(ICollection<Field> collection, string name, LocalText caption, int size, FieldFlags flags,
            Func<IRow, short?> getValue, Action<IRow, short?> setValue)
        {
            return new Int16Field(collection, name, caption, size, flags, getValue, setValue);
        }

        public override void GetFromReader(IDataReader reader, int index, IRow row)
        {
            if (reader == null)
                throw new ArgumentNullException("reader");

            if (reader.IsDBNull(index))
                _setValue(row, null);
            else
                _setValue(row, Convert.ToInt16(reader.GetValue(index)));

            row.FieldAssignedValue(this);
        }

        public override void ValueToJson(JsonWriter writer, IRow row, JsonSerializer serializer)
        {
            var value = _getValue(row);
            if (value == null)
                writer.WriteNull();
            else //if (EnumType == null) şimdilik enum tipi belirtilse de string e çevrilerek yazma işlemi iptal, flag ile daha sonra ekleyelim
                writer.WriteValue(value.Value);
            //else if (EnumType.IsEnum)
            //    writer.WriteValue(Enum.GetName(EnumType, value.Value));
            //else if (EnumType.IsSubclassOf(typeof(DataEnum)))
            //    writer.WriteValue(DataEnum.ConvertFromInt32(EnumType, value.Value).Key);
        }

        public override void ValueFromJson(JsonReader reader, IRow row, JsonSerializer serializer)
        {
            if (reader == null)
                throw new ArgumentNullException("reader");

            switch (reader.TokenType)
            {
                case JsonToken.Null:
                case JsonToken.Undefined:
                    _setValue(row, null);
                    break;
                case JsonToken.Integer:
                case JsonToken.Float:
                case JsonToken.Boolean:
                    var v = Convert.ToInt16(reader.Value, CultureInfo.InvariantCulture);
                    if (EnumType == null)
                        _setValue(row, v);
                    else
                        _setValue(row, (short)Int32Field.ConvertEnumFromInt(EnumType, v));
                    break;
                case JsonToken.String:
                    string s = ((string)reader.Value).TrimToNull();
                    if (s == null)
                        _setValue(row, null);
                    else if (EnumType == null)
                        _setValue(row, Convert.ToInt16(s, CultureInfo.InvariantCulture));
                    else
                        _setValue(row, (short)Int32Field.ConvertEnumFromString(EnumType, s));
                    break;

                default:
                    throw JsonUnexpectedToken(reader);
            }

            row.FieldAssignedValue(this);
        }
    }
}
