﻿using System;

namespace LumiSoft.Net.IMAP
{
    /// <summary>
    /// This class represents IMAP SEARCH <b>SUBJECT (string)</b> key. Defined in RFC 3501 6.4.4.
    /// </summary>
    /// <remarks>Messages that contain the specified string in the message header SUBJECT field.</remarks>
    public class IMAP_Search_Key_Subject : IMAP_Search_Key
    {
        private string m_Value = "";

        /// <summary>
        /// Default constructor.
        /// </summary>
        /// <param name="value">String value.</param>
        /// <exception cref="ArgumentNullException">Is raised when <b>value</b> is null reference.</exception>
        public IMAP_Search_Key_Subject(string value)
        {
            if(value == null)
            {
                throw new ArgumentNullException("value");
            }

            m_Value = value;
        }


        #region static method Parse

        /// <summary>
        /// Returns parsed IMAP SEARCH <b>SUBJCET (string)</b> key.
        /// </summary>
        /// <param name="r">String reader.</param>
        /// <returns>Returns parsed IMAP SEARCH <b>SUBJECT (string)</b> key.</returns>
        /// <exception cref="ArgumentNullException">Is raised when <b>r</b> is null reference.</exception>
        /// <exception cref="ParseException">Is raised when parsing fails.</exception>
        internal static IMAP_Search_Key_Subject Parse(StringReader r)
        {
            if(r == null)
            {
                throw new ArgumentNullException("r");
            }

            string word = r.ReadWord();
            if(!string.Equals(word,"SUBJECT",StringComparison.InvariantCultureIgnoreCase))
            {
                throw new ParseException("Parse error: Not a SEARCH 'SUBJECT' key.");
            }
            string value = r.ReadWord();
            if(value == null)
            {
                throw new ParseException("Parse error: Invalid 'SUBJECT' value.");
            }

            return new IMAP_Search_Key_Subject(value);
        }

        #endregion


        #region override method ToString

        /// <summary>
        /// Returns this as string.
        /// </summary>
        /// <returns>Returns this as string.</returns>
        public override string ToString()
        {
            return "SUBJECT " + TextUtils.QuoteString(m_Value);
        }

        #endregion


        #region Properties implementation

        /// <summary>
        /// Gets SUBJECT filter value.
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
