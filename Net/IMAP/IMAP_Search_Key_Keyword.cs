﻿using System;

namespace LumiSoft.Net.IMAP
{
    /// <summary>
    /// This class represents IMAP SEARCH <b>KEYWORD (flag)</b> key. Defined in RFC 3501 6.4.4.
    /// </summary>
    /// <remarks>Messages with the specified keyword flag set.</remarks>
    public class IMAP_Search_Key_Keyword : IMAP_Search_Key
    {
        private string m_Value = "";

        /// <summary>
        /// Default constructor.
        /// </summary>
        /// <param name="value">String value.</param>
        /// <exception cref="ArgumentNullException">Is raised when <b>value</b> is null reference.</exception>
        public IMAP_Search_Key_Keyword(string value)
        {
            if(value == null)
            {
                throw new ArgumentNullException("value");
            }

            m_Value = value;
        }


        #region static method Parse

        /// <summary>
        /// Returns parsed IMAP SEARCH <b>KEYWORD (string)</b> key.
        /// </summary>
        /// <param name="r">String reader.</param>
        /// <returns>Returns parsed IMAP SEARCH <b>KEYWORD (string)</b> key.</returns>
        /// <exception cref="ArgumentNullException">Is raised when <b>r</b> is null reference.</exception>
        /// <exception cref="ParseException">Is raised when parsing fails.</exception>
        internal static IMAP_Search_Key_Keyword Parse(StringReader r)
        {
            if(r == null)
            {
                throw new ArgumentNullException("r");
            }

            string word = r.ReadWord();
            if(!string.Equals(word,"KEYWORD",StringComparison.InvariantCultureIgnoreCase))
            {
                throw new ParseException("Parse error: Not a SEARCH 'KEYWORD' key.");
            }
            string value = r.ReadWord();
            if(value == null)
            {
                throw new ParseException("Parse error: Invalid 'KEYWORD' value.");
            }

            return new IMAP_Search_Key_Keyword(value);
        }

        #endregion


        #region override method ToString

        /// <summary>
        /// Returns this as string.
        /// </summary>
        /// <returns>Returns this as string.</returns>
        public override string ToString()
        {
            return "KEYWORD " + m_Value;
        }

        #endregion


        #region Properties implementation

        /// <summary>
        /// Gets keyword value.
        /// </summary>
        public string Value
        {
            get
            {
                return m_Value;
            }
        }

        #endregion
    }
}
