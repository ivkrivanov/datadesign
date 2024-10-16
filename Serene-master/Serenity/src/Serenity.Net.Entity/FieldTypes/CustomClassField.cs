﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;

namespace Serenity.Data
{
    public class CustomClassField<TValue> : GenericClassField<TValue>
        where TValue : class
    {
        public CustomClassField(ICollection<Field> collection, string name, LocalText caption, int size, FieldFlags flags,
            Func<IRow, TValue> getValue, Action<IRow, TValue> setValue)
            : base(collection, FieldType.Object, name, caption, size, flags, getValue, setValue)
        {
        }

        protected virtual TValue GetFromReader(IDataReader reader, int index)
        {
            throw new NotImplementedException();
        }

        public override void GetFromReader(IDataReader reader, int index, IRow row)
        {
            if (reader == null)
                throw new ArgumentNullException("reader");

            if (reader.IsDBNull(index))
                _setValue(row, null);
            else
                _setValue(row, GetFromReader(reader, index));

            row.FieldAssignedValue(this);
        }

        protected virtual int CompareValues(TValue value1, TValue value2)
        {
            return Comparer<TValue>.Default.Compare(value1, value2);
        }

        public override int IndexCompare(IRow row1, IRow row2)
        {
            var value1 = _getValue(row1);
            var value2 = _getValue(row2);

            bool null1 = value1 == null;
            bool null2 = value2 == null;
            if (null1 || null2)
            {
                if (null1 && null2)
                    return 0;
                else if (null1)
                    return -1;
                else
                    return 1;
            }
            else
                return CompareValues(value1, value2);
        }

        public virtual void ValueToJson(JsonWriter writer, TValue value, JsonSerializer serializer)
        {
            serializer.Serialize(writer, value);
        }

        public override void ValueToJson(JsonWriter writer, IRow row, JsonSerializer serializer)
        {
            var value = _getValue(row);
            if (value == null)
                writer.WriteNull();
            else
                ValueToJson(writer, value, serializer);
        }

        protected virtual TValue ValueFromJson(JsonReader reader, JsonSerializer serializer)
        {
            return serializer.Deserialize<TValue>(reader);
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

                default:
                    _setValue(row, ValueFromJson(reader, serializer));
                    break;
            }

            row.FieldAssignedValue(this);
        }

        protected virtual TValue Clone(TValue value)
        {
            return value;
        }

        public override void Copy(IRow source, IRow target)
        {
            var value = _getValue(source);
            if (value != null)
                value = Clone(value);

            _setValue(target, value);
            target.FieldAssignedValue(this);
        }
    }
}