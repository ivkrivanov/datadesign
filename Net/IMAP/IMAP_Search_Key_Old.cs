﻿using System;

namespace LumiSoft.Net.IMAP
{
    /// <summary>
    /// This class represents IMAP SEARCH <b>OLD</b> key. Defined in RFC 3501 6.4.4.
    /// </summary>
    /// <remarks>Messages that do not have the \Recent flag set.  This is
    /// functionally equivalent to "NOT RECENT" (as opposed to "NOT NEW").</remarks>
    public class IMAP_Search_Key_Old : IMAP_Search_Key
    {
        /// <summary>
        /// Default constructor.
        /// </summary>
        public IMAP_Search_Key_Old()
        {
        }


        #region static method Parse

        /// <summary>
        /// Returns parsed IMAP SEARCH <b>OLD</b> key.
        /// </summary>
        /// <param name="r">String reader.</param>
        /// <returns>Returns parsed IMAP SEARCH <b>OLD</b> key.</returns>
        /// <exception cref="ArgumentNullException">Is raised when <b>r</b> is null reference.</exception>
        /// <exception cref="ParseException">Is raised when parsing fails.</exception>
        internal static IMAP_Search_Key_Old Parse(StringReader r)
        {
            if(r == null)
            {
                throw new ArgumentNullException("r");
            }

            string word = r.ReadWord();
            if(!string.Equals(word,"OLD",StringComparison.InvariantCultureIgnoreCase))
            {
                throw new ParseException("Parse error: Not a SEARCH 'OLD' key.");
            }

            return new IMAP_Search_Key_Old();
        }

        #endregion


        #region override method ToString

        /// <summary>
        /// Returns this as string.
        /// </summary>
        /// <returns>Returns this as string.</returns>
        public override string ToString()
        {
            return "OLD";
        }

        #endregion
    }
}
