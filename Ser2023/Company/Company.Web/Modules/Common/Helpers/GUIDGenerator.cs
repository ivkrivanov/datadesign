using System;

namespace Company
{
    /// Generates a guid based on the current date/time
    /// http://stackoverflow.com/questions/1752004/sequential-guid-generator-c-sharp
    /// </summary>
    public static class SequentialGuid
    {
        /// <returns></returns>
        public static Guid GetSequentialGuid()
        {
            var tempGuid = Guid.NewGuid();
            var bytes = tempGuid.ToByteArray();
            var time = DateTime.Now;
            bytes[3] = (byte)time.Year;
            bytes[2] = (byte)time.Month;
            bytes[1] = (byte)time.Day;
            bytes[0] = (byte)time.Hour;
            bytes[5] = (byte)time.Minute;
            bytes[4] = (byte)time.Second;
            return new Guid(bytes);
        }
    }
}