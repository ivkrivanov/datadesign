﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;

namespace Serenity.Data
{
    public class StreamField : GenericClassField<Stream>
    {
        public StreamField(ICollection<Field> collection, string name, LocalText caption = null, int size = 0, FieldFlags flags = FieldFlags.Default,
            Func<IRow, Stream> getValue = null, Action<IRow, Stream> setValue = null)
            : base(collection, FieldType.Stream, name, caption, size, flags, getValue, setValue)
        {
        }

        public static StreamField Factory(ICollection<Field> collection, string name, LocalText caption, int size, FieldFlags flags,
            Func<IRow, Stream> getValue, Action<IRow, Stream> setValue)
        {
            return new StreamField(collection, name, caption, size, flags, getValue, setValue);
        }

        public override void GetFromReader(IDataReader reader, int index, IRow row)
        {
            if (reader == null)
                throw new ArgumentNullException("reader");

            if (reader.IsDBNull(index))
                _setValue(row, null);
            else
            {
                byte[] a;

                if (reader.GetType().Name == "SqliteDataReader")
                {
                    a = (byte[])reader.GetValue(index);
                }
                else
                {
                    long available = reader.GetBytes(index, 0, null, 0, 0);
                    a = new byte[available];
                    if (a.Length > 0)
                        reader.GetBytes(index, 0, a, 0, a.Length);
                }

                _setValue(row, new MemoryStream(a));
            }

            row.FieldAssignedValue(this);
        }

        public override int IndexCompare(IRow row1, IRow row2)
        {
            throw new NotImplementedException();
        }

        public static void CopyStream(Stream source, Stream dest)
        {
            if (source == null)
                throw new ArgumentNullException("source");
            if (dest == null)
                throw new ArgumentNullException("dest");

            byte[] buffer = new byte[4096];
            int read;
            do
            {
                read = source.Read(buffer, 0, buffer.Length);
                if (read != 0)
                    dest.Write(buffer, 0, read);
            } while (read != 0);
        }

        public override void ValueToJson(JsonWriter writer, IRow row, JsonSerializer serializer)
        {
            var value = _getValue(row);
            if (value == null ||
                value.Length == 0)
                writer.WriteNull();
            else
            {
                var ms = new MemoryStream((int)value.Length);
                CopyStream(value, ms);
                writer.WriteValue(ms.ToArray());
            }
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
                case JsonToken.String:
                    _setValue(row, new MemoryStream(Convert.FromBase64String((string)reader.Value)));
                    break;
                case JsonToken.Bytes:
                    _setValue(row, new MemoryStream((byte[])reader.Value));
                    break;
                default:
                    throw JsonUnexpectedToken(reader);
            }

            row.FieldAssignedValue(this);
        }
    }
}
