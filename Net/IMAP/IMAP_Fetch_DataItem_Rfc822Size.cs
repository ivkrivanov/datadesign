﻿
namespace LumiSoft.Net.IMAP
{
    /// <summary>
    /// This class represents FETCH RFC822.SIZE data item. Defined in RFC 3501.
    /// </summary>
    public class IMAP_Fetch_DataItem_Rfc822Size : IMAP_Fetch_DataItem
    {
        /// <summary>
        /// Default constructor.
        /// </summary>
        public IMAP_Fetch_DataItem_Rfc822Size()
        {
        }


        #region override method ToString

        /// <summary>
        /// Returns this as string.
        /// </summary>
        /// <returns>Returns this as string.</returns>
        public override string ToString()
        {
            return "RFC822.SIZE";
        }

        #endregion
    }
}
